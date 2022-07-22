import { i18nKeys } from '@form-exercise/i18n';
import { getRoutePathForRouter, RoutesDefinition } from '@form-exercise/utils';

type Routes = 'ADMIN' | 'LOGIN' | 'FILMLIST';

const Routes = {
  LOGIN: 'LOGIN' as Routes,
  ADMIN: 'ADMIN' as Routes,
  FILMLIST: 'FILMLIST' as Routes,
};

const ROUTES: RoutesDefinition<Routes> = {
  LOGIN: {
    path: '/',
    title: Routes.LOGIN,
    routeName: i18nKeys.menu.title.login,
  },
  ADMIN: {
    path: '/admin',
    title: Routes.ADMIN,
    routeName: i18nKeys.menu.title.admin,
  },
  FILMLIST: {
    path: '/film-list',
    title: Routes.FILMLIST,
    routeName: i18nKeys.menu.title.filmList,
  },
};
export const getRoutePath = (path: Routes) =>
  getRoutePathForRouter(ROUTES)(path);

export interface RoutesArray {
  path: string;
  routeName: string;
}

export const routesArray: RoutesArray[] = [
  { path: ROUTES.LOGIN.path, routeName: ROUTES.LOGIN.routeName },
  { path: ROUTES.ADMIN.path, routeName: ROUTES.ADMIN.routeName },
  { path: ROUTES.FILMLIST.path, routeName: ROUTES.FILMLIST.routeName },
];

export const adminRoutesArray: RoutesArray[] = [
  { path: ROUTES.ADMIN.path, routeName: ROUTES.ADMIN.routeName },
  { path: ROUTES.FILMLIST.path, routeName: ROUTES.FILMLIST.routeName },
];

export { Routes as AppRoute };
