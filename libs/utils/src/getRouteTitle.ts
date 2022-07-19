import { i18nKeys } from '@form-exercise/i18n';

interface IGetRouteTitle {
  pathname: string;
}

export const getRouteTitle = ({ pathname }: IGetRouteTitle): string => {
  const routes = [
    { path: '/', routeName: i18nKeys.menu.title.login },
    { path: '/admin', routeName: i18nKeys.menu.title.admin },
  ];
  const routeIndex = routes.findIndex((route) => route.path === pathname);

  if (routeIndex !== -1) {
    return routes[routeIndex].routeName;
  } else {
    return i18nKeys.menu.title.notFound;
  }
};
