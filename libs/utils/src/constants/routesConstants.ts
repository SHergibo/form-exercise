import { i18nKeys } from '@form-exercise/i18n';

interface RouteData {
  login: string;
  admin: string;
}

export const routePath: RouteData = {
  login: '/',
  admin: '/admin',
};

export const routeName: RouteData = {
  login: i18nKeys.menu.title.login,
  admin: i18nKeys.menu.title.admin,
};

export interface RoutesArray {
  path: string;
  routeName: string;
}

export const routesArray: RoutesArray[] = [
  { path: routePath.login, routeName: routeName.login },
  { path: routePath.admin, routeName: routeName.admin },
];
