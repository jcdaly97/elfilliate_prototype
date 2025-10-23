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
  ChartOptions,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


interface SalesChartProps {
  title: string;
  subtitle: string;
  data: {
    month: string;
    value: number;
  }[];
}

const SalesChart: React.FC<SalesChartProps> = ({ title, subtitle, data }) => {
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Sales",
        data: data.map((item) => item.value),
        backgroundColor: "rgba(157, 78, 221, 0.6)",
        borderColor: "rgba(157, 78, 221, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.parsed.y?.toLocaleString() || "0"}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default SalesChart;
