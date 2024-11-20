import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Container, styled } from '@mui/system';
import { Suspense, useState } from 'react';
import './App.css';
import Hero from './components/hero';
import Loading from './components/loading';
import Navbar from './components/navbar';
import Technologies from './components/technologies';
import Projects from './components/projects';

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
    display: "flex",
  }
})

function App() {
  const [language, setLanguage] = useState<"en" | "br">("en");

  return (
    <ThemeProvider theme={theme} defaultMode='dark'>
      <CssBaseline enableColorScheme />
      <StyledBackgroundBox>
        <Suspense fallback={<Loading />}>
          <Container fixed sx={{ padding: "1em" }}>
            <Navbar language={language} setLanguage={setLanguage} />
            <Hero />
            <Technologies />
            <Projects language={language}/>
          </Container>
        </Suspense>
      </StyledBackgroundBox>
    </ThemeProvider>
  )
}

export default App
