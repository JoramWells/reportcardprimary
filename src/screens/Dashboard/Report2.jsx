/* eslint-disable no-unused-vars */
import {
  Button, Paper,
} from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Badge from '../../components/Badge';
import Underline from '../../components/Underline';
import Dashboard from '.';
import Header from '../../components/Report2/Header';
import PersonalDetails from '../../components/Report2/PersonalDetalis';
import Practicals from '../../components/Report2/Practicals';
import ResultsTable from '../../components/Report2/ResultsTable';

function Report2() {
  const [loader, setLoader] = useState(false);

  const { id } = useParams();

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoader(loader);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('/img/jpeg', 1.0);
      // eslint-disable-next-line new-cap
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'JPEG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    });
  };

  const getStudents = () => {
    const data = localStorage.getItem('studentData');
    return JSON.parse(data) || [];
  };
  const [results, setUserResults] = useState(getStudents());

  const students = getStudents();

  const getStudentId = (routeID) => {
    const userResults = students.filter(
      (user) => user.id.toLowerCase().includes(routeID.toLowerCase()),
    );
    setUserResults(userResults);
  };
  useEffect(() => {
    getStudentId(id);
  }, [id]);

  return (
    <Dashboard>
      <div style={{
        width: '80%',
        float: 'right',
      }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: '100vh',
          // padding: '10px',
        }}
        >

          {/* report section */}
          <Paper>
            <div
              style={{
                width: '793.7007874px',
                height: '1122.519685px',
                // margin: "30mm 45mm 30mm 45mm"
              }}
              className="actual-receipt"
            >
              <div style={{
                border: '1px solid grey',
                height: '100%',
                backgroundColor: 'white',
              }}
              >
                <Header />
                <PersonalDetails
                  firstName={results[0].firstName}
                  secondName={results[0].secondName}
                  age={results[0].age}
                  house={results[0].houseName}
                />

                <Practicals />
                <ResultsTable />

                <div style={{
                  marginTop: '.2rem',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'flex-end',
                }}
                >
                  <Badge text="School Requirements" width="30%" />
                  <Underline
                    width="70%"
                  />
                </div>

                {/* headteacher */}
                <div style={{
                  marginTop: '.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
                >
                  <Badge text="Teachers comments" width="40%" />
                  <Underline width="60%" />

                </div>

                <div style={{
                  marginTop: '.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
                >
                  <Badge text="Headteachers comments" width="40%" />
                  <Underline width="60%" />

                </div>

                {/* requirements */}
                <div style={{
                  marginTop: '.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
                >
                  <Badge text="Next term begins" width="15%" />
                  <Underline width="85%" />

                </div>

              </div>

              <div style={{
                marginTop: '1rem',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    width: '40%',
                  }}
                  onClick={() => downloadPDF()}
                >
                  SAVE

                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: '40%',
                  }}
                  onClick={() => downloadPDF()}
                >
                  DOWNLOAD

                </Button>

              </div>
            </div>

          </Paper>

        </div>
      </div>
    </Dashboard>

  );
}

export default Report2;
