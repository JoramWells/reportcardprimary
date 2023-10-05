/* eslint-disable react/forbid-prop-types */
import {
  IconButton,
  Table, TableBody, TableCell, TableHead, TableRow, Tooltip,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

import Title from '../screens/Dashboard/Title';

function TableComponent({ columns, data, navigationLink }) {
  const deleteStudent = (id) => {
    // setStudentInfo(data.filter((student) => student.id !== id));
    localStorage.setItem('studentData', JSON.stringify(data.filter((student) => student.id !== id)));
    // localStorage.todo
  };

  const navigate = useNavigate();
  return (
    <div>
      {' '}
      <Title>
        Registered Students
        {' '}
        (
        {data.length}
        )
      </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align="left"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                {column.columnName}

              </TableCell>
            ))}

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell onClick={() => { navigate(`${navigationLink + row.id}`); }}>{row.firstName}</TableCell>
              <TableCell>{row.secondName}</TableCell>
              <TableCell>{row.indexCodeName}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.className}</TableCell>
              <TableCell style={{
                backgroundColor: 'whitesmoke',
              }}
              >
                <Tooltip title="Generate Report">
                  <IconButton onClick={() => { navigate(`/report1/${row.id}`); }}>
                    <AssessmentOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    style={{
                      color: '#FD6868',
                    }}
                    onClick={() => { deleteStudent(row.id); }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  );
}

export default TableComponent;
TableComponent.defaultProps = {
  columns: [],
  data: [],
  navigationLink: PropTypes.string,
};

TableComponent.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  navigationLink: PropTypes.string,

};
