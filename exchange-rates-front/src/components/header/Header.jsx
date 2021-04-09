
import { Logo } from "../../shared/Logo/Logo";
import { BaseCurrencySelect } from "../../shared/BaseCurrencySelect";
import './Header.sass';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__log">
        <Logo/>
      </div>
      <div className="header__nav">
        {/* <div className="header__select">{
          <BaseCurrencySelect 
            baseCurrency={ 'RUB' }
            baseCurrencyArray={ ['RUB', 'RUB1', 'RUB2', 'RUB3'] }
          />
        </div>} */}
      </div>
    </header>
  )
}