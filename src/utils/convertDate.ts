const convertDate = (date: string) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const properDate = new Date(date.split('T')[0]);
  const day = properDate.getDate();
  const month = properDate.getMonth();
  const year = properDate.getFullYear();
  const UTCDate = `${monthNames[month]} ${day}, ${year}`;
  return UTCDate;
};

export default convertDate;
