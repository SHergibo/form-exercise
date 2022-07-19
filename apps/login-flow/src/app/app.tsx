import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Admin, AuthContext, Login, NotFound } from '@form-exercise/core/web';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initI18Next } from './i18next/i18next.config';
import { MenuApp } from '@form-exercise/core/web';
import ErrorBoundary from 'libs/core/web/src/lib/error-handler/error-boundary/ErrorBoundary';

initI18Next();

export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AuthContext>
          <Routes>
            <Route element={<MenuApp />}>
              <Route path="/" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ErrorBoundary>
                    <Admin />
                  </ErrorBoundary>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthContext>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
