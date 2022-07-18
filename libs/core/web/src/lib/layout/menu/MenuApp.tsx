import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Outlet, useLocation } from 'react-router-dom';

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function MenuApp() {
  const { t } = useTranslation();
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

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ color: 'white' }}
            >
              {t('switchLang')}
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
                {t('french')}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  languageSwitcher('en');
                }}
              >
                {t('english')}
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
