import { Line } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { registeredVoterTrend } from '../data/electionData';

export default function VoterRegistrationChart() {
  const data = {
    labels: registeredVoterTrend.map(v => v.year),
    datasets: [
      {
        label: 'Registered Voters',
        data: registeredVoterTrend.map(v => v.voters),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 6,
        pointHoverRadius: 9,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) =>
            `${ctx.parsed.y.toLocaleString()} voters`,
        },
      },
    },
    scales: {
      y: {
        min: 30000,
        max: 34000,
        ticks: {
          color: '#9ca3af',
          callback: (v) => `${(Number(v) / 1000).toFixed(1)}K`,
        },
        grid: { color: 'rgba(75, 85, 99, 0.3)' },
      },
      x: {
        ticks: { color: '#9ca3af' },
        grid: { color: 'rgba(75, 85, 99, 0.15)' },
      },
    },
  };

  return (
    <div className="card">
      <h3 className="section-title">Registered Voter Trend</h3>
      <p className="text-sm text-gray-400 mb-4">
        Bedford's voter base has been stable at <span className="text-blue-400 font-bold">31,000–33,400</span> across this period.
      </p>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
