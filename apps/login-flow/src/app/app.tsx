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
  MoviesList,
  LoggedRoute,
} from '@form-exercise/core/web';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { ErrorBoundary } from '@form-exercise/core/web';
import { initI18Next } from '@form-exercise/i18n';
import { ThemeContext } from '@form-exercise/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 20000 } },
});

initI18Next();

export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AuthContext>
          <ThemeContext>
            <QueryClientProvider client={queryClient}>
              <ErrorBoundary>
                <Routes>
                  <Route element={<MenuApp />}>
                    <Route element={<LoggedRoute />}>
                      <Route
                        path={getRoutePath(AppRoute.LOGIN)}
                        element={<Login />}
                      />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                      <Route
                        path={getRoutePath(AppRoute.ADMIN)}
                        element={<Admin />}
                      ></Route>
                      <Route
                        path={getRoutePath(AppRoute.MOVIESLIST)}
                        element={<MoviesList />}
                      />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </ErrorBoundary>
            </QueryClientProvider>
          </ThemeContext>
        </AuthContext>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
