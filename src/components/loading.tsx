import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Typewriter from 'typewriter-effect';

const Loading = () => {
    const { t } = useTranslation();
    return (
        <Container sx={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}>
            <Typography fontWeight={400} variant="h1" sx={(theme) => ({
                color: "primary.main",
                ...theme.applyStyles('dark', {
                    color: 'primary.dark',
                }),
            })}>
                <Typewriter
                    options={{ loop: true, autoStart: true }}
                    onInit={(typewriter) => {
                        typewriter.typeString(t("loading"))
                            .pauseFor(500)
                            .deleteAll()
                            .start();
                    }}
                />
            </Typography>
        </Container>
    )
}

export default Loading;
