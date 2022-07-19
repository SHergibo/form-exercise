import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { i18nKeys } from '@form-exercise/i18n';
import { loginValidations } from '@form-exercise/yup';
export interface FormValues {
  email: string;
  password: string;
}

export function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(loginValidations) });

  const onSubmit: SubmitHandler<FormValues> = async (data): Promise<void> => {
    setError(false);
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
          setError(true);
        }
      });
    setLoading(false);
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
          {t(i18nKeys.title.login)}
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
                error={
                  errors?.email?.message ? t(`${errors?.email?.message}`) : ''
                }
                id="email"
                type="email"
                label={`${t(i18nKeys.input.label.email)} *`}
                variant={EnumVariant.outlined}
                register={register}
              />
            </Grid>
            <Grid item>
              <InputTextField
                size={EnumSize.small}
                error={
                  errors?.password?.message
                    ? t(`${errors?.password?.message}`)
                    : ''
                }
                id="password"
                type="password"
                label={`${t(i18nKeys.input.label.password)} *`}
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
                {t(i18nKeys.button.login)}
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
          {error ? t(i18nKeys.error.login) : ''}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
