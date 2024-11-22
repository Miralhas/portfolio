import { Box, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import IconCloud from "./icon-cloud";

const StyledBox = styled(Box)(({ theme }) => ({
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    outline: "6px solid",
    outlineColor: "hsla(220, 25%, 80%, 0.2)",
    border: '1px solid',
    borderColor: theme.palette.grey[200],
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    padding: "1em",
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
        outlineColor: 'hsla(220, 20%, 42%, 0.1)',
        borderColor: theme.palette.grey[700],
    }),
}));

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "amazonwebservices",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "springboot",
    "mysql",
];

const Technologies = () => {
    const { t } = useTranslation()
    return (
        <Box
            sx={{
                minHeight: { xs: "50vh", sm: "100vh" },
            }}
        >
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
                {t("knownTechnologies")}
            </Typography>
            <StyledBox>
                <IconCloud iconSlugs={slugs} />
            </StyledBox>
        </Box>
    )
}

export default Technologies;
