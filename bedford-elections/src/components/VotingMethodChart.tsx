import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { votingBreakdowns } from '../data/electionData';

export default function VotingMethodChart() {
  const data = {
    labels: votingBreakdowns.map(v => v.election),
    datasets: [
      {
        label: 'Absentee',
        data: votingBreakdowns.map(v => (v.absentee / v.total) * 100),
        backgroundColor: 'rgba(168, 85, 247, 0.8)',
        borderRadius: 3,
      },
      {
        label: 'Early Voting',
        data: votingBreakdowns.map(v => (v.earlyVoting / v.total) * 100),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderRadius: 3,
      },
      {
        label: 'Election Day',
        data: votingBreakdowns.map(v => (v.electionDay / v.total) * 100),
        backgroundColor: 'rgba(249, 115, 22, 0.8)',
        borderRadius: 3,
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
          label: (ctx: any) => {
            const v = votingBreakdowns[ctx.dataIndex];
            const raw = ctx.dataset.label === 'Absentee' ? v.absentee
              : ctx.dataset.label === 'Early Voting' ? v.earlyVoting : v.electionDay;
            return `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)}% (${raw.toLocaleString()} votes)`;
          },
        },
      },
    },
    scales: {
      y: {
        stacked: true,
        max: 100,
        ticks: {
          color: '#9ca3af',
          callback: (v) => `${v}%`,
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
      <h3 className="section-title">Voting Method Breakdown</h3>
      <p className="text-sm text-gray-400 mb-4">
        Early voting consistently accounts for <span className="text-blue-400 font-bold">55–75%</span> of all ballots, 
        confirming that EVPA infrastructure is the dominant cost driver.
      </p>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
