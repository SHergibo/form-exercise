import { Languages } from '@form-exercise/utils';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';

export const initI18Next = () => {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
    lng: Languages.FR,
    fallbackLng: Languages.EN,

    interpolation: {
      escapeValue: false,
    },
  });
};
