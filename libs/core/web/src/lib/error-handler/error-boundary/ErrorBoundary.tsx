import { Component, ReactNode, ErrorInfo } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { withTranslation } from 'react-i18next';
import {
  NavigateFunction,
  Location,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { i18nKeys } from '@form-exercise/i18n';

interface Props {
  children?: ReactNode;
  t: any;
  navigate: NavigateFunction;
  location: Location;
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
    const { t } = this.props;
    const { navigate } = this.props;
    if (this.state.hasError) {
      return (
        <>
          <Typography variant="h2" component="div">
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
                  location.reload();
                }}
              >
                {t(i18nKeys.button.returnLastPage)}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  navigate('/');
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

interface IErrorBoundary {
  children?: ReactNode;
  t: any;
}

const ErrorBoundary = (props: IErrorBoundary) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ErrorBoundaryClass {...props} navigate={navigate} location={location} />
  );
};

export default withTranslation()(ErrorBoundary);
