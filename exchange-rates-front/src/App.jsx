import { Component } from 'react';
import { Header } from './components/Header';
import { CurrencyList } from './components/CurrencyList';
import { api } from './api'
import './App.sass';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currencyArray: [],
    }
  }

  componentDidMount() {
    api.fetchCurrency()
      .then(res => {
        const result = [];
        for (const key in res.Valute) {
          console.log();
          if (res.Valute[key]) {
            const valute = res.Valute[key];
            result.push(valute);
          }
        }
        this.setState({currencyArray: result});
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Header/>
        </div>
        <div className="app__content">
          <CurrencyList list={ this.state.currencyArray }/>
        </div>
      </div>
    );
  }
}

export default App;
