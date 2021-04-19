import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setBaseCurrency, calculateCurrency } from "../../store/actions";
import { BaseCurrencySelect } from "../../shared/BaseCurrencySelect";

const mapStateToProps = (state) => ({
  baseCurrencyName: state.currency.baseCurrency,
  calculatedValue: state.currency.calculatedCurrencyValue,
  currency: state.currency.currency,
  loading: state.currency.currencyLoading
})

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators({ setBaseCurrency, calculateCurrency }, dispatch)});

const Calculator = ({ baseCurrencyName, calculatedValue, currency, loading, actions }) => {
  const [ currentValue, setValue ] = useState(1)

  const calculate = (e) => {
    setValue(+e.target.value);
    actions.calculateCurrency(+e.target.value);
  }

  const setBase = (e) => {
    actions.setBaseCurrency(e.value);
    actions.calculateCurrency(currentValue);
  }

  return (
    <div className="calculator">
      <input
        type="text"
        value={ currentValue }
        onChange={ calculate }
      />
      { baseCurrencyName } = { calculatedValue } RUB
      {
        currency.length && <BaseCurrencySelect
          baseCurrency={ baseCurrencyName }
          baseCurrencyArray={ currency.map(cur => cur.CharCode) }
          onBaseCurrencyChange={ setBase }
        />
      }
    </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(Calculator);