/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

export const useLocalStorageFilterApi = (data, term) => {
  const [results, setUserResults] = useState(data);

  const getStudentId = () => {
    const userResults = data.filter(
      (user) => user.id.toLowerCase().includes(term.toLowerCase()),
    );
    setUserResults(userResults);
  };

  useEffect(() => {
    getStudentId();
  }, []);

  return { results };
};
