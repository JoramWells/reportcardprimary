/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import { createContext } from 'react';
import PropTypes from 'prop-types';
import { getFromStorage } from '../utils/localStorage';

export const MathContext = createContext(null);

const MathContextProvider = ({ children }) => {
  const subjects = getFromStorage('SU');
  return (
    <MathContext.Provider>
      {children}
    </MathContext.Provider>
  );
};

MathContextProvider.propTypes = {
  children: PropTypes.node,
};
