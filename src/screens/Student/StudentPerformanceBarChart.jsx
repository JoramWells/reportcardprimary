/* eslint-disable no-restricted-syntax */
import { ResponsiveBar } from '@nivo/bar';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSubjectApi } from '../../hooks/useSubjectApi';
import { findTerm } from '../../utils/calculate';
import { getFromStorage } from '../../utils/localStorage';

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

  const getStudentMarks = () => {
    const map = new Map(arrays.map((
      { className },
    ) => [className, {
      id: nanoid(),
      className,

      marks: [],
    }]));
    for (const {
      className, marks,
    } of arrays) {
      map.get(className).marks.push(...[marks].flat());
    }
    return [...map.values()];
  };

  const findSum = (...objects) => {
    let sum = 0;
    for (const obj of objects) {
      for (const value of obj.marks) {
        sum += value;
      }
    }
    return sum;
  };
  console.log(findSum(...getStudentMarks()), 'student-marks');

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
