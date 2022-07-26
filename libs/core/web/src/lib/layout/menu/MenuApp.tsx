import { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { i18nKeys, Languages, languageSwitcher } from '@form-exercise/i18n';
import {
  MenuTitle,
  adminRoutesArray,
  useAuthContext,
} from '@form-exercise/core/web';

export function MenuApp() {
  const { t } = useTranslation();
  const { isLogged, logout } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box flexGrow={1}>
        <AppBar position="static">
          <Toolbar>
            <MenuTitle />

            {isLogged && (
              <List component="nav">
                {adminRoutesArray.map((route, index) => (
                  <Button
                    component={NavLink}
                    to={route.path}
                    key={`${route.routeName}-${index}`}
                    color="white"
                  >
                    <ListItemButton>
                      <ListItemText primary={t(route.routeName)} />
                    </ListItemButton>
                  </Button>
                ))}
              </List>
            )}

            <Button
              id="basic-button"
              variant="contained"
              disableElevation
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
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
                  languageSwitcher(Languages.FR);
                }}
              >
                {t(i18nKeys.lang.french)}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  languageSwitcher(Languages.EN);
                }}
              >
                {t(i18nKeys.lang.english)}
              </MenuItem>
            </Menu>

            {isLogged && (
              <IconButton aria-label="logout" color="white" onClick={logout}>
                <MeetingRoomIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default MenuApp;
