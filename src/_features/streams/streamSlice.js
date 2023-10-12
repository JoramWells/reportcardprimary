import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getFromStorage } from '../../utils/localStorage';
import { getClassStreams } from '../../utils/utilityFunctions';

const initialState = getFromStorage('Streams');

localStorage.setItem('UniversalClass', JSON.stringify(getClassStreams(initialState)));

const streamSlice = createSlice({
  name: 'streams',
  initialState,
  reducers: {
    addStream: {
      reducer(state, action) {
        state.push(action.payload);
        const newStream = [...initialState, action.payload];

        localStorage.setItem('Streams', JSON.stringify(newStream));
        toast.success('Added new Stream!!');
      },
      prepare(inputValues) {
        return {
          payload: inputValues,
        };
      },
    },
    deleteStream: (state, { payload: index }) => {
      state.splice(index, 1);
      localStorage.setItem('Streams', JSON.stringify(initialState.filter((stream) => stream.id !== index)));
    },
  },
});

export const selectAllStreams = (state) => state.streams;

export const { addStream, deleteStream } = streamSlice.actions;

export default streamSlice.reducer;
