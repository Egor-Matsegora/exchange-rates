import PropTypes from 'prop-types';
import Select from 'react-select';
import './BaseCurrencySelect.sass';

export const BaseCurrencySelect = ({baseCurrency, baseCurrencyArray, onBaseCurrencyChange }) => {

  return (
    <div className="base-select">
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        options={ baseCurrencyArray.map(currency => ({ value: currency, label: currency })) }
        defaultValue={{ value: baseCurrency, label: baseCurrency } }
        onChange={ onBaseCurrencyChange }
      />
    </div>
  )
};

BaseCurrencySelect.propTypes = {
  onBaseCurrencyChange: PropTypes.func,
  baseCurrency: PropTypes.string,
  baseCurrencyArray: PropTypes.arrayOf(
    PropTypes.string
  )
};
