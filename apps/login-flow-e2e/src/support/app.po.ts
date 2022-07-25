import { Languages } from '@form-exercise/i18n';
import { getI18n } from 'react-i18next';

export const getGreeting = () => cy.get('h1');
export const t = (key: string) => getI18n().t(key, { lng: Languages.FR });
