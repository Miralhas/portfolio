import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Container, styled } from '@mui/system';
import { Suspense, useState } from 'react';
import './App.css';
import Hero from './components/hero';
import Loading from './components/loading';
import Navbar from './components/navbar';
import ProjectsGrid from './components/projects';
import Technologies from './components/technologies';
import { AcceptedLanguages } from './types/accepted-languages';
import { theme } from './lib/theme';


const StyledBackgroundBox = styled(Box)(({ theme }) => {
  return {
    minHeight: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
    }),
  }
})

function App() {
  const [language, setLanguage] = useState<AcceptedLanguages>("en");

  return (
    <ThemeProvider theme={theme} defaultMode='dark'>
      <CssBaseline enableColorScheme />
      <StyledBackgroundBox>
        <Suspense fallback={<Loading />}>
          <Navbar language={language} setLanguage={setLanguage} />
          <Container fixed sx={{ padding: "1em" }}>
            <Hero />
            <Technologies />
            <ProjectsGrid />
          </Container>
        </Suspense>
      </StyledBackgroundBox>
    </ThemeProvider>
  )
}

export default App
