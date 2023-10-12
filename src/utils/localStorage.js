/* eslint-disable import/prefer-default-export */
export const getFromStorage = (item) => {
  const data = localStorage.getItem(item);
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
