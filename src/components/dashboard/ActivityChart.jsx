'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ActivityChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Dummy data - will be replaced with API data
    const dummyData = {
      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      values: [1.2, 1.8, 2.5, 3.5, 2.2, 1.5, 1.8],
      highlightPoint: 3 // Index of the point to highlight (Wednesday)
    };

    setChartData({
      labels: dummyData.labels,
      datasets: [
        {
          label: 'Activity Hours',
          data: dummyData.values,
          borderColor: '#00E9C0',
          backgroundColor: 'rgba(0, 233, 192, 0.1)',
          tension: 0.4,
          pointRadius: (ctx) => {
            const index = ctx.dataIndex;
            return index === dummyData.highlightPoint ? 6 : 4;
          },
          pointBackgroundColor: (ctx) => {
            const index = ctx.dataIndex;
            return index === dummyData.highlightPoint ? '#FFFFFF' : '#00E9C0';
          },
          pointBorderColor: '#00E9C0',
          pointBorderWidth: (ctx) => {
            const index = ctx.dataIndex;
            return index === dummyData.highlightPoint ? 2 : 0;
          },
        },
      ],
    });

    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: '#333',
          titleColor: '#FFF',
          bodyColor: '#FFF',
          displayColors: false,
          callbacks: {
            title: (items) => {
              if (!items.length) return '';
              const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
              const dayIndex = items[0].dataIndex;
              return dayNames[dayIndex];
            },
            label: (item) => {
              return `${item.raw} Hours`;
            },
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 4,
          grid: {
            display: true,
            color: 'rgba(0, 0, 0, 0.05)',
          },
          ticks: {
            stepSize: 1,
            font: {
              size: 12,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 12,
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow-card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Activity</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="bg-primary w-2 h-2 rounded-full mr-2"></span>
            <span className="text-sm text-gray-600">This Week</span>
          </div>
          <button className="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="relative h-48">
        {chartData.datasets.length > 0 && (
          <Line data={chartData} options={chartOptions} />
        )}

        <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
          3.5 Hours
        </div>
      </div>
    </div>
  );
}