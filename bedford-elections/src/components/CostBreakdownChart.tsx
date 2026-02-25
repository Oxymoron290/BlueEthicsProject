import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { electionCosts } from '../data/electionData';

export default function CostBreakdownChart() {
  const data = {
    labels: electionCosts.map(e => e.label),
    datasets: [
      {
        label: 'Tarrant County',
        data: electionCosts.map(e => e.tarrantCounty),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderRadius: 4,
      },
      {
        label: 'Star-Telegram',
        data: electionCosts.map(e => e.starTelegram),
        backgroundColor: 'rgba(168, 85, 247, 0.8)',
        borderRadius: 4,
      },
      {
        label: 'Translation',
        data: electionCosts.map(e => e.translation),
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderRadius: 4,
      },
      {
        label: 'Petition',
        data: electionCosts.map(e => e.petition),
        backgroundColor: 'rgba(249, 115, 22, 0.8)',
        borderRadius: 4,
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
          label: (ctx: any) =>
            `${ctx.dataset.label}: $${ctx.parsed.y.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
        },
      },
    },
    scales: {
      y: {
        stacked: true,
        ticks: {
          color: '#9ca3af',
          callback: (v) => `$${Number(v).toLocaleString()}`,
        },
        grid: { color: 'rgba(75, 85, 99, 0.3)' },
      },
      x: {
        stacked: true,
        ticks: { color: '#9ca3af', maxRotation: 45, minRotation: 25 },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="card">
      <h3 className="section-title">Cost Breakdown by Source</h3>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
