import { getFromStorage } from '../utils/localStorage';

/* eslint-disable import/prefer-default-export */
export const studentInitialState = {
  studentList: getFromStorage('studentData'),
};

export const studentActions = {
  CREATE_STUDENT: 'CREATE_STUDENT',
  READ_STUDENT: 'READ_STUDENT',
  UPDATE_STUDENT: 'UPDATE_STUDENT',
  DELETE_STUDENT: 'DELETE_STUDENT',
};
