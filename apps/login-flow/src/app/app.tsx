import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Admin,
  AuthContext,
  AppRoute,
  getRoutePath,
  Login,
  NotFound,
  IsLoggedRoute,
} from '@form-exercise/core/web';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { MenuApp, ProtectedRoute } from '@form-exercise/core/web';
import ErrorBoundary from 'libs/core/web/src/lib/error-handler/error-boundary/ErrorBoundary';
import { initI18Next } from '@form-exercise/i18n';
import { ThemeContext } from '@form-exercise/ui';

initI18Next();

export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AuthContext>
          <ThemeContext>
            <Routes>
              <Route element={<MenuApp />}>
                <Route element={<IsLoggedRoute />}>
                  <Route
                    path={getRoutePath(AppRoute.LOGIN)}
                    element={<Login />}
                  />
                </Route>
                <Route element={<ProtectedRoute />}>
                  <Route
                    path={getRoutePath(AppRoute.ADMIN)}
                    element={
                      <ErrorBoundary>
                        <Admin />
                      </ErrorBoundary>
                    }
                  />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </ThemeContext>
        </AuthContext>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
