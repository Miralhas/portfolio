import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Project } from "../types/project";
import ProjectItem from "./project-item";


const projects: Project[] = [
    {
        id: 1,
        title: "Devilsect",
        description: "devilsect",
        technologySlugs: ["react", "nextdotjs", "tailwindcss", "zod", "reactquery"],
        imageSrc: "https://cdn.discordapp.com/attachments/915511876245405696/1408487266975748168/2025-08-22_11-45-14-ezgif.com-video-to-gif-converter1.gif?ex=68a9eb7c&is=68a899fc&hm=0804f96e583a6b4e8e7ddf36a91b5aff40b6dcd0bcfc1c39089307a14a39dcc4",
        githubHref: "https://github.com/Miralhas/devilsect",
        webisteLink: "https://devilsect.vercel.app",
    },
    {
        id: 2,
        title: "Lecturize It",
        description: "lecturizeit",
        technologySlugs: ["java", "react", "typescript", "tailwindcss", "vercel", "mysql"],
        imageSrc: "/images/projects/lecturizeit.png",
        githubHref: "https://github.com/lecturizeit",
    },
    {
        id: 3,
        title: "Art Gallery",
        description: "artGallery",
        technologySlugs: ["python", "django", "sqlite", "javascript", "html5", "css3"],
        imageSrc: "/images/projects/art-gallery.png",
        githubHref: "https://github.com/Miralhas/art-gallery",
    },
    {
        id: 4,
        title: "Portfolio",
        description: "portfolio",
        technologySlugs: ["react", "typescript", "githubpages", "mui", "html5"],
        imageSrc: "https://github.com/user-attachments/assets/d581a19a-1d60-4c5b-b454-51972328f40f",
        githubHref: "https://github.com/Miralhas/portfolio",
        webisteLink: "https://miralhas.com",
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
            <Grid2 container spacing={3}>
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
