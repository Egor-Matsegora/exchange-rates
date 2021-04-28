import Calculator from '../../components/Calculator';
import CurrencyList from '../../components/CurrencyList';

import './Home.sass';

export const Home = () => {
  return (
    <div className="home">
      <div className="home__calculator">
        <Calculator/>
      </div>
      <div className="home__list">
        <CurrencyList/>
      </div>
    </div>
  )
}