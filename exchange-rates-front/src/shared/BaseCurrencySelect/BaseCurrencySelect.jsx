import PropTypes from 'prop-types';
import Select from 'react-select';
import './BaseCurrencySelect.sass';

export const BaseCurrencySelect = ({baseCurrency, baseCurrencyArray}) => {

  const selectOptions = baseCurrencyArray.map(currency => ({ value: currency, label: currency }));
  const handleSelect = (e) => {
    console.log(e);
  }

  return (
    <div className="base-select">
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        options={ selectOptions }
        defaultValue={ baseCurrency }
        defaultInputValue={ baseCurrency }
        onChange={ handleSelect }
      />
    </div>
  )
};

BaseCurrencySelect.propTypes = {
  baseCurrency: PropTypes.string,
  baseCurrencyArray: PropTypes.arrayOf(
    PropTypes.string
  )
};
