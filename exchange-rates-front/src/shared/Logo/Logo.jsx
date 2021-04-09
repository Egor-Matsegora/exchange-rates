import PropTypes from 'prop-types';
import './Logo.sass';

export const Logo = ({title, iconPath}) => {

  return (
    <div className="logo">
      <span className="logo__text">{ title }</span>
      <img src={ iconPath } alt={ title } className="logo__icon"/>
    </div>
  )
}

Logo.propTypes = {
  title: PropTypes.string,
  iconPath: PropTypes.string
}

Logo.defaultProps = {
  title: 'ExchangeRates',
  iconPath: 'images/exchange.svg'
}