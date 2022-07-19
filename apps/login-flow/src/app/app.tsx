import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Admin, Login, NotFound } from '@form-exercise/core/web';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { MenuApp } from '@form-exercise/core/web';
import ErrorBoundary from 'libs/core/web/src/lib/error-handler/error-boundary/ErrorBoundary';
import { initI18Next } from '@form-exercise/i18n';
import { ThemeContext } from '@form-exercise/ui';

initI18Next();

export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ThemeContext>
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
        </ThemeContext>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
