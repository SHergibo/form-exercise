import i18next from 'i18next';

export const languageSwitcher = (lang: string): void => {
  i18next.changeLanguage(lang);
};
