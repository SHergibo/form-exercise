import { i18nKeys } from '@form-exercise/i18n';

export const routePath: { [key: string]: string } = {
  login: '/',
  admin: '/admin',
};

export const routeName: { [key: string]: string } = {
  login: i18nKeys.menu.title.login,
  admin: i18nKeys.menu.title.admin,
};

export interface IRoutesArray {
  path: string;
  routeName: string;
}

export const routesArray: IRoutesArray[] = [
  { path: routePath['login'], routeName: routeName['login'] },
  { path: routePath['admin'], routeName: routeName['admin'] },
];
