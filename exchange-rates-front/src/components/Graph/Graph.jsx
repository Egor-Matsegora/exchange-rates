import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { arrayDateHelper } from 'helpers/currentDateHelper';

import './Graph.sass';

const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

const GraphComponent = ({currency}) => {
  const [ data, setData ] = useState({});

  useEffect(() => {
    const resultData = {
      ...data,
      labels: arrayDateHelper(),
      datasets: [
        {
          label: currency.CharCode,
          data: [12, 19, 3, 5, 2, 3, 7, 6],
          backgroundColor: ['rgba(75, 192, 192, 1)']
        }
      ]
    };
    setData(resultData);
  }, [])

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
        <Bar data={ data } options={ options }/>
      </div>
    </>
  );
}

export const Graph = connect(mapStateToProps, mapDispatchToProps)(GraphComponent);