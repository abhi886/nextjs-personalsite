const convertDate = (date) => {
  const properDate = new Date(date.split('T')[0]);
  const day = properDate.getDate();
  const month = properDate.toLocaleString('default', { month: 'short' });
  const year = properDate.getFullYear();
  const UTCDate = `${month} ${day}, ${year}`;
  return UTCDate;
};

export default convertDate;
