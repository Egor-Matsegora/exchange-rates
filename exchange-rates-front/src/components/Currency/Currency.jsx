import './Currency.sass';

export const Currency = ({currency}) => {
  return (
    <div className="currency">
      <div className="currency__text">
        <div className="currency__name">
          { currency.Name }
        </div>
        <span className="currency__code">
          { currency.CharCode }
        </span>
      </div>
      <div className="currency__info">
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