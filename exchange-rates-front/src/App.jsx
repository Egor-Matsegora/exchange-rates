import Header from './components/Header';
import CurrencyList from './components/CurrencyList';
import Calculator from './components/Calculator';
import './App.sass';

const App = () => {
  return (
    <div className="app">
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__content">
        <Calculator/>
        <CurrencyList/>
      </div>
    </div>
  );
}

export default App;
