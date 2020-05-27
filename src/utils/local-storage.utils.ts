
export const getItem = (key: string, defaultValue: string = ''): string | null => {
  return localStorage.getItem(key) || defaultValue;
};

export const setItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};
