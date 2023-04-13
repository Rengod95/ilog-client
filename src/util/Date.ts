import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';

export const getParsedLogTimeS = () => {};

export type TimeZone = 'Asia/Seoul';
export const utcToZonedTimeWithFormat = (
  utcDate: Date | string,
  timeZone: TimeZone = 'Asia/Seoul'
) => {
  const converted = utcToZonedTime(utcDate, timeZone);
  const formatted = format(converted, 'yyyy / MM / dd');

  return formatted;
};
