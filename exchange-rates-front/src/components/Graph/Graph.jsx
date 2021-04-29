import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';

import { Bar } from 'react-chartjs-2';
import { getCurrencyRangeAsync, getRangeCurrencySuccess } from 'pages/CurrencyPage/store/actions';

import './Graph.sass';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loading: state.currencyRange.currencyRangeLoading,
  currencyRange: state.currencyRange.currencyRange,
  startDate: state.currencyRange.startDate,
  endDate: state.currencyRange.endDate,
})

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators({ getCurrencyRangeAsync, getRangeCurrencySuccess }, dispatch)});

const GraphComponent = ({charCode, loading, currencyRange, startDate, endDate, actions}) => {
  const [ data, setData ] = useState(null);
  const { getCurrencyRangeAsync, getRangeCurrencySuccess } = actions

  useEffect(() => {
    if(!charCode) return;
    getCurrencyRangeAsync(charCode, startDate, endDate);
    return () => getRangeCurrencySuccess(null);
  }, [getCurrencyRangeAsync, getRangeCurrencySuccess, charCode, startDate, endDate])

  useEffect(() => {
    if(!currencyRange) return;

    const resultData = {
      labels: Object.keys(currencyRange),
      datasets: [
        {
          label: charCode,
          data: Object.values(currencyRange),
          backgroundColor: ['rgba(75, 192, 192, 1)']
        }
      ]
    };
    setData(resultData);
    return () => setData(null);
  }, [currencyRange, charCode])

  const options = {
    scales: {
      y: {
          beginAtZero: false,
      },
    },
  };

  return (
    <div className="graph">
      <h3 className="graph__title">График изменения курса</h3>
      <div className="graph__content">
        {
          loading || !currencyRange  ? '...loading' : <Bar data={ data } options={ options } />
        }
      </div>
    </div>
  );
}

export const Graph = connect(mapStateToProps, mapDispatchToProps)(GraphComponent)