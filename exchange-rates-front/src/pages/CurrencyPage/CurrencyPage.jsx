import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Graph } from 'components/Graph';
import { DateRange } from 'components/DateRange';
import './CurrencyPage.sass';

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  loading: state.currency.currencyLoading,
  currentCurrencyRage: state.currency.currentCurrency,
})

const CurrencyPageComponent = ({ match, currency, loading }) => {
  const { charcode } = match.params;
  const [ currentCurrency, setCurrentCurrency ] = useState(null);

  useEffect(() => {
    const cur = currency.find(cur => cur.CharCode === charcode);
    setCurrentCurrency(cur);
  }, [currency, charcode]);

  if(!currentCurrency || loading) return (
    <div>loading...</div>
  );

  return (
    <div className="cur-page">
      <div className="cur-page__header cur-page__block">
        <h1 className="cur-page__cur-name">
          { currentCurrency.Name }
        </h1>
        <div className="cur-apge__cur-code">
          1 { currentCurrency.CharCode } =
          <span className={`cur-page__cur-rate ${currentCurrency.Value > currentCurrency.Previous ? 'cur-page__cur-rate--positive' : 'cur-page__cur-rate--negative'}`}>
            { currentCurrency.Value } RUB
          </span>
        </div>
      </div>
      <div className="cur-page__calendar cur-page__block">
        <DateRange/>
      </div>
      <div className="cur-page__block">
        <Graph charCode={ charcode }/>
      </div>
    </div>
  );
}

export const CurrencyPage = connect(mapStateToProps)(CurrencyPageComponent);
