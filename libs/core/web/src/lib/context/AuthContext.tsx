import axios, { AxiosResponse } from 'axios';
import { createContext, ReactElement, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoutePath, AppRoute } from '@form-exercise/core/web';

export interface AuthContext {
  children: ReactElement;
}

interface DataLogin {
  email: string;
  password: string;
}

interface ContextValue {
  isLogged: boolean;
  login: (parameters: DataLogin) => Promise<AxiosResponse>;
  logout: () => Promise<AxiosResponse>;
}
const defaultValue = {
  isLogged: false,
  login: () => ({} as Promise<AxiosResponse>),
  logout: () => ({} as Promise<AxiosResponse>),
};

export const IsLoggedContext = createContext<ContextValue>(defaultValue);

export function useAuthContext() {
  return useContext(IsLoggedContext);
}

export function AuthContext({ children }: AuthContext) {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(
    Boolean(sessionStorage.getItem('isLogged')) || false
  );

  const login = (data: DataLogin) => {
    return axios.post('/api/login', data).then((response) => {
      if (response.status === 200) {
        sessionStorage.setItem('isLogged', 'true');
        setIsLogged(true);
        navigate(getRoutePath(AppRoute.ADMIN));
      }
      return response;
    });
  };

  const logout = () => {
    return axios.post('/api/logout').then((response) => {
      if (response.status === 200) {
        sessionStorage.clear();
        setIsLogged(false);
        navigate(getRoutePath(AppRoute.LOGIN));
      }
      return response;
    });
  };

  return (
    <IsLoggedContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </IsLoggedContext.Provider>
  );
}

export default AuthContext;
