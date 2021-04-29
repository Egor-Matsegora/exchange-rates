import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './components/Header';
import { Routes } from './components/Routes';
import { getCurrencyAsync } from 'pages/HomePage/store/actions';

import './App.sass';

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators({ getCurrencyAsync }, dispatch)});

const App = ({actions}) => {

  const { getCurrencyAsync } = actions

  useEffect(() => getCurrencyAsync(), [getCurrencyAsync]);

  return (
    <div className="app">
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__content">
        <Routes />
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(App);
