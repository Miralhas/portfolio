import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Container, styled } from '@mui/system';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import { Suspense } from 'react';
import Loading from './components/loading';

const theme = createTheme({
  colorSchemes: {
    light: true,
    dark: {
      palette: {
        background: {
          default: "#05070a"
        }
      }
    }
  }
})

const StyledBackgroundBox = styled(Box)(({ theme }) => {
  console.log(theme)
  return {
    minHeight: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
    }),
    display: "flex"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme} defaultMode='dark'>
      <CssBaseline enableColorScheme />
      <StyledBackgroundBox>
        <Suspense fallback={<Loading />}>
          <Container fixed>
            <Navbar />
            <Hero />
          </Container>
        </Suspense>
      </StyledBackgroundBox>
    </ThemeProvider>
  )
}

export default App
