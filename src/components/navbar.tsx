import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, styled, Typography, useColorScheme } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LogoBox = styled(Box)({
    transition: "all 500ms ease-in-out",
    "&:hover": {
        transform: "scale(1.3)",
        rotate: "15deg"
    }
});

type NavbarProps = {
    language: "en" | "br",
    setLanguage: Dispatch<SetStateAction<"en" | "br">>
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
    const { mode, setMode } = useColorScheme();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n])

    const toggleMode = () => {
        setMode(mode === "light" ? "dark" : "light");
    }
    return (
        <Box position="sticky" top={15} display="flex" alignItems="center" sx={{
            justifyContent: { xs: "center", sm: "space-between" }
        }}>
            <LogoBox>
                <Typography variant="h6" fontWeight={500}>
                    V
                    <Typography display={"inline"} variant="h6" component="span" sx={(theme) => ({
                        color: "primary.main",
                        ...theme.applyStyles("dark", {
                            color: "primary.dark"
                        })
                    })}>
                        M
                    </Typography>
                </Typography>
            </LogoBox>
            {/* <Box display="flex" gap={2}> */}
            <IconButton aria-label="toggle dark mode" onClick={toggleMode} size="small" sx={{
                margin: { xs: "0 auto", md: "0 1em 0 auto" },
                left: { xs: "20px", md: "0px" }
            }}>
                {mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
            <FormControl sx={{ minWidth: "80px" }} size="small" variant="standard">
                <InputLabel sx={{ fontSize: ".9rem" }} id="demo-simple-select-standard-label">{t("language")}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Language"
                    onChange={e => setLanguage(e.target.value as "br" | "en")}
                    sx={{ fontSize: ".75rem" }}
                >
                    <MenuItem value="en" sx={{ fontSize: ".75rem" }}>EN</MenuItem>
                    <MenuItem value="br" sx={{ fontSize: ".75rem" }}>BR</MenuItem>
                </Select>
            </FormControl>
            {/* </Box> */}
        </Box>
    )
}

export default Navbar;
