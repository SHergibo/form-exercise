import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { InputTextField } from '@form-exercise/ui';
import { EnumSize, EnumVariant } from '@form-exercise/data/enum';
import Box from '@mui/material/Box';
import axios from 'axios';
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
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(formValuesSchema) });

  const onSubmit: SubmitHandler<FormValues> = (data): void => {
    setError('');
    axios
      .post('/api/login', data)
      .then((response) => {
        if (response.status === 200) {
          navigate('/admin');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Typography variant="h2" component="div">
          Connexion
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <InputTextField
                size={EnumSize.small}
                error={errors.email?.message}
                id="email"
                type="email"
                label="Email *"
                variant={EnumVariant.outlined}
                register={register}
              />
            </Grid>
            <Grid item>
              <InputTextField
                size={EnumSize.small}
                error={errors.password?.message}
                id="password"
                type="password"
                label="Password *"
                variant={EnumVariant.outlined}
                register={register}
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
            height: '1rem',
          }}
        >
          {error}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
