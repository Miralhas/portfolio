import { Box, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledImage = styled("img")({
    display: "block",
    objectFit: "cover",
    margin: "0 auto",
})

const Projects = ({ language }: { language: "en" | "br" }) => {
    const { t } = useTranslation();
    const correctImageSrc = language === "en" ? "/images/under_construction_w_text.png" : "/images/under_construction_w_text_br.png";
    return (
        <Box sx={{
            mt: { xs: "3em", sm: "5em" }
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
            <StyledImage src={import.meta.env.BASE_URL+correctImageSrc} alt="projects section under construction" />
        </Box>
    )
}

export default Projects;
