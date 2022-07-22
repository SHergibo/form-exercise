import axios, { AxiosResponse } from 'axios';
import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoutePath, AppRoute } from '@form-exercise/core/web';

export interface IAuthContext {
  children: ReactElement;
}

interface ContextValue {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  logout: () => Promise<AxiosResponse>;
}
const defaultValue = {
  isLogged: false,
  setIsLogged: () => null,
  logout: () => ({} as Promise<AxiosResponse>),
};

export const IsLoggedContext = createContext<ContextValue>(defaultValue);

export const login = () => {};

export function AuthContext({ children }: IAuthContext) {
  let navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  const logout = () => {
    return axios.post('/api/logout').then((response) => {
      if (response.status === 200) {
        setIsLogged(false);
        navigate(getRoutePath(AppRoute.LOGIN));
      }
      return response;
    });
  };

  return (
    <IsLoggedContext.Provider value={{ isLogged, setIsLogged, logout }}>
      {children}
    </IsLoggedContext.Provider>
  );
}

export default AuthContext;
