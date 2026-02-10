import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Charts({ summary }) {
  if (!summary || !summary.type_distribution) return null;

  const labels = Object.keys(summary.type_distribution);
  const values = Object.values(summary.type_distribution);

  const data = {
    labels,
    datasets: [
      {
        label: "Equipment Types",
        data: values,
        backgroundColor: "rgba(37, 99, 235, 0.7)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.parsed.y} records`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="chart-wrapper">
      <Bar data={data} options={options} />
    </div>
  );
}

export default Charts;

