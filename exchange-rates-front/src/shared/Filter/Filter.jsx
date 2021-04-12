import { useState } from 'react';

export const Filter = ({filterCurrency, abortFiltration}) => {
  const [queryString, setQueryString] = useState('');
  const handleInputChange = (event) => {
    setQueryString(event.target.value);
    event.target.value ? filterCurrency(queryString) : abortFiltration()
  }
  const handleInputReset = () => {
    setQueryString('');
    abortFiltration();
  }

  return (
    <>
      <div className="filter">
        <input
          type="text"
          className="filter__input"
          value={ queryString }
          onChange={ handleInputChange }
        />
        <button
          className="filter__reset"
          onClick={ handleInputReset }
        >reset</button>
      </div>
      <button className="filter__open">open</button>
    </>
)
};