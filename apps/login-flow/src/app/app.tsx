import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Admin, Login } from '@form-exercise/core/web';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
