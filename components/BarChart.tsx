"use client";

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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the type for a record
interface Record {
  date: string; // ISO date string
  amount: number; // Hours slept
}

const BarChart = ({ records }: { records: Record[] }) => {
  // Prepare data for the chart
  const data = {
    labels: records.map((record) => new Date(record.date).toLocaleDateString()), // Use record dates as labels
    datasets: [
      {
        data: records.map((record) => record.amount), // Use record amounts as data
        backgroundColor: records.map((record) =>
          // Very light blue (blue-100) for < 7, blue-400 for >= 7
          record.amount < 7 ? "rgba(219,234,254,0.6)" : "rgba(96,165,250,0.6)"
        ),
        borderColor: records.map((record) =>
          record.amount < 7 ? "rgba(219,234,254,1)" : "rgba(96,165,250,1)"
        ),
        borderWidth: 1,
        borderRadius: 2, // Rounded bar edges
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Remove legend
      },
      title: {
        display: false, // Remove chart title
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          font: {
            size: 14,
            weight: "bold" as const,
          },
          color: "#2c3e50",
        },
        ticks: {
          font: {
            size: 12, // Adjust x-axis font size
          },
          color: "#7f8c8d", // Gray x-axis labels
        },
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        title: {
          display: true,
          text: "Hours Slept",
          font: {
            size: 16,
            weight: "bold" as const,
          },
          color: "#2c3e50",
        },
        ticks: {
          font: {
            size: 12, // Adjust y-axis font size
          },
          color: "#7f8c8d", // Gray y-axis labels
        },
        grid: {
          color: "#e0e0e0", // Light gray y-axis grid lines
        },
        suggestedMin: 4, // Start y-axis at 4
        suggestedMax: 10, // Extend y-axis to a larger value
        beginAtZero: false, // Ensure y-axis starts at zero
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
