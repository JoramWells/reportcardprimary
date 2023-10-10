/* eslint-disable import/prefer-default-export */
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../contexts/studentContext';
import { StreamContext } from '../contexts/streamContext';

const useColumnNames = () => {
  const { deleteStudent } = useContext(StudentContext);
  const { deleteStream } = useContext(StreamContext);

  // student column
  const studentColumn = [
    {
      field: 'id',
      headerName: 'First Name',
      flex: 1,
      renderCell: (params) => <Link to={`/student-profile/${params.row.id}`}>{params.row.firstName}</Link>,

    },
    {
      field: 'secondName',
      headerName: 'Second Name',
      flex: 1,

    },
    {
      field: 'indexCode',
      headerName: 'Index Code',
      flex: 1,

    },
    {
      field: 'age',
      headerName: 'Age (Yrs)',
      flex: 1,

    },
    {
      field: 'type',
      headerName: 'Category',
      flex: 1,

    },
    {
      field: 'streamName',
      headerName: 'Stream Name',
      flex: 1,

    },
    {
      field: 'className',
      headerName: 'Class Name',
      flex: 1,

    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => deleteStudent(params.row.id)}>
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },
  ];

  // stream column

  const streamColumn = [
    {
      field: 'className',
      headerName: 'Class Name',
      flex: 1,
    },
    {
      field: 'streamName',
      headerName: 'Stream Name',
      flex: 1,

    },
    {
      field: 'noOfStudents',
      headerName: 'Number of Students',
      flex: 1,

    },
    {
      field: 'classTeacher',
      headerName: 'Class Teacher',
      flex: 1,

    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => deleteStream(params.row.id)}>
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },
  ];
  return { studentColumn, streamColumn };
};

export default useColumnNames;
