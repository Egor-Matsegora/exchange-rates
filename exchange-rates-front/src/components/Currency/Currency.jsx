import PropTypes from 'prop-types';
import './Currency.sass';

export const Currency = ({currency, isPrimary}) => {
  return (
    <div className={ `currency ${isPrimary ? 'currency--primary' : 'currency--secondary'}` }>
      <div className="currency__text">
        <div className={ `currency__name ${isPrimary ? 'currency__name--primary' : 'currency__name--secondary'}` }>
          { currency.Name }
        </div>
        <span className={ `currency__code ${isPrimary ? 'currency__code--primary' : 'currency__code--secondary'}` }>
          { currency.CharCode }
        </span>
      </div>
      <div className={ `currency__info ${isPrimary ? 'currency__info--primary' : 'currency__info--secondary'}` }>
        <span className="currency__nominal">
          { currency.Nominal } { currency.CharCode } =
        </span>
        <span className={`currency__value ${ currency.Value > currency.Previous ? 'currency__value--positive' : 'currency__value--negative' }`}>
          { currency.Value }
        </span>
      </div>
    </div>
  )
}

Currency.propTypes = {
  currency: PropTypes.object,
  isPrimary: PropTypes.bool,
};

Currency.defaultProps = {
  isPrimary: true,
}