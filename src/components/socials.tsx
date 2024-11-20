import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Box, IconButton, styled, Tooltip } from "@mui/material";

const IconWrapper = styled(Box)({
    display: "flex",
    fontSize: 35,
    transition: "all 250ms",
    "&:hover": {
        transform: "scale(1.25)"
    }
})

const Socials = () => {
    return (
        <Box>
            <Tooltip title="Github">
                <IconButton LinkComponent="a" href="https://github.com/miralhas">
                    <IconWrapper>
                        <GitHub fontSize="inherit" />
                    </IconWrapper>
                </IconButton>
            </Tooltip>
            <Tooltip title="Linkedin">
                <IconButton LinkComponent="a" href="https://www.linkedin.com/in/victor-miralhas">
                    <IconWrapper>
                        <LinkedIn fontSize="inherit" />
                    </IconWrapper>
                </IconButton>
            </Tooltip>
            <Tooltip title="Mail">
                <IconButton LinkComponent="a" href="mailto:victorsouza.miralhas@gmail.com">
                    <IconWrapper>
                        <Mail fontSize="inherit" />
                    </IconWrapper>
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default Socials;
