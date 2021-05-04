import { useEffect, useRef, useState } from 'react';
import './Filter.sass';

export const Filter = ({filterCurrency, abortFiltration, defaultFilterValue}) => {
  const [queryString, setQueryString] = useState(defaultFilterValue);
  const [inputOpenState, setInputOpenState] = useState(!!defaultFilterValue);

  const inputEl = useRef(null);

  useEffect(() => {
    queryString ? filterCurrency(queryString) : abortFiltration();
  }, [queryString, filterCurrency, abortFiltration])

  useEffect(() => {
    if( inputOpenState ) {
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
            onChange={ (event) => setQueryString(event.target.value) }
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