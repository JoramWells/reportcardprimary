/* eslint-disable no-restricted-syntax */
import { useCallback } from 'react';

/* eslint-disable import/prefer-default-export */
export const useCalcApi = () => {
  const mergeArrays = useCallback((...objects) => {
    const results = {};
    for (const obj of objects) {
      const key = obj.subject;
      if (!results[key]) {
        results[key] = obj;
      } else {
        Object.assign(results[key], obj);
      }
    }
    return Object.values(results);
  }, []);
  return { mergeArrays };
};
