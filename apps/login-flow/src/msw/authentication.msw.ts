import { rest } from 'msw';

const CORRECT_EMAIL = 'test@test.com';
const CORRECT_PASSWORD = '123';

export const getAuthenticationMSW = () => [
  rest.post<{ email?: string; password?: string }>(
    'http://localhost:3000/api/login',
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
  rest.post('http://localhost:3000/api/logout', (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
  }),
];
