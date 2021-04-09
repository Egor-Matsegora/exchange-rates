import { currency } from "fixtures"

export const api = {
  // fetchCurrency() {
  //   return fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
  //     method: 'GET'
  //   })
  // },
  fetchCurrency() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve(currency), 200)
    })
  },
  // fetchCurrencyByDate(date) {
  //   // date format is yyyy/mm/dd
  //   return fetch(`https://www.cbr-xml-daily.ru/archive/${date}/daily_json.js`, {
  //     method: 'GET',
  //   })
  // },
  fetchCurrencyByDate(date) {
    // date format is yyyy/mm/dd
    return new Promise((resolve, reject) => {
      setTimeout(resolve(currency), 200)
    })
  },
}