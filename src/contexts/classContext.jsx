/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { classReducer } from '../_reducers/classReducer';
import { classActions, classInitialState } from '../_actions/classes';

export const ClassContext = createContext();

const ClassContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(classReducer, classInitialState);
  const value = {
    classList: state.classList,
    addClass: (item) => {
      dispatch({
        type: classActions.ADD_CLASS, item,
      });
    },
  };
  return (
    <ClassContext.Provider value={value}>
      {children}
    </ClassContext.Provider>
  );
};

export default ClassContextProvider;

ClassContextProvider.propTypes = {
  children: PropTypes.node,

};
