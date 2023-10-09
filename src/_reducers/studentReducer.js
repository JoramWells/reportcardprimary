/* eslint-disable import/prefer-default-export */
// import { nanoid } from 'nanoid';
import { studentActions } from '../_actions/student';
import { getFromStorage } from '../utils/localStorage';

export const studentReducer = (state, action) => {
  switch (action.type) {
    case studentActions.CREATE_STUDENT:
      return {
        ...state,
        studentList: [
          ...state.studentList, action.payload,
        ],
      };
    case studentActions.READ_STUDENT:
      return {
        studentList: getFromStorage('studentData'),
      };
    default:
      return state;
  }
};
