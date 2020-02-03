import i18next from 'i18next';

export const required = (value) =>
  !value ? `${i18next.t('auth.errorMessages.requiredField')}` : undefined;

export const minLength = (requiredLength) => (value) =>
  value && value.length < requiredLength
    ? `${i18next.t('auth.errorMessages.shortPassword', { requiredLength })}`
    : undefined;

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? `${i18next.t('auth.errorMessages.invalidEmail')}`
    : undefined;
