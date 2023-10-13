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
      totalNumberOfStudents: 0,
    }]));
    for (const {
      className, streamName, classTeacher, noOfStudents, totalNumberOfStudents,
    } of streams) {
      map.get(className).streamName.push(...[streamName].flat());
      map.get(className).classTeacher.push(...[classTeacher].flat());
      map.get(className).noOfStudents.push(...[noOfStudents].flat());
      map.get(className).totalNumberOfStudents += parseInt(noOfStudents);
    }
    return [...map.values()];
  };

  // get all streams
  const allStreams = getClassStreams();

  const data = allStreams.map((person) => ({
    className: person.className,
    noOfStudents: person.totalNumberOfStudents,
  }));

  const findExam = (studentId) => {
    if (studentId) {
      return studentData.filter(
        (item) => item.studentId.toLowerCase().includes(studentId.toLowerCase()),
      );
    } return [];
  };

  return (
    <ResponsiveBar
      data={data}
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
        legend: 'Number of Students',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  );
}

export default ClassCharts;
