import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { electionCosts } from '../data/electionData';

const typeColors: Record<string, { bg: string; border: string }> = {
  general: { bg: 'rgba(59, 130, 246, 0.7)', border: 'rgb(59, 130, 246)' },
  special: { bg: 'rgba(249, 115, 22, 0.7)', border: 'rgb(249, 115, 22)' },
  proposition: { bg: 'rgba(16, 185, 129, 0.7)', border: 'rgb(16, 185, 129)' },
};

export default function CostBarChart() {
  const data = {
    labels: electionCosts.map(e => e.label),
    datasets: [
      {
        label: 'Total Cost',
        data: electionCosts.map(e => e.grandTotal),
        backgroundColor: electionCosts.map(e => typeColors[e.type].bg),
        borderColor: electionCosts.map(e => typeColors[e.type].border),
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) =>
            `$${ctx.parsed.y.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          afterLabel: (ctx: any) => {
            const e = electionCosts[ctx.dataIndex];
            return `Type: ${e.type}${e.isEstimate ? ' (estimate)' : ''}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#9ca3af',
          callback: (v: string | number) => `$${Number(v).toLocaleString()}`,
        },
        grid: { color: 'rgba(75, 85, 99, 0.3)' },
      },
      x: {
        ticks: { color: '#9ca3af', maxRotation: 45, minRotation: 25 },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="card">
      <h3 className="section-title">Total Cost Per Election</h3>
      <div className="flex gap-4 mb-4 text-xs text-gray-400">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-blue-500 inline-block" /> General</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-orange-500 inline-block" /> Special</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-500 inline-block" /> Proposition</span>
      </div>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
