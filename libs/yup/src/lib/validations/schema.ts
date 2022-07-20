import * as yup from 'yup';
import { i18nKeys } from '@form-exercise/i18n';

yup.setLocale({
  mixed: {
    default: i18nKeys.validation.invalid,
    required: i18nKeys.validation.required,
  },
  string: {
    min: i18nKeys.validation.invalid,
    email: i18nKeys.validation.invalidEmail,
  },
});

export const loginValidations = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();
