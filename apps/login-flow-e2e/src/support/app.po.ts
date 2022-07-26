import { Languages } from '@form-exercise/i18n';
import { getI18n } from 'react-i18next';

export const t = (key: string, lng: string = Languages.FR) =>
  getI18n().t(key, { lng });
