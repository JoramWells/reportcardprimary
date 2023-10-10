/* eslint-disable react/jsx-filename-extension */

import { getFromStorage } from '../utils/localStorage';
import { findStudentPstn, returnObjectTotal, sortItems } from '../utils/utilityFunctions';

const arrays = getFromStorage('studentSubjects');

const usePositionApi = () => {
  const resultList = returnObjectTotal(arrays, 'Class 4');
  const studentPosition = sortItems(resultList);

  const getStudentPosition = (studentName) => findStudentPstn(studentPosition, studentName);
  //   const studentName = `${results[0].firstName} ${results[0].secondName}`;

  return { getStudentPosition };
};

export default usePositionApi;
