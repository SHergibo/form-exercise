import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

/* eslint-disable-next-line */
export interface FormValues {
  email: string;
  password: string;
}

const formValuesSchema = yup
  .object({
    email: yup.string().email('Email non valide!').required('Email requis!'),
    password: yup
      .string()
      .min(6, 'Mot de passe trop court!')
      .required('Mot de passe requis!'),
  })
  .required();

export function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(formValuesSchema) });

  const onSubmit: SubmitHandler<FormValues> = (data): void => {
    console.log(data);
    // navigate('/admin');
  };

  const logout = (): void => {};

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Typography variant="h2" component="div">
          Connexion
        </Typography>

        {!isLoggedIn && (
          <>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <TextField
                    size="small"
                    fullWidth
                    error={errors.email?.message ? true : false}
                    id="email"
                    type="email"
                    label="Email *"
                    variant="outlined"
                    helperText={
                      errors.email?.message ? errors.email?.message : ' '
                    }
                    {...register('email')}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    size="small"
                    fullWidth
                    error={errors.password?.message ? true : false}
                    id="password"
                    type="password"
                    label="password *"
                    variant="outlined"
                    helperText={
                      errors.password?.message ? errors.password?.message : ' '
                    }
                    {...register('password')}
                  />
                </Grid>
                <Grid item>
                  <Button variant="outlined" type="submit" fullWidth>
                    Connexion
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Typography
              gutterBottom
              variant="body1"
              sx={{
                color: '#d32f2f',
              }}
            >
              {''}
            </Typography>
          </>
        )}

        {isLoggedIn && (
          <Button variant="outlined" onClick={logout}>
            {'Déconnexion'}
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default Login;
