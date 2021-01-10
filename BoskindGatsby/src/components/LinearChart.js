import React, { useEffect } from 'react';
import Chart from 'chart.js';

function chartData({ slope, intercept, min, max }) {
  const valuesToChart = [];
  const labels = [];
  for (let i = min; i <= max; i++) {
    const yValue = slope * i + intercept;
    valuesToChart.push({ x: i, y: yValue });
    labels.push(i);
  }
  return { valuesToChart, labels };
}

export default function LinearChart({ chartInfo, points }) {
  useEffect(() => {
    const dataToChart = chartData({
      slope: chartInfo.slope,
      intercept: chartInfo.intercept,
      min: chartInfo.min,
      max: chartInfo.max,
    });
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: dataToChart.labels,
        datasets: [
          {
            label: `(${points.x1}, ${points.y1}) & (${points.x2}, ${points.y2})`,
            pointBorderColor: 'rgba(255,0, 255, 1)',
            BorderColor: 'rgba(0,200, 200, 1)',
            BackgroundColor: 'rgba(0,200, 200, 1)',
            borderWidth: '2',
            pointBackgroundColor: 'rgba(0, 0, 0,1)',

            type: 'scatter',
            data: [
              { x: points.x1, y: points.y1 },
              { x: points.x2, y: points.y2 },
            ],
          },
          {
            label: `y=${chartInfo.slope}x+${chartInfo.intercept}`,
            pointBorderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(255, 99, 132,0)',
            borderColor: `rgba(255, 99, 132,${chartInfo.visible})`,
            data: dataToChart.valuesToChart,
          },
        ],
      },

      // Configuration options go here
      options: {
        responsive: true,

        legend: {
          display: false,
          labels: {
            color: 'rgb(255, 99, 132)',
          },
        },

        scales: {
          xAxes: [
            {
              position: 'bottom',
            },
            {
              position: 'top',
            },
          ],
          yAxes: [
            {
              position: 'left',
              gridLines: {
                zeroLineColor: 'rgb(0,0,0)',
                zeroLineWidth: 2,
                drawOnChartArea: true,
              },
              ticks: {
                crossAlign: true,
                beginAtZero: true,
                precision: 1,
                max: 10,
                min: -10,
                stepSize: 1,
              },
            },
            {
              position: 'right',
              gridLines: {
                zeroLineColor: 'rgb(0,0,0)',
                zeroLineWidth: 1,
              },
              ticks: {
                beginAtZero: true,
                precision: 1,
                max: 10,
                min: -10,
                stepSize: 2,
              },
            },
          ],
        },
      },
    });
    return () => chart.destroy();
  });
  return (
    <div className="chartjs-wrapper">
      <canvas id="myChart" className="chartjs" />
    </div>
  );
}
