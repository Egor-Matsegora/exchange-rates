import { Component } from 'react';
import { Header } from './components/header';
import { api } from './api'
import './App.sass';

class App extends Component {

  componentDidMount() {
    // api.fetchCurrencyByDate('2020/06/03').then(console.log).catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
