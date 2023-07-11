const convertDate = (date: string): string => {
  const postDate = new Date(date);
  const currentDate = new Date();

  const timeDifference = Math.abs(currentDate.getTime() - postDate.getTime());
  const secondsDifference = Math.floor(timeDifference / 1000);

  if (secondsDifference < 60) {
    return `${secondsDifference}s`;
  }
  if (secondsDifference < 3600) {
    const minutes = Math.floor(secondsDifference / 60);
    return `${minutes}m`;
  }
  if (secondsDifference < 86400) {
    const hours = Math.floor(secondsDifference / 3600);
    return `${hours}h`;
  }
  const days = Math.floor(secondsDifference / 86400);
  return `${days}d`;
};

export default convertDate;
