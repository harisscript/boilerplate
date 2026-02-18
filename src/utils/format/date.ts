import { format } from 'date-fns';

export const formatDate = (date: Date, pattern = 'dd MMM yyyy') => {
  return format(date, pattern);
};