import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    error: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    error?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
  }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true;
  }
}
