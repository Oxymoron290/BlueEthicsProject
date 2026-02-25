import { Scatter } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { electionCosts } from '../data/electionData';

export default function MultiplierChart() {
  const withMultiplier = electionCosts.filter(e => e.multiplier !== null);

  const data = {
    datasets: [
      {
        label: 'Bedford Cost vs Multiplier',
        data: withMultiplier.map(e => ({ x: e.multiplier! * 100, y: e.tarrantCounty })),
        backgroundColor: withMultiplier.map(e =>
          e.type === 'special' ? 'rgba(249, 115, 22, 0.8)' : 'rgba(59, 130, 246, 0.8)'
        ),
        borderColor: withMultiplier.map(e =>
          e.type === 'special' ? 'rgb(249, 115, 22)' : 'rgb(59, 130, 246)'
        ),
        borderWidth: 2,
        pointRadius: 8,
        pointHoverRadius: 12,
      },
    ],
  };

  const options: ChartOptions<'scatter'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) => {
            const e = withMultiplier[ctx.dataIndex];
            return [
              e.label,
              `Multiplier: ${(e.multiplier! * 100).toFixed(2)}%`,
              `Cost: $${e.tarrantCounty.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: 'Multiplier (%)', color: '#9ca3af' },
        ticks: {
          color: '#9ca3af',
          callback: (v) => `${Number(v).toFixed(1)}%`,
        },
        grid: { color: 'rgba(75, 85, 99, 0.3)' },
      },
      y: {
        title: { display: true, text: 'Bedford Cost ($)', color: '#9ca3af' },
        ticks: {
          color: '#9ca3af',
          callback: (v) => `$${Number(v).toLocaleString()}`,
        },
        grid: { color: 'rgba(75, 85, 99, 0.3)' },
      },
    },
  };

  return (
    <div className="card">
      <h3 className="section-title">The Multiplier Effect</h3>
      <p className="text-sm text-gray-400 mb-4">
        The cost-sharing multiplier varies by <span className="text-amber-400 font-bold">263×</span> (0.19% → 50%) and is the single largest cost driver.
        The Aug 2022 special election (50% multiplier, shared with only Burleson ISD) shows the extreme.
      </p>
      <div className="h-80">
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
}
