import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getRouteTitle } from '@form-exercise/utils';

export function MenuTitle() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Typography variant="h6" flexGrow={1}>
      {t(getRouteTitle(location))}
    </Typography>
  );
}

export default MenuTitle;
