import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { i18nKeys } from '@form-exercise/i18n';
import { ErrorMessage } from '@form-exercise/ui';
import useAuthContext from 'libs/utils/src/hooks/useAuthContext';
import { AppRoute, getRoutePath } from '../../routes';

export function Admin() {
  const { isLogged, setIsLogged } = useAuthContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fakeError, setFakeError] = useState(false);

  const logout = async (): Promise<void> => {
    setLoading(true);
    await axios
      .post('/api/logout')
      .then((response) => {
        if (response.status === 200) {
          setIsLogged(false);
          navigate(getRoutePath(AppRoute.LOGIN));
        }
      })
      .catch((error) => {
        setError(t(i18nKeys.error.logout));
      });
    setLoading(false);
  };

  useEffect(() => {
    if (fakeError) {
      throw new Error('I crashed!');
    }
  }, [fakeError]);

  return (
    <Box component="div">
      <Typography variant="h2" component="div">
        {t(i18nKeys.menu.title.admin)}
      </Typography>

      <LoadingButton
        variant="outlined"
        type="submit"
        onClick={logout}
        loading={loading}
        endIcon={<LockIcon />}
        loadingPosition="end"
      >
        {t(i18nKeys.button.logout)}
      </LoadingButton>

      <ErrorMessage message={error} />

      <Button
        variant="contained"
        onClick={() => {
          setFakeError(true);
        }}
      >
        {t(i18nKeys.button.generateAnError)}
      </Button>
    </Box>
  );
}

export default Admin;
