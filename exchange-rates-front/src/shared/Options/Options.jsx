import './Options.sass';
import { useState } from 'react';

export const Options = ({ currency, activeCurrencyList, setActiveCurrencyList }) => {
  const [openStatus, setOpenStatus] = useState(false);
  const [activeCurrencyNames, setactiveCurrencyNames] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filteredCurrency, setFilteredCurrency] = useState([]);

  const handleOpenStatus = () => {
    setactiveCurrencyNames(activeCurrencyList);
    setOpenStatus(openStatus ? false : true);
    resetFilter();
  }

  const mapCurrency = (currency) => (
    currency.map(cur => (
      <div
        className="options__checkbox"
        key={ cur.ID }
        title={ cur.Name }
      >
        <input
          type="checkbox"
          id={ cur.ID }
          value={ cur.CharCode }
          checked={ activeCurrencyNames.includes(cur.CharCode) }
          onChange={ handleActiveCurChange }
        />
        <label
          className="options__label"
          htmlFor={cur.ID}
        >
          { cur.CharCode } ( {cur.Name} )
        </label>
      </div>
    ))
  );

  const handleActiveCurChange = (e) => {
    const value = e.target.value
    let result = [...activeCurrencyNames];
    if(result.includes(value)) {
      result = result.filter(item => item !== value);
    } else {
      result.unshift(value);
    }
    result.length > 3 && (result.length = 3);
    !result.length && result.push('USD');
    console.log(result);
    setactiveCurrencyNames(result);
    setActiveCurrencyList(result);
  }

  const handleFilter = (event) => {
    const value = event.target.value
    setFilterValue(value);
    const filterResult = currency.filter(cur => {
      return cur.CharCode.toLowerCase().includes(value.trim().toLowerCase()) || cur.Name.toLowerCase().includes(value.trim().toLowerCase());
    })
    setFilteredCurrency(filterResult)
  }

  const resetFilter = () => {
    setFilterValue('');
  }

  return (
    <div className="options">
      <div
        className={`options__icon ${openStatus ? 'options__icon--open' : 'options__icon--closed'}`}
        onClick={ handleOpenStatus }
      >
        <div className="options__icon-line options__icon-line--top"></div>
        <div className="options__icon-line options__icon-line--center"></div>
        <div className="options__icon-line options__icon-line--bottom"></div>
      </div>
      <div className={`options__dropdown ${openStatus ? 'options__dropdown--open' : 'options__dropdown--closed'}`}>
        <div className="options__column">
          <div className="options__title">
            Выберите валюты которые будут находиться в начале списка
            <br/>
            <small>(максимум 3 наименования)</small>
          </div>
          <div className="options__filter">
            <input
              type="text"
              className="options__filter-input"
              value={ filterValue }
              onChange={ handleFilter }
            />
            {
              filterValue && <button
                className="options__filter-reset"
                onClick={ resetFilter }
              ></button>
            }
          </div>
          <div className="options__list">
            { mapCurrency( filterValue.trim() ? filteredCurrency : currency ) }
          </div>
        </div>
      </div>
    </div>
  )
}