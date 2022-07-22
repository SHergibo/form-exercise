import { useAuthContext } from '@form-exercise/utils';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute, getRoutePath } from './routes';

export const ProtectedRoute = () => {
  const { isLogged } = useAuthContext();

  return isLogged ? (
    <Outlet />
  ) : (
    <Navigate replace to={getRoutePath(AppRoute.LOGIN)} />
  );
};
