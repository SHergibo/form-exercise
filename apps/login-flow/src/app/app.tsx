import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Admin, Login } from '@form-exercise/core/web';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initI18Next } from './i18next/i18next.config';
import { MenuApp } from '@form-exercise/core/web';

initI18Next();

export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route element={<MenuApp />}>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
