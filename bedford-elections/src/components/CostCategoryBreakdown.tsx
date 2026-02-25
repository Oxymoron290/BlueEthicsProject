import { Doughnut } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { costCategories2024 } from '../data/electionData';

export default function CostCategoryBreakdown() {
  const colors = [
    'rgba(59, 130, 246, 0.8)',   // EVPA - blue
    'rgba(16, 185, 129, 0.8)',   // EVM - emerald
    'rgba(249, 115, 22, 0.8)',   // ED - orange
    'rgba(168, 85, 247, 0.8)',   // General - purple
    'rgba(239, 68, 68, 0.8)',    // Admin - red
  ];

  const data = {
    labels: costCategories2024.map(c => c.name),
    datasets: [
      {
        data: costCategories2024.map(c => c.bedfordShare),
        backgroundColor: colors,
        borderColor: colors.map(c => c.replace('0.8', '1')),
        borderWidth: 2,
        hoverOffset: 12,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '55%',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#d1d5db',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 16,
        },
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) => {
            const cat = costCategories2024[ctx.dataIndex];
            return [
              `$${ctx.parsed.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
              `${cat.percentOfTotal}% of total`,
              `County-wide: $${cat.countyWide.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
            ];
          },
        },
      },
    },
  };

  return (
    <div className="card">
      <h3 className="section-title">2024 Cost Category Breakdown</h3>
      <p className="text-sm text-gray-400 mb-4">
        Early Voting infrastructure accounts for <span className="text-blue-400 font-bold">57%</span> of Bedford's costs.
        Personnel is the single largest line item.
      </p>
      <div className="h-72">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
