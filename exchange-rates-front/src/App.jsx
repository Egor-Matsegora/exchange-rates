import Header from './components/Header';
import { Routes } from './components/Routes';

import './App.sass';

const App = () => {
  return (
    <div className="app">
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
