/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { getFromStorage } from '../utils/localStorage';

export const ClassContext = createContext(null);

const ClassContextProvider = ({ children }) => {
  const [classes, setClasses] = useState(getFromStorage('Classes'));

  const values = useMemo(() => ({
    classes, setClasses,
  }));
  return (
    <ClassContext.Provider value={values}>
      {children}
    </ClassContext.Provider>
  );
};

export default ClassContextProvider;

ClassContextProvider.propTypes = {
  children: PropTypes.node,
};
