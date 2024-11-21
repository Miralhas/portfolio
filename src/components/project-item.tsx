import { GitHub } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Grid2, Paper, Stack, styled, Typography, useColorScheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { fetchSimpleIcons } from "react-icon-cloud";
import { Project } from "../types/project";
import { renderCustomIcon } from "../utils/utils";
import { IconData } from "./icon-cloud";

type ProjectProps = {
    project: Project;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: "100%",
    marginTop: "1em",
    borderRadius: theme.shape.borderRadius,
    outline: "6px solid",
    outlineColor: "hsla(220, 25%, 80%, 0.1)",
    border: '1px solid',
    borderColor: theme.palette.grey[200],
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
        outlineColor: 'hsla(220, 20%, 42%, 0.1)',
        borderColor: theme.palette.grey[700],
    }),
}));

const ProjectItem = ({ project }: ProjectProps) => {
    const [data, setData] = useState<IconData | null>(null);
    const { mode } = useColorScheme();

    useEffect(() => {
        fetchSimpleIcons({ slugs: project.technologySlugs }).then(setData);
    }, [project.technologySlugs]);

    const renderedIcons = useMemo(() => {
        if (!data) return null;

        return Object.values(data.simpleIcons).map((icon) =>
            renderCustomIcon(icon, mode || "light", 30),
        );
    }, [data, mode]);

    return (
        <Grid2 size={{ xs: 12, md: 6 }}>
            <StyledPaper elevation={3} variant="elevation">
                <Card>
                    <CardMedia component="img" image={project.imageSrc} height={250} />
                    <CardContent sx={{paddingBottom: ".75em !important"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {project.description}
                        </Typography>
                        <Stack direction="row" useFlexGap spacing={3} mt={3}>
                            {renderedIcons?.map(icon => (
                                <Box sx={{
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
                        <Button variant="text" color="inherit" startIcon={<GitHub />} LinkComponent="a" href={project.githubHref} sx={{
                            alignItems: "flex-start",
                            mt: "1.5em",
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
