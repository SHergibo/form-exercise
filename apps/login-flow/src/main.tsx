import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import { setupWorker } from 'msw';
import { getAuthenticationMSW } from './msw/authentication.msw';

setupWorker(...getAuthenticationMSW()).start();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
