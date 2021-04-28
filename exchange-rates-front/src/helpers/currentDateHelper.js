import moment from 'moment';

export const currentDateHelper = () => moment().format('YYYY-MM-DD');

export const rangeDateHelper = () => [moment().subtract(8, 'days').format('YYYY-MM-DD'), currentDateHelper()];