import { IsLoggedContext } from '@form-exercise/core/web';
import { useContext } from 'react';

export default function useAuthContext() {
  return useContext(IsLoggedContext);
}
