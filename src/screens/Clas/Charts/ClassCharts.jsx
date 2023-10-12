/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
import { ResponsiveBar } from '@nivo/bar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectAllExams } from '../../../_features/exams/examSlice';
import { findTerm } from '../../../utils/calculate';
import { selectAllClasses } from '../../../_features/clases/classSlice';
import { selectAllStreams } from '../../../_features/streams/streamSlice';

function ClassCharts() {
  const { id } = useParams();

  const studentData = useSelector(selectAllExams);
  const classes = useSelector(selectAllClasses);
  const streams = useSelector(selectAllStreams);

  const getClassStreams = () => {
    const map = new Map(streams.map((
      { className, streamName, classTeacher },
    ) => [className, {
      id: nanoid(),
      className,
      streamName: [],
      classTeacher: [],
      noOfStudents: [],
    }]));
    for (const {
      className, streamName, classTeacher, noOfStudents,
    } of streams) {
      map.get(className).streamName.push(...[streamName].flat());
      map.get(className).classTeacher.push(...[classTeacher].flat());
      map.get(className).noOfStudents.push(...[noOfStudents].flat());
    }
    return [...map.values()];
  };

  const calculateSum = (arr) => arr
    .reduce((sum, person) => sum += parseInt(person), 0);

  const calculateTotalNoOfStudents = (arr, className) => arr.filter(
    (user) => user.className.toLowerCase().includes(className.toLowerCase()),
  );

  // get all streams
  const allStreams = getClassStreams();

  const classThreeStudents = calculateTotalNoOfStudents(allStreams, 'Class Three').map((item) => {
    const sum = calculateSum(item.noOfStudents);
    return { className: item.className, noOfStudents: sum };
  });

  const classFourStudents = calculateTotalNoOfStudents(allStreams, 'Class 4').map((item) => {
    const sum = calculateSum(item.noOfStudents);
    return { className: item.className, noOfStudents: sum };
  });

  console.log(getClassStreams(), 'steamx');

  const findExam = (studentId) => {
    if (studentId) {
      return studentData.filter(
        (item) => item.studentId.toLowerCase().includes(studentId.toLowerCase()),
      );
    } return [];
  };

  const infoArr = [
    classThreeStudents[0],
    classFourStudents[0],
  ];

  const getClassNames = (arr) => {
    arr.map((item) => (item));
  };

  console.log(getClassNames(classes), 'SERT');

  const exams = findExam(id);

  const data = [
    {
      day: 'Class 3',
      averageTerm: classThreeStudents[0].noOfStudents,
      color: 'hsl(56, 70%, 50%)',
    },
    {
      day: 'MID',
      averageTerm: classFourStudents[0].noOfStudents,
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
      data={infoArr}
      keys={['noOfStudents']}
      indexBy="className"
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

export default ClassCharts;
