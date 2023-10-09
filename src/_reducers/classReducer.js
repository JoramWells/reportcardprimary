import { nanoid } from 'nanoid';
import { classActions } from '../_actions/classes';

/* eslint-disable import/prefer-default-export */
export const classReducer = (state, action) => {
  switch (action.type) {
    case classActions.ADD_CLASS:
      return {
        classList: [
          ...state.classList, {
            id: nanoid(),
            className: action.className,
            noOfStudents: action.noOfStudents,
            classTeacher: action.classTeacher,
          },
        ],
      };

    default:
      return state;
  }
};
