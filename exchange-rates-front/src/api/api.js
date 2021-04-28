import axios from 'axios';
import { rangeDateHelper } from 'helpers/currentDateHelper';

export const api = {
  fetchCurrency() {
    return axios('https://www.cbr-xml-daily.ru/daily_json.js');
  },
  fetchCurrencyLastWeek(charCode) {
    if (!charCode) return;
    const [startDate, endDate] = rangeDateHelper();
    return axios(`https://free.currconv.com/api/v7/convert?q=${charCode}_RUB&compact=ultra&date=${startDate}&endDate=${endDate}&apiKey=77b1200042287b341644`)
  }
}