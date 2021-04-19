import './Options.sass';
import { useState } from 'react';

export const Options = ({ currency, activeCurrencyList, setActiveCurrencyList }) => {
  const [openStatus, setOpenStatus] = useState(false);
  const [activeCurrencyNames, setactiveCurrencyNames] = useState(activeCurrencyList);

  const handleOpenStatus = () => {
    setOpenStatus(openStatus ? false : true)
  }

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
    setactiveCurrencyNames(result);
    setActiveCurrencyList(result);
  }

  return (
    <div className="options">
      <div
        className="options__icon"
        onClick={ handleOpenStatus }
      >
        { openStatus ? 'закрыть' : 'опции' }
      </div>
      <div className={`options__dropdown ${openStatus ? 'options__dropdown--open' : 'options__dropdown--closed'}`}>
        <div className="options__list">
          <div className="options__column">
            Главные валюты
            {
              currency.map(cur => (
                <div
                  className="options__checkbox"
                  key={ cur.ID }
                >
                  <input
                    type="checkbox"
                    id={ cur.ID }
                    value={ cur.CharCode }
                    checked={ activeCurrencyNames.includes(cur.CharCode) }
                    onChange={ handleActiveCurChange }
                  />
                  <label htmlFor={cur.ID}>
                    { cur.CharCode }
                  </label>
                </div>
              ))
            }
          </div>
          {/* <div className="options__column">
            Все валюты
            {
              currency.map(cur => (
                <div
                  className="options__checkbox"
                  key={ cur.ID }
                >
                  <input
                    type="checkbox"
                    id={ cur.ID }
                    value={ cur.CharCode }
                  />
                  <label htmlFor={cur.ID}>
                    { cur.CharCode }
                  </label>
                </div>
              ))
            }
          </div> */}
        </div>
      </div>
    </div>
  )
}