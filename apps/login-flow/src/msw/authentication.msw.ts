import { CORRECT_EMAIL, CORRECT_PASSWORD } from '@form-exercise/utils';
import { rest } from 'msw';

export const getAuthenticationMSW = () => [
  rest.post<{ email?: string; password?: string }>(
    'http://localhost:4200/api/login',
    (req, res, ctx) => {
      if (!req.body) {
        return res(ctx.status(401));
      }

      if (
        req.body?.email !== CORRECT_EMAIL ||
        req.body?.password !== CORRECT_PASSWORD
      ) {
        return res(ctx.status(401));
      }

      return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
    }
  ),
  rest.post('http://localhost:4200/api/logout', (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
];
