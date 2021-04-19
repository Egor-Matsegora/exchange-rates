import PropTypes from 'prop-types';
import { Component } from 'react';
import { Currency } from '../Currency'
import './CurrencyList.sass';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrencyAsync } from '../../store/actions';

const mapStateToPorps = (state) => ({
  currency: state.currency.currency,
  currencyLoading: state.currency.currencyLoading,
  filteredCurency: state.currency.filteredCurency,
  isFiltering: state.currency.isFiltering,
  activeCurrencyList: state.currency.activeCurrencyList
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators({ getCurrencyAsync }, dispatch)});

class CurrencyList extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  static defaultPros = {
    list: []
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getCurrencyAsync();
  }

  render() {
    const currencyArray = this.props.isFiltering ? this.props.filteredCurency : this.props.currency;
    const isLoading = this.props.currencyLoading;

    const defaultTemplate = currencyArray.length ? currencyArray
      .sort(item => this.props.activeCurrencyList.includes(item.CharCode) ? -1 : 1)
      .map(item => (
        <div className="list__item" key={ item.ID }>
          {
            this.props.activeCurrencyList.includes(item.CharCode) ? <Currency currency={ item }/> : 'хрень'
          }
        </div>
    )) : '...';

    const loadingTemplate = (<p> ...loading... </p>);

    return (
      <div className="list">
        { isLoading ? loadingTemplate : defaultTemplate }
      </div>
    );
  }
};

export default connect(mapStateToPorps, mapDispatchToProps)(CurrencyList);
