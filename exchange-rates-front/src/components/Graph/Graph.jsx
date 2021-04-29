import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';

import { Bar } from 'react-chartjs-2';
import { getCurrencyRangeAsync } from 'pages/CurrencyPage/store/actions';

import './Graph.sass';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loading: state.currencyRange.currencyRangeLoading,
  currencyRange: state.currencyRange.currencyRange,
})

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators({ getCurrencyRangeAsync }, dispatch)});

const GraphComponent = ({charCode, loading, currencyRange, actions}) => {
  const [ data, setData ] = useState(null);
  const { getCurrencyRangeAsync } = actions

  useEffect(() => {
    if(!charCode) return;
    getCurrencyRangeAsync(charCode);
  }, [getCurrencyRangeAsync, charCode])

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
  }, [currencyRange, charCode])

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <h2>График изменения Курса за последние 8 дней</h2>
      <div className="cur-page__cur-graph">
        {
          loading || !currencyRange  ? '...loading' : <Bar data={ data } options={ options } />
        }
      </div>
    </>
  );
}

export const Graph = connect(mapStateToProps, mapDispatchToProps)(GraphComponent)