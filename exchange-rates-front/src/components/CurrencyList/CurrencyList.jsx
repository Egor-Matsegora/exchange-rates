import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Currency } from 'components/Currency'

import './CurrencyList.sass';

const mapStateToPorps = (state) => ({
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

export default connect(mapStateToPorps)(CurrencyList);
