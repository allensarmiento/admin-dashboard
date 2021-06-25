import Chart from 'chart.js/auto';
import React, { useEffect } from 'react';

interface Props {
  labels: Array<any>;
  datasets: Array<any>;
  options?: object;
}

const BarChart = ({ labels, datasets, options }: Props) => {
  const chartRef: React.RefObject<HTMLCanvasElement> = React.createRef();

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext('2d');

      new Chart(myChartRef, {
        type: 'bar',
        data: { labels, datasets },
        options,
      });
    }
  }, []);

  return <canvas id="myChart" ref={chartRef} />
};

export default BarChart;
