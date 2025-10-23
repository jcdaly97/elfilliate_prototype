import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

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


interface PageViewsChartProps {
  title: string;
  subtitle: string;
  data: {
    month: string;
    value: number;
  }[];
}

const PageViewsChart: React.FC<PageViewsChartProps> = ({
  title,
  subtitle,
  data,
}) => {
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Page Views",
        data: data.map((item) => item.value),
        borderColor: "rgba(157, 78, 221, 1)",
        backgroundColor: "rgba(157, 78, 221, 0.2)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "rgba(157, 78, 221, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
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
            return `${context.parsed.y?.toLocaleString() || "0"} views`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString();
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PageViewsChart;
