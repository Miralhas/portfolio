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
        imageSrc: "https://github-production-user-asset-6210df.s3.amazonaws.com/89564433/481030332-d4ed687d-3dcd-420a-a15c-82429f0e081a.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250822%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250822T151747Z&X-Amz-Expires=300&X-Amz-Signature=8d53bbcf1c5da22769917daaae704bc977af841bf36a3e5b67e57ad94d247117&X-Amz-SignedHeaders=host",
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
