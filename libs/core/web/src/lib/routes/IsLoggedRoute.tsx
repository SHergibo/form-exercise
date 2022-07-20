import useAuthContext from 'libs/utils/src/hooks/useAuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute, getRoutePath } from './routes';

export const IsLoggedRoute = () => {
  const { isLogged } = useAuthContext();

  return isLogged ? (
    <Navigate replace to={getRoutePath(AppRoute.ADMIN)} />
  ) : (
    <Outlet />
  );
};
