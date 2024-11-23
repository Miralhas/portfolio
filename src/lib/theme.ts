import { createTheme } from "@mui/material";

declare module '@mui/system' {
  interface BreakpointOverrides {
    xxl: true
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2000,
    },
  },
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