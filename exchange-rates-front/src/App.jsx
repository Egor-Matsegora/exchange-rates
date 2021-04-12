import Header from './components/Header';
import CurrencyList from './components/CurrencyList';
import './App.sass';

const App = () => {
  return (
    <div className="app">
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__content">
        <CurrencyList/>
      </div>
    </div>
  );
}

export default App;
