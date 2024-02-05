import moment from 'moment';

export const formatUTCDate = (date, timezone) => {
  return moment
    .unix(date)
    .utcOffset(timezone / 60)
    .format('hh:mm A');
};
