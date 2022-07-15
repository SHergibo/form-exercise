import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface AdminProps {}

export function Admin(props: AdminProps) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const logout = (): void => {
    axios
      .post('/api/logout')
      .then((response) => {
        if (response.status === 200) {
          navigate('/');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Box component="div">
      <Typography variant="h2" component="div">
        Administration
      </Typography>

      <Button variant="outlined" onClick={logout}>
        {'Déconnexion'}
      </Button>
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
