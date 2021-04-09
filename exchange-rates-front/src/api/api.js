export const api = {
  fetchCurrency() {
    return fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
      method: 'GET',
      // headers: {

      // }
    })
  },
  fetchCurrencyByDate(date) {
    // date format is yyyy/mm/dd
    return fetch(`https://www.cbr-xml-daily.ru/archive/${date}/daily_json.js`, {
      method: 'GET',
    })
  }
}