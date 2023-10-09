/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { getFromStorage } from '../utils/localStorage';
import { StreamContext } from './streamContext';

export const ClassContext = createContext(null);

const ClassContextProvider = ({ children }) => {
  const [classes, setClasses] = useState(getFromStorage('Classes'));

  const getClassName = (name) => {
    const results = classes.filter(
      (subj) => subj.className.toLowerCase().includes(name.toLowerCase()),
    );
    if (results.length > 0) return true;
    return false;
  };

  const saveClassToLocal = (subjects) => {
    localStorage.setItem('Classes', JSON.stringify(subjects));
  };

  const saveClasses = (inputValues) => {
    if (!getClassName(inputValues.className)) {
      const newStream = [...classes, inputValues];
      setClasses(newStream);
      saveClassToLocal(newStream);
      toast.success('Added New Class');
    } else {
      toast.warning('Already added!!');
    }
  };

  const streams = getFromStorage('Streams');

  const getStreamDetails = (name) => {
    const results = streams.filter(
      (subj) => subj.className.toLowerCase().includes(name.toLowerCase()),
    );

    return results;
  };

  const deleteClass = (id) => {
    setClasses(classes.filter((student) => student.id !== id));
    localStorage.setItem('Classes', JSON.stringify(classes.filter((student) => student.id !== id)));
    toast.success('A class has been deleted');
  // localStorage.todo
  };

  const values = useMemo(() => ({
    classes, saveClasses, deleteClass, getStreamDetails,
  }));
  const returnClasses = (...objects) => {
    const results = {};
    for (const obj of objects) {
      const key = obj.className;
      if (!results[key]) {
        console.log(results[key]);
        results[key] = obj;
      } else {
        Object.assign(results[key], obj);
      }
    } return Object.values(results);
  };

  useEffect(() => {
    console.log(returnClasses(...getFromStorage('Streams')), 'streamx');
  }, []);
  return (
    <ClassContext.Provider value={values}>
      {children}
      <ToastContainer />
    </ClassContext.Provider>
  );
};

export default ClassContextProvider;

ClassContextProvider.propTypes = {
  children: PropTypes.node,
};
