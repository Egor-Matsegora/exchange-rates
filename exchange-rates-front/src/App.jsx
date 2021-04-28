import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import { Home } from './pages/Home';
import { CurrencyPage } from './pages/CurrencyPage';

import './App.sass';

const App = () => {
  return (
    <div className="app">
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__content">
        <Switch>

          <Route
            path="/"
            component={ Home }
            exact
          />
          <Route
            path="/:charcode"
            component={ CurrencyPage }
            exact
          />

        </Switch>
      </div>
    </div>
  );
}

export default App;
