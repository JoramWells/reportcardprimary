/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';
import { useSubjectApi } from '../../hooks/useSubjectApi';
import '../../css/CustomTable.module.css';
import { useCalcApi } from '../../hooks/useCalcApi';
import { calculateTotalMarks, findTerm } from '../../utils/calculate';

// const styles = {
//   table, th, td {
//     border: 1px solid black;
//     margin: 0;
//   }

// }

function ResultsTable() {
  const { saveStudentSubjectByID, studentSubjectByID, getStudentSubjectById } = useSubjectApi();

  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const { mergeArrays } = useCalcApi();
  const datax = mergeArrays(...studentSubjectByID);
  const [termResults, setTermResults] = useState([]);

  const searchTerms = searchParams.get('term');
  const getTermResults = () => {
    const userResults = studentSubjectByID.filter(
      (user) => user.term.toLowerCase().includes(searchTerms.toLowerCase()),
    );
    // setTermResults(userResults);
    return userResults;
  };
  const results = getTermResults();
  useEffect(() => {
    getStudentSubjectById(id);

    // console.log(termResults, 'terms');
  }, []);

  return (

    <div className="container">
      <table
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
            <td>
              <div style={{
                width: '100%',
                backgroundColor: 'whitesmoke',
              }}
              >
                EXAM RESULTS

              </div>
              <div style={{
                fontWeight: '500',
              }}
              >
                Learning Area

              </div>

            </td>
            <td colSpan={2}>
              Monthly Tests

            </td>

            <td colSpan={2}>
              End of Term

            </td>

            <td
              colSpan={2}
              style={{
                textAlign: 'center',
              }}
            >
              {' '}

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
            <td>Full Marks</td>
            <td>Marks Gained</td>
            <td>Full Marks</td>
            <td
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'whitesmoke',
              }}
            >
              Marks Gained

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
                100

              </td>
              <td>
                {('marks-Monthly' in item) && item['marks-Monthly']}

              </td>
              <td>
                {' '}
                100

              </td>
              <td>
                {('marks-EOT' in item) && item['marks-EOT']}

              </td>
              <td>
                {' '}

              </td>
              <td>
                {' '}

              </td>

            </tr>
          ))}

          {/* core */}
          <tr>
            <td style={{
              fontWeight: 'bold',
            }}
            >
              Total
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

          </tr>

          {/* grand total */}
          <tr>
            <td>
              Position in Class
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

export default ResultsTable;
