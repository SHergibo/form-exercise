import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactElement } from 'react';

const theme = createTheme({
  palette: {
    white: { main: '#ffffff' },
  },
  typography: {
    error: {
      color: '#d32f2f',
      margin: '0',
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.5',
      letterSpacing: '0.00938em',
      height: '1rem',
    },
  },
});

interface ThemeContext {
  children: ReactElement;
}

export function ThemeContext({ children }: ThemeContext) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeContext;
