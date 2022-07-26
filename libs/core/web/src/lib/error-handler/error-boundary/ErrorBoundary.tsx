import { Component, ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TFunction, withTranslation } from 'react-i18next';
import {
  NavigateFunction,
  Location,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { i18nKeys } from '@form-exercise/i18n';
import { useAuthContext } from '../../context/AuthContext';
import { AxiosResponse } from 'axios';

interface Props {
  children?: ReactNode;
  t: TFunction<'translation', undefined>;
  navigate: NavigateFunction;
  location: Location;
  logout: () => Promise<AxiosResponse<any, any>>;
}

interface State {
  hasError: boolean;
}

class ErrorBoundaryClass extends Component<Props, State> {
  public override state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  override render() {
    const { t, navigate, logout } = this.props;
    if (this.state.hasError) {
      return (
        <>
          <Typography variant="h2">
            {t(i18nKeys.title.boundaryError)}
          </Typography>

          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  this.state.hasError = false;
                  navigate(0);
                }}
              >
                {t(i18nKeys.button.returnLastPage)}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  this.state.hasError = false;
                  logout();
                }}
              >
                {t(i18nKeys.button.returnLogin)}
              </Button>
            </Grid>
          </Grid>
        </>
      );
    }
    return this.props.children;
  }
}

interface ErrorBoundary {
  children?: ReactNode;
  t: TFunction<'translation', undefined>;
}

const _ErrorBoundary = (props: ErrorBoundary) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuthContext();

  return (
    <ErrorBoundaryClass
      {...props}
      navigate={navigate}
      location={location}
      logout={logout}
    />
  );
};

export const ErrorBoundary = withTranslation()(_ErrorBoundary);
