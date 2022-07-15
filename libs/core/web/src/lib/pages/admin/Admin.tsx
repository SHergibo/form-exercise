import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import { useTranslation } from 'react-i18next';

export function Admin() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const logout = async (): Promise<void> => {
    setLoading(true);
    await axios
      .post('/api/logout')
      .then((response) => {
        if (response.status === 200) {
          navigate('/');
        }
      })
      .catch((error) => {
        setError(t('errorLogout'));
      });
    setLoading(false);
  };

  return (
    <Box component="div">
      <Typography variant="h2" component="div">
        {t('administration')}
      </Typography>

      <LoadingButton
        variant="outlined"
        type="submit"
        onClick={logout}
        loading={loading}
        endIcon={<LockIcon />}
        loadingPosition="end"
      >
        {t('logout')}
      </LoadingButton>

      <Typography
        gutterBottom
        variant="body1"
        sx={{
          color: '#d32f2f',
          height: '1rem',
        }}
      >
        {error}
      </Typography>
    </Box>
  );
}

export default Admin;
