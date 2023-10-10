/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useSubjectApi } from '../hooks/useSubjectApi';
import '../css/CustomTable.module.css';
import { useCalcApi } from '../hooks/useCalcApi';
import { calculateTotalMarks, findTerm } from '../utils/calculate';
import { getInitials } from '../utils/utilityFunctions';

// const styles = {
//   table, th, td {
//     border: 1px solid black;
//     margin: 0;
//   }

// }

function CustomTable() {
  const { saveStudentSubjectByID, studentSubjectByID, getStudentSubjectById } = useSubjectApi();

  const { id } = useParams();

  const { mergeArrays } = useCalcApi();
  const datax = mergeArrays(...studentSubjectByID);

  const [sums, setSums] = useState(0);

  // const subjectResults = savedSubjects.filter(
  //   (subject) => subject.studentId.toLowerCase().includes(studentId.toLowerCase()),

  useEffect(() => {
    getStudentSubjectById(id);
    console.log(datax, 'datax');
  }, []);

  return (

    <div className="container">
      <table
        cellSpacing="0"
        style={{
          width: '100%',
          border: '1px solid black',
        }}

      >
        {/* head1 */}
        <thead style={{
          border: '1px solid black',
        }}
        >

          <tr style={{
            fontWeight: 'bold',
            textAlign: 'center',
            border: '1px solid black',
          }}
          >
            <td>SUBJECT</td>
            <td>
              BOT

            </td>
            <td>
              MID

            </td>
            <td>
              EOT

            </td>
            <td
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'whitesmoke',
              }}
              colSpan={2}
            >
              AVERAGE

            </td>

            <td
              colSpan={2}
              style={{
                textAlign: 'center',
              }}
            >
              SUBJECT TEACHER

            </td>

          </tr>
        </thead>

        <thead>

          <tr style={{
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          >
            <td>{'  '}</td>
            <td>Mrks</td>
            <td>Mrks</td>
            <td>Mrks</td>
            <td
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'whitesmoke',
              }}
            >
              Mrks

            </td>
            <td
              width={66}
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'whitesmoke',
              }}
            >
              Aggs

            </td>

            <td>Remarks</td>
            <td>Initials</td>

          </tr>
        </thead>
        <tbody>

          {datax.length > 0 && datax.map((item) => (
            <tr
              key={item.id}
              style={{
                height: '10px',
                padding: '0',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              <td style={{
                textAlign: 'start',
              }}
              >
                {item.subject}

              </td>
              <td>
                {('marks-BOT' in item) && item['marks-BOT']}
                {item.marks}

              </td>
              <td>
                {('marks-MID' in item) && item['marks-MID']}

              </td>
              <td>
                {' '}
                {('marks-EOT' in item) && item['marks-EOT']}

              </td>
              <td>
                {' '}

              </td>
              <td>
                {' '}

              </td>
              <td>
                {' '}

              </td>
              <td>
                {/* {getInitials(item.classTeacher)} */}
                {item.classTeacher}

              </td>
            </tr>
          ))}

          {/* core */}
          <tr>
            <td style={{
              textAlign: 'end',
              fontWeight: 'bold',
            }}
            >
              CORE
            </td>
            <td align="center">
              {' '}
              {calculateTotalMarks(studentSubjectByID, 'BOT')}
            </td>
            <td align="center">
              {' '}
              {calculateTotalMarks(studentSubjectByID, 'MID')}

            </td>
            <td align="center">
              {calculateTotalMarks(studentSubjectByID, 'END')}

            </td>
            <td>
              {' '}

            </td>
            <td>
              {' '}
            </td>
            <td>
              {' '}
            </td>
            <td>
              {' '}
            </td>
          </tr>

          {/* grand total */}
          <tr>
            <td style={{
              textAlign: 'center',
            }}
            >
              Grand Total
            </td>
            <td>
              {' '}
            </td>
            <td>
              {' '}

            </td>
            <td>
              {' '}

            </td>
            <td>
              {' '}

            </td>
            <td>
              {' '}
            </td>
            <td>
              {' '}
            </td>
            <td>
              {' '}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
