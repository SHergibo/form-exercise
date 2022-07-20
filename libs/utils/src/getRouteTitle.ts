import { i18nKeys } from '@form-exercise/i18n';
import { routesArray, IRoutesArray } from '@form-exercise/utils';

interface IGetRouteTitle {
  pathname: string;
}

export const getRouteTitle = ({ pathname }: IGetRouteTitle): string => {
  const routes: IRoutesArray[] = routesArray;
  const routeIndex = routes.findIndex((route) => route.path === pathname);

  if (routeIndex !== -1) {
    return routes[routeIndex].routeName;
  } else {
    return i18nKeys.menu.title.notFound;
  }
};
