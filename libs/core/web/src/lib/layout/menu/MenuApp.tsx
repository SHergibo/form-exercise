import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { i18nKeys } from '@form-exercise/i18n';

export function MenuApp() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const languageSwitcher = (lang: string): void => {
    i18n.changeLanguage(lang, (err, t) => {
      t('key');
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {location.pathname === '/' && t(i18nKeys.menu.title.login)}
              {location.pathname === '/admin' && t(i18nKeys.menu.title.admin)}
              {location.pathname !== '/admin' &&
                location.pathname !== '/' &&
                t(i18nKeys.menu.title.notFound)}
            </Typography>

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ color: 'white' }}
            >
              {t(i18nKeys.button.switchLang)}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  languageSwitcher('fr');
                }}
              >
                {t(i18nKeys.lang.french)}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  languageSwitcher('en');
                }}
              >
                {t(i18nKeys.lang.english)}
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default MenuApp;
