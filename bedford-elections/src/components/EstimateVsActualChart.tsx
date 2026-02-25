import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { estimateVsActual } from '../data/electionData';

export default function EstimateVsActualChart() {
  const data = {
    labels: estimateVsActual.map(e => e.election),
    datasets: [
      {
        label: 'Estimated',
        data: estimateVsActual.map(e => e.estimated),
        backgroundColor: 'rgba(156, 163, 175, 0.6)',
        borderColor: 'rgb(156, 163, 175)',
        borderWidth: 1,
        borderRadius: 6,
      },
      {
        label: 'Actual',
        data: estimateVsActual.map(e => e.actual),
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#d1d5db', usePointStyle: true, pointStyle: 'rectRounded' },
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          afterBody: (ctx: any) => {
            const idx = ctx[0].dataIndex;
            return `Variance: +${estimateVsActual[idx].variance}%`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#9ca3af',
          callback: (v) => `$${Number(v).toLocaleString()}`,
        },
        grid: { color: 'rgba(75, 85, 99, 0.3)' },
      },
      x: {
        ticks: { color: '#9ca3af' },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="card">
      <h3 className="section-title">Estimate vs. Actual Costs</h3>
      <p className="text-sm text-gray-400 mb-4">
        Tarrant County estimates consistently run <span className="text-red-400 font-bold">16–34% below actual costs</span>. 
        Budget at least 35% above the estimate.
      </p>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
