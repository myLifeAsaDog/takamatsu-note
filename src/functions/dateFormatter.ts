interface FormattedDateParts {
  date: string;
  dayOfWeek: string;
  time: string;
}

export const formatDateToParts = (isoString: string): FormattedDateParts => {
  const dateObj = new Date(isoString);
  const dayOfWeekList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const dayOfWeek = dayOfWeekList[dateObj.getDay()];
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');

  return {
    date: `${year}.${month}.${day}`,
    dayOfWeek: dayOfWeek,
    time: `${hours}:${minutes}`,
  };
};
