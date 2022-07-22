import { useState } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { ErrorMessage, InputTextField } from '@form-exercise/ui';
import { EnumSize, EnumVariant } from '@form-exercise/data/enum';
import Box from '@mui/material/Box';
import axios from 'axios';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@form-exercise/i18n';
import { loginValidations } from '@form-exercise/validations';
import useAuthContext from 'libs/utils/src/hooks/useAuthContext';
import { AppRoute, getRoutePath } from '../../routes';
export interface FormValues {
  email: string;
  password: string;
}

export function Login() {
  const { setIsLogged } = useAuthContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const methods = useForm<FormValues>({
    defaultValues: { email: '', password: '' },
    mode: 'all',
    resolver: yupResolver(loginValidations),
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data): Promise<void> => {
    setIsError(false);
    setLoading(true);
    await axios
      .post('/api/login', data)
      .then((response) => {
        if (response.status === 200) {
          setIsLogged(true);
          navigate(getRoutePath(AppRoute.ADMIN));
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setIsError(true);
          setLoading(false);
        }
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
        <Typography variant="h2">{t(i18nKeys.title.login)}</Typography>

        <FormProvider {...methods}>
          <Box
            component="form"
            sx={{
              minWidth: '20rem',
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <InputTextField
                  size={EnumSize.small}
                  id="email"
                  type="email"
                  label={`${t(i18nKeys.input.label.email)}`}
                  variant={EnumVariant.outlined}
                  required={true}
                />
              </Grid>
              <Grid item>
                <InputTextField
                  size={EnumSize.small}
                  id="password"
                  type="password"
                  label={`${t(i18nKeys.input.label.password)}`}
                  variant={EnumVariant.outlined}
                  required={true}
                />
              </Grid>
              <Grid item>
                <LoadingButton
                  variant="outlined"
                  type="submit"
                  fullWidth
                  loading={loading}
                  endIcon={<LockOpenIcon />}
                  loadingPosition="end"
                >
                  {t(i18nKeys.button.login)}
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>

        <ErrorMessage message={isError ? t(i18nKeys.error.login) : ''} />
      </Grid>
    </Grid>
  );
}

export default Login;
