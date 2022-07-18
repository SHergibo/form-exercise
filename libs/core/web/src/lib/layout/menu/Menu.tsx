import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Outlet, useLocation } from 'react-router-dom';

export function Menu() {
  const { t } = useTranslation();
  const location = useLocation();

  const languageSwitcher = (): void => {
    let lang = '';
    if (i18next.language === 'fr') {
      lang = 'en';
    } else {
      lang = 'fr';
    }
    i18next.changeLanguage(lang, (err, t) => {
      t('key');
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {location.pathname === '/' ? t('login') : t('administration')}
            </Typography>
            <Button color="inherit" onClick={languageSwitcher}>
              {t('switchLang')}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default Menu;
