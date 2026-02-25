import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { electionResults } from '../data/electionData';

export default function TurnoutChart() {
  const data = {
    labels: electionResults.map(r => r.label),
    datasets: [
      {
        label: 'Turnout %',
        data: electionResults.map(r => r.turnout),
        backgroundColor: electionResults.map(r =>
          r.type === 'proposition'
            ? 'rgba(16, 185, 129, 0.7)'
            : r.type === 'special'
              ? 'rgba(249, 115, 22, 0.7)'
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
          label: (ctx: any) => {
            const r = electionResults[ctx.dataIndex];
            return [
              `Turnout: ${ctx.parsed.y}%`,
              `Ballots: ${r.ballotsCast.toLocaleString()}`,
              `Registered: ${r.registeredVoters.toLocaleString()}`,
            ];
          },
        },
      },
    },
    scales: {
      y: {
        max: 80,
        ticks: {
          color: '#9ca3af',
          callback: (v) => `${v}%`,
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
      <h3 className="section-title">Voter Turnout by Election</h3>
      <p className="text-sm text-gray-400 mb-4">
        Municipal elections draw <span className="text-blue-400 font-bold">5–13%</span> turnout. 
        The 2020 bar (75%) reflects a proposition on the presidential ballot.
      </p>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
