import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';

export interface IAuthContext {
  children: ReactElement;
}

interface ContextValue {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}
const defaultValue = { isLogged: false, setIsLogged: () => null };
export const IsLoggedContext = createContext<ContextValue>(defaultValue);

export function AuthContext({ children }: IAuthContext) {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </IsLoggedContext.Provider>
  );
}

export default AuthContext;
