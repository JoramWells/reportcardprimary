/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudents } from '../utils/getStudents';

export const useStudentApi = () => {
  const [results, setUserResults] = useState(getStudents());

  const { id } = useParams();

  const students = getStudents();

  const getStudentId = (routeID) => {
    const userResults = students.filter(
      (user) => user.id.toLowerCase().includes(routeID.toLowerCase()),
    );
    setUserResults(userResults);
  };

  useEffect(() => {
    getStudentId(id);
  }, []);

  return { results };
};
