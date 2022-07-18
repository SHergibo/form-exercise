import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { InputTextField } from '@form-exercise/ui';
import { EnumSize, EnumVariant } from '@form-exercise/data/enum';
import Box from '@mui/material/Box';
import axios from 'axios';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import i18next from 'i18next';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

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
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(formValuesSchema) });

  const onSubmit: SubmitHandler<FormValues> = async (data): Promise<void> => {
    setError('');
    setLoading(true);
    await axios
      .post('/api/login', data)
      .then((response) => {
        if (response.status === 200) {
          navigate('/admin');
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setError(t('errorLogin'));
        }
      });
    setLoading(false);
  };

  const languageSwitcher = (): void => {
    let lang = '';
    if (i18next.language === 'fr') {
      lang = 'en';
    } else {
      lang = 'fr';
    }
    i18next.changeLanguage(lang, (err, t) => {
      t('key');
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t('login')}
            </Typography>
            <Button color="inherit" onClick={languageSwitcher}>
              {t('switchLang')}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
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
            {t('login')}
          </Typography>

          <Box
            component="form"
            sx={{
              minWidth: '20rem',
            }}
          >
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <InputTextField
                  size={EnumSize.small}
                  error={errors.email?.message}
                  id="email"
                  type="email"
                  label={`${t('email')} *`}
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
                  label={`${t('password')} *`}
                  variant={EnumVariant.outlined}
                  register={register}
                />
              </Grid>
              <Grid item>
                <LoadingButton
                  variant="outlined"
                  type="submit"
                  fullWidth
                  onClick={handleSubmit(onSubmit)}
                  loading={loading}
                  endIcon={<LockOpenIcon />}
                  loadingPosition="end"
                >
                  {t('login')}
                </LoadingButton>
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
    </>
  );
}

export default Login;
