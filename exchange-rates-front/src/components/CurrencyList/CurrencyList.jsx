import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Currency } from 'components/Currency'

import './CurrencyList.sass';

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  currencyLoading: state.currency.currencyLoading,
  filteredCurency: state.currency.filteredCurency,
  isFiltering: state.currency.isFiltering,
  activeCurrencyList: state.currency.activeCurrencyList
});

export const CurrencyList = ({
    isFiltering,
    filteredCurency,
    currency,
    activeCurrencyList,
    currencyLoading
  }) => {

  const currencyArray = isFiltering ? filteredCurency : currency;
  const isLoading = currencyLoading;

  const defaultTemplate = currencyArray.length ? [ ...currencyArray ]
    .sort(item => activeCurrencyList.includes(item.CharCode) ? -1 : 1)
    .map(item => (
      <div className="list__item" key={ item.ID }>
        <Currency currency={ item } isPrimary={ activeCurrencyList.includes(item.CharCode) }/>
      </div>
  )) : '...';

  const loadingTemplate = (<p> ...loading... </p>);

  return (
    <div className="list">
      { isLoading ? loadingTemplate : defaultTemplate }
    </div>
  );
};

CurrencyList.propTypes = {
  list: PropTypes.array
}

CurrencyList.defaultPros = {
  list: []
}

export default connect(mapStateToProps)(CurrencyList);
