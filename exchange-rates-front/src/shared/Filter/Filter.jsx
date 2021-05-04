import { useEffect, useRef, useState } from 'react';
import './Filter.sass';

export const Filter = ({filterCurrency, abortFiltration, defaultFilterValue}) => {
  const [queryString, setQueryString] = useState(defaultFilterValue);
  const [inputOpenState, setInputOpenState] = useState(false);

  const inputEl = useRef(null);

  const handleInputChange = (event) => {
    setQueryString(event.target.value);
    event.target.value ? filterCurrency(event.target.value) : abortFiltration()
  }

  useEffect(() => {
    if(inputOpenState) {
      inputEl.current.focus();
    } else {
      setQueryString('');
      abortFiltration();
      inputEl.current.blur();
    }
  }, [inputOpenState, setQueryString, abortFiltration, inputEl])

  return (
    <>
      <div className="filter">
        <div className={`filter__container ${inputOpenState ? 'filter__container--open' : 'filter__container--closed' }`}>
          <input
            type="text"
            className="filter__input"
            value={ queryString }
            ref={ inputEl }
            onChange={ handleInputChange }
          />
          <button
            className="filter__reset filter__button"
            onClick={ () => setInputOpenState(false) }
          ></button>
        </div>
        <button
          className="filter__open filter__button"
          onClick={ () => setInputOpenState(true) }
        ></button>
      </div>
    </>
)
};