import { routesArray } from '@form-exercise/core/web';

export const getRoute = (pathname: string) =>
  routesArray.find((route) => route.path === pathname);
