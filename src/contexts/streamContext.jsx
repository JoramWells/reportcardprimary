/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { getFromStorage } from '../utils/localStorage';

export const StreamContext = createContext(null);

const StreamContextProvider = ({ children }) => {
  const [streams, setStreams] = useState(getFromStorage('Streams'));

  const getStreamName = (name) => {
    const results = streams.filter(
      (subj) => subj.streamName.toLowerCase().includes(name.toLowerCase()),
    );
    if (results.length > 0) return true;
    return false;
  };

  const saveStreamToLocal = (subjects) => {
    localStorage.setItem('Streams', JSON.stringify(subjects));
  };

  const saveStreams = (inputValues) => {
    if (!getStreamName(inputValues.streamName)) {
      const newStream = [...streams, inputValues];
      setStreams(newStream);
      saveStreamToLocal(newStream);
      toast.success('Added New Strean');
    } else {
      toast.warning('Already added!!');
    }
  };

  const deleteStream = (id) => {
    setStreams(streams.filter((student) => student.id !== id));
    localStorage.setItem('Streams', JSON.stringify(streams.filter((student) => student.id !== id)));
    toast.success('Stream deleted successfully!!');
  // localStorage.todo
  };

  const value = useMemo(() => ({
    streams, saveStreams, deleteStream,
  }), []);
  return (
    <StreamContext.Provider value={value}>
      {children}
      <ToastContainer />
    </StreamContext.Provider>
  );
};

export default StreamContextProvider;

StreamContextProvider.propTypes = {
  children: PropTypes.node,
};
