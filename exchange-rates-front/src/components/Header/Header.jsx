
import { Component, } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Logo } from "../../shared/Logo/Logo";
import { BaseCurrencySelect } from "../../shared/BaseCurrencySelect";
import { Filter } from "../../shared/Filter";
import { filterCurrency, abortFiltration } from "../../store/actions";

import './Header.sass';

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({filterCurrency, abortFiltration}, dispatch)});

class Header extends Component {
  componentDidMount() {
  }

  render() {
      return (
        <header className="header">
        <div className="header__log">
          <Logo/>
        </div>
        <div className="header__nav">
          <div className="header__nav-item">
            {/* <BaseCurrencySelect 
            baseCurrency={ 'RUB' }
            baseCurrencyArray={ ['RUB', 'RUB1', 'RUB2', 'RUB3'] }
            /> */}
            <Filter {...this.props.actions}/>
          </div>
        </div>
      </header>
    )
  }
}

export default connect(null, mapDispatchToProps)(Header);