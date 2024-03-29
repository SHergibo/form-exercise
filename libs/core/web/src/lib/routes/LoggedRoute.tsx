import { useAuthContext } from '@form-exercise/core/web';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute, getRoutePath } from './routes';

export const LoggedRoute = () => {
  const { isLogged } = useAuthContext();

  return isLogged ? (
    <Navigate replace to={getRoutePath(AppRoute.ADMIN)} />
  ) : (
    <Outlet />
  );
};
