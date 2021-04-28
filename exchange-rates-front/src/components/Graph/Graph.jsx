import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { arrayDateHelper } from 'helpers/currentDateHelper';

import './Graph.sass';

export const Graph = ({currentCurrency, charCode}) => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    console.log(currentCurrency);
    const resultData = {
      labels: arrayDateHelper(),
      datasets: [
        {
          label: charCode,
          data: [12, 19, 3, 5, 2, 3, 7, 6],
          backgroundColor: ['rgba(75, 192, 192, 1)']
        }
      ]
    };
    setData(resultData);
  }, [currentCurrency, charCode])

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
        <Bar data={ data } options={ options } />
      </div>
    </>
  );
}