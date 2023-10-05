/* eslint-disable import/prefer-default-export */
export const findTerm = (arr, term) => {
  const userResults = arr.filter(
    (user) => user.term.toLowerCase().includes(term.toLowerCase()),
  );
  if (userResults.length > 0) {
    const avgScore = userResults
      .reduce((sum, person) => sum + parseFloat(person.marks), 0) / userResults.length;

    return Math.round(avgScore * 10) / 10;
  }
  return [];
};

export const calculateTotalMarks = (arr, term) => {
  const userResults = arr.filter(
    (user) => user.term.toLowerCase().includes(term.toLowerCase()),
  );
  if (userResults.length > 0) {
    const avgScore = userResults
      .reduce((sum, person) => sum + parseFloat(person.marks), 0);
    console.log(arr, 'resultx');

    return Math.round(avgScore * 10) / 10;
  }
  return [];
};
