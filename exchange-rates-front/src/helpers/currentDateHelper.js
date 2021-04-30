import moment from 'moment';

export const currentDateHelper = () => moment().format('YYYY-MM-DD');

export const rangeDateHelper = () => [moment().subtract(8, 'days').format('YYYY-MM-DD'), currentDateHelper()];

export const formatDate = (date = new Date(), format = 'DD MM YYY') => moment(date).format(format);