import { Key } from '@/types';

export const normalizeKey = (key: Key) => {
  const normalized = key
    .replace(/\+/g, ' ')
    .replace('contents/', '')
    .replaceAll('.md', '');
  console.log(normalized);
  return normalized;
};
