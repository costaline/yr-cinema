export const required = (value) => (!value ? 'Field is required' : undefined);

export const minLength = (requiredLength) => (value) =>
  value && value.length < requiredLength
    ? `Must be at least ${requiredLength} symbols`
    : undefined;

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
