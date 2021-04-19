
import { Component, } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Logo } from "../../shared/Logo/Logo";
import { Options } from "../../shared/Options";
import { Filter } from "../../shared/Filter";
import { filterCurrency, abortFiltration, setActiveCurrencyList } from "../../store/actions";

import './Header.sass';

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  activeCurrencyList: state.currency.activeCurrencyList
})
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ filterCurrency, abortFiltration, setActiveCurrencyList }, dispatch)});

const Header = ({actions, currency, activeCurrencyList}) => {
  return (
    <header className="header">
    <div className="header__log">
      <Logo/>
    </div>
    <div className="header__nav">
      <div className="header__nav-item">
        <Filter { ...actions }/>
      </div>
      <div className="header__nav-item">
        <Options
          currency={ currency }
          activeCurrencyList={ activeCurrencyList }
          setActiveCurrencyList={ setActiveCurrencyList }
        />
      </div>
    </div>
  </header>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);