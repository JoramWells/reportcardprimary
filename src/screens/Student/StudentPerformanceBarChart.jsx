/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
import { ResponsiveBar } from '@nivo/bar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findTerm } from '../../utils/calculate';
import { selectAllExams } from '../../_features/exams/examSlice';

function StudentPerformanceBarChart() {
  const { id } = useParams();

  const studentData = useSelector(selectAllExams);

  const findExam = (studentId) => {
    if (studentId) {
      return studentData.filter(
        (item) => item.studentId.toLowerCase().includes(studentId.toLowerCase()),
      );
    } return [];
  };

  const exams = findExam(id);

  const data = [
    {
      day: 'BOT',
      averageTerm: findTerm(exams, 'BOT'),
      color: 'hsl(56, 70%, 50%)',
    },
    {
      day: 'MID',
      averageTerm: findTerm(exams, 'MID'),
      color: 'hsl(56, 70%, 50%)',
    },
    {
      day: 'EOT',
      averageTerm: findTerm(exams, 'EOT'),
      color: 'hsl(56, 70%, 50%)',
    },

  ];

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
