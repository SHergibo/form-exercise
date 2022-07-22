import { IsLoggedContext } from '@form-exercise/core/web';
import { useContext } from 'react';

export function useAuthContext() {
  return useContext(IsLoggedContext);
}
