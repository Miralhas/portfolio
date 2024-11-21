import { Box, Grid2, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AcceptedLanguages } from "../types/accepted-languages";
import { Project } from "../types/project";
import ProjectItem from "./project-item";
import React from "react";

const StyledImage = styled("img")({
    display: "block",
    objectFit: "cover",
    margin: "auto",
})

type ProjectsProps = {
    language: AcceptedLanguages
}

const projects: Project[] = [
    {
        id: 1,
        title: "Lecturize It",
        description: "Projeto do pi kkkkj",
        technologySlugs: ["java", "react", "mysql", "tailwindcss", "vercel"],
        imageSrc: import.meta.env.BASE_URL + "/images/projects/lecturizeit.png",
        githubHref: "https://github.com/lecturizeit",
    },
    {
        id: 2,
        title: "E-commerce UOL",
        description: "Projeto do estágio kkkj",
        technologySlugs: ["java", "mysql", "springboot", "swagger", "jsonwebtokens"],
        imageSrc: import.meta.env.BASE_URL + "/images/projects/e-commerce-uol.png",
        githubHref: "https://github.com/Miralhas/e-commerce-uol",
    },
] as const;

const ProjectsGrid = ({ language }: ProjectsProps) => {
    const { t } = useTranslation();
    const correctImageSrc = language === "en" ? "/images/under_construction_w_text.png" : "/images/under_construction_w_text_br.png";
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
                })
            })}>
                {t("projects")}
            </Typography>
            <StyledImage src={import.meta.env.BASE_URL + correctImageSrc} alt="projects section under construction" />
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
