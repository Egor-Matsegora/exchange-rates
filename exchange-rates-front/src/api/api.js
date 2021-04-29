import axios from 'axios';
import { rangeDateHelper } from 'helpers/currentDateHelper';

export const api = {
  fetchCurrency() {
    return axios('https://www.cbr-xml-daily.ru/daily_json.js');
  },
  fetchCurrencyRange(charCode) {
    if (!charCode) return;
    const [startDate, endDate] = rangeDateHelper();
    // return axios(`https://free.currconv.com/api/v7/convert?q=${charCode}_RUB&compact=ultra&date=${startDate}&endDate=${endDate}&apiKey=77b1200042287b341644`)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {"USD_PHP": {
            "2021-01-18": 48.06501,
            "2021-01-19": 48.074962,
            "2021-01-20": 48.07496,
            "2021-01-21": 48.06799,
            "2021-01-22": 48.064397,
            "2021-01-23": 48.064397
          }}
        });
      }, 500);
    })
  }
}