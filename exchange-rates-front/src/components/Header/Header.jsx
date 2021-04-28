
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { Logo } from "shared/Logo/Logo";
import { Options } from "shared/Options";
import { Filter } from "shared/Filter";
import { filterCurrency, abortFiltration, setActiveCurrencyList } from "store/actions";

import './Header.sass';

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  activeCurrencyList: state.currency.activeCurrencyList
})
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ filterCurrency, abortFiltration, setActiveCurrencyList }, dispatch)});

const Header = ({actions, currency, activeCurrencyList}) => {
  return (
  <header className="header">
    <Link to='/' className="header__logo">
      <Logo/>
    </Link>
    <div className="header__nav">
      <div className="header__nav-item">
        <Filter
          filterCurrency={ actions.filterCurrency }
          abortFiltration={ actions.abortFiltration }
        />
      </div>
      <div className="header__nav-item">
        <Options
          currency={ currency }
          activeCurrencyList={ activeCurrencyList }
          setActiveCurrencyList={ actions.setActiveCurrencyList }
        />
      </div>
    </div>
  </header>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);