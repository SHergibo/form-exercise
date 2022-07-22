import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { i18nKeys } from '@form-exercise/i18n';

export function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h2">{t(i18nKeys.title.notFound)}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate(-1);
        }}
      >
        {t(i18nKeys.button.returnLastPage)}
      </Button>
    </>
  );
}

export default NotFound;
