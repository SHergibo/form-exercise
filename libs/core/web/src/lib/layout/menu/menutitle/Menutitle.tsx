import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@form-exercise/i18n';

export function Menutitle() {
  const { t } = useTranslation();

  return (
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      {location.pathname === '/' && t(i18nKeys.menu.title.login)}
      {location.pathname === '/admin' && t(i18nKeys.menu.title.admin)}
      {location.pathname !== '/admin' &&
        location.pathname !== '/' &&
        t(i18nKeys.menu.title.notFound)}
    </Typography>
  );
}

export default Menutitle;
