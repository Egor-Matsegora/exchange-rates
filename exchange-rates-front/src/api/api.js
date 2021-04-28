import axios from 'axios';

export const api = {
  fetchCurrency() {
    return axios('https://www.cbr-xml-daily.ru/daily_json.js');
  }
}