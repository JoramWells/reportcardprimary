/* eslint-disable import/prefer-default-export */
export const findTerm = (arr, category) => {
  const userResults = arr.filter(
    (user) => user.category.toLowerCase().includes(category.toLowerCase()),
  );
  if (userResults.length > 0) {
    const avgScore = userResults
      .reduce((sum, person) => sum + parseFloat(person.marks), 0) / userResults.length;

    return Math.round(avgScore * 10) / 10;
  }
  return [];
};

export const calculateTotalMarks = (arr, category) => {
  const userResults = arr.filter(
    (user) => user.category.toLowerCase().includes(category.toLowerCase()),
  );
  if (userResults.length > 0) {
    const avgScore = userResults
      .reduce((sum, person) => sum + parseFloat(person.marks), 0);

    return Math.round(avgScore * 10) / 10;
  }
  return [];
};
