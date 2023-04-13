import { utcToZonedTimeWithFormat } from '@/util';

export const getParsedLogDate = (date: Date | string) => {
  return utcToZonedTimeWithFormat(date);
};
