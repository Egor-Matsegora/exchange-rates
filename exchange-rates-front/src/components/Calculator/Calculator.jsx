import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setBaseCurrency, calculateCurrency, calculateCurrencyReverse } from "pages/HomePage/store/actions";
import { BaseCurrencySelect } from "shared/BaseCurrencySelect";
import './Calculator.sass';

const mapStateToProps = (state) => ({
  baseCurrencyName: state.currency.baseCurrency,
  calculatedValue: state.currency.calculatedCurrencyValue,
  currency: state.currency.currency,
  loading: state.currency.currencyLoading
})

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators({ setBaseCurrency, calculateCurrency, calculateCurrencyReverse }, dispatch)});

const Calculator = ({ baseCurrencyName, calculatedValue, currency, actions }) => {
  const [ currentValue, setCurrentValue ] = useState(1);
  const [ reverse, setReverse ] = useState(false);

  useEffect(() => {
    if(!currency.length) return;
    reverse ? actions.calculateCurrencyReverse(currentValue) : actions.calculateCurrency(currentValue)
  }, [actions, currency, currentValue, reverse]);

  const setBase = (e) => {
    actions.setBaseCurrency(e.value);
    actions.calculateCurrency(currentValue);
  }

  return (
    <div className="calculator">
      <input
        className="calculator__input"
        type="text"
        value={ currentValue }
        onChange={ (e) => setCurrentValue(+e.target.value) }
      />
      <span className="calculator__text">
        { reverse ? 'RUB' : baseCurrencyName } = { Math.round( calculatedValue * 100 ) / 100  } { reverse ? baseCurrencyName : 'RUB' }
      </span>
      <button
        className="calculator__reverse"
        onClick={ () => setReverse(!reverse) }
      ></button>
      <div className="calculator__select">
        <BaseCurrencySelect
          baseCurrency={ baseCurrencyName }
          baseCurrencyArray={ currency.map(cur => cur.CharCode) }
          onBaseCurrencyChange={ setBase }
        />
      </div>
    </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(Calculator);