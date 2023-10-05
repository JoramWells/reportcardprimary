import { ResponsiveBar } from '@nivo/bar';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSubjectApi } from '../../hooks/useSubjectApi';
import { findTerm } from '../../utils/calculate';

function StudentPerformanceBarChart() {
  const { id } = useParams();

  const { studentSubjectByID, getStudentSubjectById } = useSubjectApi();

  useEffect(() => {
    getStudentSubjectById(id);
  }, []);

  const data = [
    {
      day: 'BOT',
      degress: findTerm(studentSubjectByID, 'BOT'),
      color: 'hsl(56, 70%, 50%)',
    },
    {
      day: 'MID',
      degress: findTerm(studentSubjectByID, 'MID'),
      color: 'hsl(56, 70%, 50%)',
    },
    {
      day: 'EOT',
      degress: findTerm(studentSubjectByID, 'EOT'),
      color: 'hsl(56, 70%, 50%)',
    },

  ];

  return (
    <ResponsiveBar
      data={data}
      keys={['degress']}
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
