const date: any = new Date();
const firstDayMonth: any = new Date(date.getFullYear(), date.getMonth(), 1);
const firstDayNextMonth: any = new Date(date.getFullYear(), date.getMonth() + 1, 1);
const daysInMonth: number = Math.round((firstDayNextMonth - firstDayMonth) / 1000 / 3600 / 24);
const mockedResponseDays = new Array(daysInMonth);

const getStringDay = (day: any) => {
  if (day.getDate() < 10) return '0' + day.getDate();
  else return day.getDate();
};

const getStringMonth = (day: any) => {
  if (day.getMonth() < 9) return '0' + (day.getMonth() + 1);
  else return day.getMonth() + 1;
};

for (let i = 0; i < mockedResponseDays.length; i++) {
  const day = new Date(date.getFullYear(), date.getMonth(), i + 1);
  mockedResponseDays[i] = {
    id: i + 1,
    day: day.getFullYear().toString() + '-' + getStringMonth(day) + '-' + getStringDay(day),
  };
}

export const mockedApiDays = () => {
  return new Promise((resolve) => {
    resolve(mockedResponseDays);
  });
};
