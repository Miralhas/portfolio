import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Typewriter from 'typewriter-effect';
import Socials from "./socials";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <>
            <Stack direction="column" useFlexGap spacing={2}  sx={{
                minHeight: { xs: "70vh", sm: "100vh" },
            }} alignItems="center" justifyContent="center">
                <Typography
                    variant="h1"
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        justifyContent: "center",
                        fontWeight: 500,
                        gap: ".2em",
                        fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                    }}
                >
                    Victor
                    <Typography variant="h1" component="span" sx={(theme) => ({
                        fontWeight: "inherit",
                        fontSize: "inherit",
                        color: 'primary.main',
                        ...theme.applyStyles('dark', {
                            color: 'primary.dark',
                        }),
                    })}>
                        <Typewriter
                            options={{ loop: true, autoStart: true }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Miralhas')
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </Typography>
                </Typography>

                <Typography variant="subtitle2" textAlign="center" sx={{
                    fontWeight: 700,
                    color: "text.secondary"
                }}>
                    {t("headingSubtitle")}
                </Typography>
                <Stack direction="column" useFlexGap spacing={1}>
                    <Button variant="contained" sx={(theme) => ({
                        width: "100%",
                        ...theme.applyStyles("dark", {
                            background: theme.palette.primary.dark
                        }),
                        transition: "all 250ms",
                        "&:hover": {
                            transform: "scale(1.1)",
                            background: "transparent",
                            color: theme.palette.text.primary,
                            border: "1px solid",
                            borderColor: theme.palette.primary.dark
                        }
                    })} LinkComponent="a" target="_blank" href={import.meta.env.BASE_URL+"assets/cv.pdf"}>{t("resume")}</Button>
                    <Socials />
                </Stack>
            </Stack>
        </>
    )
}

export default Hero;
