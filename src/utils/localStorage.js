/* eslint-disable import/prefer-default-export */
export const getFromStorage = (item) => {
  const data = localStorage.getItem(item);
  return JSON.parse(data) || [];
};
