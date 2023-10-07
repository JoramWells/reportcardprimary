/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getStudentSubjects, saveStudentSubjects } from '../utils/getStudents';

/* eslint-disable import/prefer-default-export */
export const useSubjectApi = () => {
  const { id } = useParams();
  const [savedSubjects, setSubjects] = useState(getStudentSubjects(id));
  const [studentSubjects, setStudentSubjects] = useState(getStudentSubjects());

  const [studentSubjectByID, setStudentSubjectByID] = useState([]);

  const saveStudentSubjectByID = (inputValues) => {
    const newSubjects = [...savedSubjects, inputValues];
    setSubjects(newSubjects);
    saveStudentSubjects(newSubjects);
    toast('Saved successfully');
  };

  const getStudentSubjectById = (studentId) => {
    const subjectResults = savedSubjects.filter(
      (subject) => subject.studentId.toLowerCase().includes(studentId.toLowerCase()),
    );

    setStudentSubjects(subjectResults);
    setStudentSubjectByID(subjectResults);
  };

  const deleteStudentSubject = (subjectId) => {
    setStudentSubjectByID(studentSubjectByID.filter((subject) => subject.id !== subjectId));
    localStorage.setItem('studentSubjects', JSON.stringify(studentSubjectByID.filter((subject) => subject.id !== subjectId)));
  };

  return {
    saveStudentSubjectByID,
    studentSubjects,
    savedSubjects,
    studentSubjectByID,
    deleteStudentSubject,
    getStudentSubjectById,

  };
};
