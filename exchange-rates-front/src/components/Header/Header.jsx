
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { Logo } from "shared/Logo/Logo";
import { Options } from "shared/Options";
import { Filter } from "shared/Filter";
import {
  filterCurrency,
  abortFiltration,
  setActiveCurrencyList
} from "pages/HomePage/store/actions";

import './Header.sass';
import { useEffect, useState } from "react";

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  activeCurrencyList: state.currency.activeCurrencyList
})
const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators({ filterCurrency, abortFiltration, setActiveCurrencyList }, dispatch)}
);

const Header = ({actions, currency, activeCurrencyList}) => {
  const url = useLocation().pathname;
  const history = useHistory();
  const [listChanged, setLitChanged] = useState(false);

  const [filterString, setFilterString] = useState(history.location.search.split('=')[1] || '');


  useEffect(() => {
    if(!currency.length) return;
    if (filterString) {
      actions.filterCurrency(filterString);
      history.push({
        path: '/',
        search: `?filter=${filterString}`
      })
    } else {
      actions.abortFiltration();
      history.push({
        path: '/'
      })
    }
  }, [currency, filterString, history, actions])

  useEffect(
    () => {
      if(!listChanged) return;
      localStorage.setItem('options', JSON.stringify(activeCurrencyList))
    },
    [listChanged, activeCurrencyList]
  )

  return (
    <header className="header">
      {
        url === '/'
          ? (<span className="header__logo">
            <Logo/>
          </span>)
          : (<Link to='/' className="header__logo">
              <Logo/>
            </Link>)
      }
      <div className="header__nav">
        {url === '/' && (
          <div className="header__nav-item">
            <Filter
              defaultFilterValue={ filterString }
              filterCurrency={ setFilterString }
              abortFiltration={ () => setFilterString('') }
            />
          </div>
        )}
        <div className="header__nav-item">
          <Options
            currency={ currency }
            activeCurrencyList={ activeCurrencyList }
            setActiveCurrencyList={ (e) => {
              actions.setActiveCurrencyList(e);
              setLitChanged(true);
            }}
          />
        </div>
      </div>
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);