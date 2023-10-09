/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
import { ResponsiveBar } from '@nivo/bar';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSubjectApi } from '../../hooks/useSubjectApi';
import { findTerm } from '../../utils/calculate';
import { getFromStorage } from '../../utils/localStorage';
import { returnObjectTotal } from '../../utils/utilityFunctions';

function StudentPerformanceBarChart() {
  const { id } = useParams();

  const { studentSubjectByID, getStudentSubjectById } = useSubjectApi();

  useEffect(() => {
    getStudentSubjectById(id);
  }, []);

  const data = [
    {
      day: 'BOT',
      averageTerm: findTerm(studentSubjectByID, 'BOT'),
      color: 'hsl(56, 70%, 50%)',
    },
    {
      day: 'MID',
      averageTerm: findTerm(studentSubjectByID, 'MID'),
      color: 'hsl(56, 70%, 50%)',
    },
    {
      day: 'EOT',
      averageTerm: findTerm(studentSubjectByID, 'EOT'),
      color: 'hsl(56, 70%, 50%)',
    },

  ];

  const arrays = getFromStorage('studentSubjects');

  const getClassName = (name) => {
    let results = [];
    if (arrays.length > 0) {
      results = arrays.filter(
        (subj) => subj.className.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return results;
  };

  console.log(returnObjectTotal(arrays, 'Class 4'));

  const getStudentMarks = () => {
    // filter to get specific class results
    const specificClass = getClassName('Class 4');
    const map = new Map(specificClass.map((
      { studentName },
    ) => [studentName, {
      id: nanoid(),
      studentName,

      marks: [],
    }]));
    for (const {
      studentName, marks,
    } of specificClass) {
      map.get(studentName).marks.push(...[marks].flat());
    }
    return [...map.values()];
  };

  const calculateAverage = (students) => {
    const totalMarks = students.marks.reduce((sum, mark) => parseInt(sum) + parseInt(mark));
    return totalMarks / students.marks.length;
  };
  const results = {};
  getStudentMarks().forEach((student) => {
    const average = calculateAverage(student);
    Object.assign(results, { [student.studentName]: average });
  });

  console.log(results);

  return (
    <ResponsiveBar
      data={data}
      keys={['averageTerm']}
      indexBy="day"
      margin={{
        top: 20, right: 0, bottom: 60, left: 60,
      }}
      padding={0.4}
      valueScale={{ type: 'linear' }}
      colors="#3182CE"
      animate
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Average Marks',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  );
}

export default StudentPerformanceBarChart;
