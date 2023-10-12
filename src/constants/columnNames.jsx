/* eslint-disable react/no-array-index-key */
/* eslint-disable import/prefer-default-export */
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Chip, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteStudent } from '../_features/student/studentSlice';
import { deleteExam } from '../_features/exams/examSlice';
import { deleteClass } from '../_features/clases/classSlice';
import { deleteStream } from '../_features/streams/streamSlice';

const useColumnNames = () => {
  // const { deleteStudent } = useContext(StudentContext);

  const dispatch = useDispatch();
  const deleteStudentRedx = (id) => {
    dispatch(
      deleteStudent(id),
    );
  };

  const deleteStudentExam = (id) => {
    dispatch(deleteExam(id));
  };

  const removeClass = (id) => {
    dispatch(deleteClass(id));
  };

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
        <IconButton onClick={() => deleteStudentRedx(params.row.id)}>
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
        <IconButton onClick={() => dispatch(deleteStream(params.row.id))}>
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },
  ];

  // student-exams columns
  const examColumn = [
    {
      field: 'term',
      headerName: 'Term',
      flex: 1,
    },

    {
      field: 'category',
      headerName: 'Exam Category',
      flex: 1,

    },
    {
      field: 'subject',
      headerName: 'Subject',
      flex: 1,

    },
    {
      field: 'marks',
      headerName: 'Marks',
      flex: 1,

    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => deleteStudentExam(params.row.id)}>
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },

  ];

  const classColumns = [
    {
      field: 'className',
      headerName: 'Class Name',
      flex: 1,
    },
    {
      field: 'classTeacher',
      headerName: 'Class Teacher',
      flex: 1,

    },
    {
      field: 'noOfStudents',
      headerName: 'Number of Students',
      flex: 1,

    },
    {
      field: 'registeredStudents',
      headerName: 'Registered Students',
      flex: 1,

    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => {
          removeClass(params.row.id);
        }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },
  ];

  const universalColumn = [
    {
      field: 'className',
      headerName: 'Class Name',
      flex: 1,
    },
    {
      field: 'classTeacher',
      headerName: 'Class Teacher',
      flex: 1,
      // renderCell: (params) => (
      //   <ul>
      //     {params.classTeacher.map((classTeacher, idx) => (
      //       <li key={idx}>{classTeacher}</li>
      //     ))}
      //   </ul>
      // ),

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
      renderCell: (params) => (
        <>
          {params.row.noOfStudents.map((student, idx) => (
            <Chip key={idx} label={student} />
          ))}
        </>
      ),

    },
    {
      field: 'registeredStudents',
      headerName: 'Registered Students',
      flex: 1,
      // renderCell: (params) => (
      //   <ul>
      //     {params.registeredStudents.map((registeredStudents, idx) => (
      //       <li key={idx}>{registeredStudents}</li>
      //     ))}
      //   </ul>
      // ),

    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => {
          removeClass(params.row.id);
        }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },
  ];

  return {
    studentColumn, streamColumn, examColumn, classColumns, universalColumn,
  };
};

export default useColumnNames;
