import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <>
            <Stack spacing={2} direction="column" useFlexGap >
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

                <Typography variant="subtitle2" textAlign="center" sx={(theme) => ({
                    background: "linear-gradient(45deg, #212121, #09182e)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    ...theme.applyStyles("dark", {
                        background: "linear-gradient(45deg, #FFF, #09182e)",
                    })
                })}>
                    {t("headingSubtitle")}
                </Typography>
            </Stack>
        </>
    )
}

export default Hero;
