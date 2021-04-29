import moment from 'moment';

export const currentDateHelper = () => moment().format('YYYY-MM-DD');

export const rangeDateHelper = () => [moment().subtract(8, 'days').format('YYYY-MM-DD'), currentDateHelper()];

export const arrayDateHelper = () => {
  const dateArray = [];
  dateArray.push(moment().format('DD MM YYYY'));
  for (let i = 1; i < 8; i++) {
    dateArray.push(moment().subtract(i, 'days').format('DD MM YYYY'));
  }
  return dateArray;
}

export const formatDate = (date = new Date(), format = 'DD MM YYY') => moment(date).format(format);