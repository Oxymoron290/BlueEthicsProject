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
} from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineGraphProps {
  labels: string[];
  data: { label: string; data: number[]; borderColor: string; backgroundColor: string }[];
}

function LineGraph({ labels, data }: LineGraphProps) {
  const chartData = {
    labels,
    datasets: data,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Category Split",
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineGraph;
