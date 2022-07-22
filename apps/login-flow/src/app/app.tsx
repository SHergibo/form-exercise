import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Admin,
  AuthContext,
  AppRoute,
  getRoutePath,
  Login,
  NotFound,
  MenuApp,
  ProtectedRoute,
  IsLoggedRoute,
} from '@form-exercise/core/web';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { ErrorBoundary } from '@form-exercise/core/web';
import { initI18Next } from '@form-exercise/i18n';
import { ThemeContext } from '@form-exercise/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

initI18Next();
const queryClient = new QueryClient();

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
                        <QueryClientProvider client={queryClient}>
                          <Admin />
                        </QueryClientProvider>
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
