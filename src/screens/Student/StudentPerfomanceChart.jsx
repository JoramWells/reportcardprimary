/* eslint-disable no-unused-vars */
/* eslint-disable radix */
import { ResponsivePie } from '@nivo/pie';
import { useEffect, useState } from 'react';
import { useSubjectApi } from '../../hooks/useSubjectApi';

const data = [
  {
    id: 'java',
    label: 'java',
    value: 195,
    color: 'hsl(90, 70%, 50%)',
  },
  {
    id: 'erlang',
    label: 'erlang',
    value: 419,
    color: 'hsl(56, 70%, 50%)',
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 407,
    color: 'hsl(103, 70%, 50%)',
  },
  {
    id: 'haskell',
    label: 'haskell',
    value: 474,
    color: 'hsl(186, 70%, 50%)',
  },
  {
    id: 'go',
    label: 'go',
    value: 71,
    color: 'hsl(104, 70%, 50%)',
  },
];

function StudentPerformanceChart() {
  const { studentSubjects } = useSubjectApi();

  const [termPerformance, setTermPerformance] = useState([]);

  const calculatePerformance = (obj) => {
    if (obj.length > 1) {
      const sum = obj.reduce((a, b) => ({
        marks: parseInt(a.marks) + parseInt(b.marks),
      }));
      return sum;
    }
    return 0;
  };

  const getTermPerformance = (term) => {
    const userResults = studentSubjects.filter(
      (user) => user.term.toLowerCase().includes(term.toLowerCase()),
    );
    setTermPerformance(userResults);
    return userResults;
  };

  const [bot, setBot] = useState(0);
  const [mid, setMid] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    const botResults = calculatePerformance(getTermPerformance('BOT'));
    setBot(botResults);
    setMid(calculatePerformance(getTermPerformance('MID')));
    setEnd(calculatePerformance(getTermPerformance('EOT')));

    // setMid(getTermPerformance('MID'));
    // setEnd(getTermPerformance('EOT'));
  }, []);

  const datax = [
    {
      id: 'Beginning of Term',
      label: 'BOT',
      value: bot.marks,
      color: 'hsl(90, 70%, 50%)',
    },
    {
      id: 'Mid Term',
      label: 'MID',
      value: mid.marks,
      color: 'hsl(56, 70%, 50%)',

    },
    {
      id: 'End of Term',
      label: 'END',
      value: end.marks,
      color: 'hsl(186, 70%, 50%)',
    },
  ];

  return (
    <ResponsivePie
      data={datax}
      margin={{
        top: 40, right: 80, bottom: 80, left: 70,
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    />
  );
}

export default StudentPerformanceChart;
