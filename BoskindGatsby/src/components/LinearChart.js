import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';

function chartData({ slope, intercept, min, max }) {
  const valuesToChart = [];
  const labels = [];
  for (let i = min; i <= max; i++) {
    const yValue = slope * i + intercept;
    valuesToChart.push({ x: i, y: yValue });
    labels.push(i);
  }
  console.log(valuesToChart);
  console.log(labels);
  return { valuesToChart, labels };
}

export default function LinearChart({ chartInfo }) {
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
            label: `y=${chartInfo.slope}x+${chartInfo.intercept}`,
            backgroundColor: 'rgba(255, 99, 132,0)',
            borderColor: 'rgb(255, 99, 132)',
            data: dataToChart.valuesToChart,
          },
        ],
      },

      // Configuration options go here
      options: {
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 20,
            position: 'center',
            beginAtZero: true,
          },
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
