import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useNavigate, useNavigationType } from 'react-router-dom';
import Button from '@mui/material/Button';

export function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h2" component="div">
        {t('404NotFound')}
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate(-1);
        }}
      >
        {t('returnLastPage')}
      </Button>
    </>
  );
}

export default NotFound;
