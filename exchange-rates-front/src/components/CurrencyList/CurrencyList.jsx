import PropTypes from 'prop-types';
import { Currency } from '../Currency'
import './CurrencyList.sass';

export const CurrencyList = ({ list }) => {
  console.log(list);
  return (
    <div className="list">
      {
        list ? list.map(item => (
          <div className="list__item">
            <Currency currency={ item } key={ item.ID }/>
          </div>
        )) : '...'
      }
    </div>
  )
};

CurrencyList.propTypes = {
  list: PropTypes.array
}
