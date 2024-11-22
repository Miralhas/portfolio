import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Project } from "../types/project";
import ProjectItem from "./project-item";


const projects: Project[] = [
    {
        id: 1,
        title: "Lecturize It",
        description: "lecturizeit",
        technologySlugs: ["java", "react", "typescript", "tailwindcss", "vercel", "mysql" ],
        imageSrc: import.meta.env.BASE_URL + "/images/projects/lecturizeit.png",
        githubHref: "https://github.com/lecturizeit",
    },
    {
        id: 2,
        title: "E-commerce UOL",
        description: "ecommerce",
        technologySlugs: ["java", "mysql", "springboot", "swagger", "jsonwebtokens"],
        imageSrc: import.meta.env.BASE_URL + "/images/projects/e-commerce-uol.png",
        githubHref: "https://github.com/Miralhas/e-commerce-uol",
    },
    {
        id: 3,
        title: "Art Gallery",
        description: "artGallery",
        technologySlugs: ["python", "django", "sqlite", "javascript", "html5", "css3"],
        imageSrc: import.meta.env.BASE_URL + "/images/projects/art-gallery.png",
        githubHref: "https://github.com/Miralhas/art-gallery",
    },
    {
        id: 4,
        title: "Portfolio",
        description: "portfolio",
        technologySlugs: ["react", "typescript", "githubpages", "mui", "html5"],
        imageSrc: import.meta.env.BASE_URL + "/images/projects/portfolio.png",
        githubHref: "https://github.com/Miralhas/portfolio",
    },
] as const;

const ProjectsGrid = () => {
    const { t } = useTranslation();
    return (
        <Box sx={{
            mt: { xs: "3em", sm: "5em" },
            display: "grid"
        }}>
            <Typography component="h2" textAlign="center" sx={(theme) => ({
                fontSize: { xs: theme.typography.h5.fontSize, md: theme.typography.h4.fontSize },
                fontWeight: 500,
                background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                backgroundClip: "text",
                color: "transparent",
                ...theme.applyStyles("dark", {
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                }),
                mb: "1em"
            })}>
                {t("projects")}
            </Typography>
            <Grid2 container spacing={3} sx={{height: "fit-content"}}>
                {projects.map(project => (
                    <React.Fragment key={project.id}>
                        <ProjectItem project={project} />
                    </React.Fragment>
                ))}
            </Grid2>
        </Box>
    )
}

export default ProjectsGrid;
