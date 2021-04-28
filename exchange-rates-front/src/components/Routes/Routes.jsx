import { Route, Switch } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { CurrencyPage } from 'pages/CurrencyPage';

export const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={ HomePage }
        exact
      />
      <Route
        path="/:charcode"
        component={ CurrencyPage }
        exact
      />
    </Switch>
  )
}
