import { GitHub } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Grid2, Paper, Stack, styled, Tooltip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSimpleIcons } from "../hooks/useSimpleIcons";
import { Project } from "../types/project";
import { truncateText } from "../utils/utils";

type ProjectProps = {
    project: Project;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    outline: "6px solid",
    outlineColor: "hsla(220, 25%, 80%, 0.1)",
    border: '1px solid',
    borderColor: theme.palette.grey[200],
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.5)',
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.3)',
        outlineColor: 'hsla(220, 20%, 42%, 0.1)',
        borderColor: theme.palette.grey[700],
    }),
}));

const tooltipText = (text: string) => {
    return text.length === truncateText(text, 25).length ? "" : text;
}

const ProjectItem = ({ project }: ProjectProps) => {
    const { t } = useTranslation();
    const renderedIcons = useSimpleIcons(project.technologySlugs, 30);

    return (
        <Grid2 size={{ xs: 12, md: 6, xxl: 4 }}>
            <StyledPaper elevation={0} variant="elevation">
                <Card>
                    <CardMedia component="img" image={project.imageSrc} height={250} />
                    <CardContent sx={{ paddingBottom: ".75em !important" }}>
                        <Box sx={{ minHeight: "81px" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {project.title}
                            </Typography>
                            <Tooltip title={tooltipText(t(project.description))} placement="top-end" arrow enterDelay={700} leaveDelay={200}>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {truncateText(t(project.description), 25)}
                                </Typography>
                            </Tooltip>
                        </Box>
                        <Stack direction="row" useFlexGap spacing={3} mt={3}>
                            {renderedIcons?.map(icon => (
                                <Box key={icon.key} sx={{
                                    transition: "all 250ms",
                                    "&:hover": {
                                        transform: "scale(1.5)",
                                        rotate: "5deg"
                                    }
                                }}>
                                    {icon}
                                </Box>
                            ))}
                        </Stack>
                        <Button
                            variant="text"
                            color="inherit"
                            startIcon={<GitHub />}
                            LinkComponent="a"
                            href={project.githubHref}
                            target="_blank"
                            sx={{
                                alignItems: "flex-start",
                                marginTop: "1.5em",
                                transition: "all 450ms",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    px: "1em"
                                }
                            }}>
                            Github
                        </Button>
                    </CardContent>
                </Card>
            </StyledPaper>
        </Grid2>
    )
}

export default ProjectItem;
