import { Container, Typography } from "@mui/material";

const Loading = () => {
    return (
        <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
            <Typography variant="h1" color="primary">
                Loading...
            </Typography>
        </Container>
    )
}

export default Loading;
