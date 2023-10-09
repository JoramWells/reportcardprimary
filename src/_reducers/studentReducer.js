/* eslint-disable import/prefer-default-export */
import { nanoid } from 'nanoid';
import { studentActions } from '../_actions/student';
import { getFromStorage } from '../utils/localStorage';

export const studentReducer = (state, action) => {
  switch (action.type) {
    case studentActions.CREATE_STUDENT:
      return {
        studentList: [
          ...state.studentList, {
            id: nanoid(),
            firstName: action.firstName,
            secondName: action.secondName,
            indexCode: action.indexCode,
            streamName: action.streamName,
            houseName: action.houseName,
            age: action.age,
            division: action.division,
            type: 'Primary',
            profileImg: action.profileImg,
          },
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
