import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { electionCosts, electionResults } from '../data/electionData';

export default function CostPerBallotChart() {
  const costPerBallot = electionCosts.map(cost => {
    const result = electionResults.find(r => r.label === cost.label || r.label.startsWith(cost.label.split(' ').slice(0, 2).join(' ')));
    return {
      label: cost.label,
      costPerBallot: result ? cost.grandTotal / result.ballotsCast : 0,
      costPerVoter: result ? cost.grandTotal / result.registeredVoters : 0,
      type: cost.type,
    };
  });

  const data = {
    labels: costPerBallot.map(c => c.label),
    datasets: [
      {
        label: 'Cost per Ballot',
        data: costPerBallot.map(c => c.costPerBallot),
        backgroundColor: costPerBallot.map(c =>
          c.type === 'special'
            ? 'rgba(249, 115, 22, 0.7)'
            : c.type === 'proposition'
              ? 'rgba(16, 185, 129, 0.7)'
              : 'rgba(59, 130, 246, 0.7)'
        ),
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
            `$${ctx.parsed.y.toFixed(2)} per ballot`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#9ca3af',
          callback: (v) => `$${Number(v).toFixed(0)}`,
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
      <h3 className="section-title">Cost Per Ballot Cast</h3>
      <p className="text-sm text-gray-400 mb-4">
        Special elections cost <span className="text-orange-400 font-bold">$15–$16 per ballot</span> vs <span className="text-blue-400 font-bold">$2–$7 for general elections</span>.
        The Nov 2020 proposition cost just $0.16/ballot by riding on the presidential election.
      </p>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
