import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { budgetVsActual } from '../data/electionData';

export default function BudgetVsActualChart() {
  const variances = budgetVsActual.map(e => {
    const pct = ((e.actual - e.adoptedBudget) / e.adoptedBudget) * 100;
    return Math.round(pct);
  });

  const data = {
    labels: budgetVsActual.map(e => `FY${e.fiscalYear}`),
    datasets: [
      {
        label: 'Adopted Budget',
        data: budgetVsActual.map(e => e.adoptedBudget),
        backgroundColor: 'rgba(156, 163, 175, 0.6)',
        borderColor: 'rgb(156, 163, 175)',
        borderWidth: 1,
        borderRadius: 6,
      },
      {
        label: 'Actual Spending',
        data: budgetVsActual.map(e => e.actual),
        backgroundColor: budgetVsActual.map(e =>
          e.actual > e.adoptedBudget
            ? 'rgba(239, 68, 68, 0.7)'   // red when over budget
            : 'rgba(34, 197, 94, 0.7)'   // green when under budget
        ),
        borderColor: budgetVsActual.map(e =>
          e.actual > e.adoptedBudget
            ? 'rgb(239, 68, 68)'
            : 'rgb(34, 197, 94)'
        ),
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
            const v = variances[idx];
            const sign = v >= 0 ? '+' : '';
            return `Variance: ${sign}${v}%`;
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
      <h3 className="section-title">Budget vs. Actual Spending (G/L 101.10.12-8308)</h3>
      <p className="text-sm text-gray-400 mb-4">
        City elections budget vs. actual G/L account spending by fiscal year.
        FY2021 <span className="text-red-400 font-bold">+132%</span> and
        FY2022 <span className="text-red-400 font-bold">+199%</span> overruns
        driven by special elections.
      </p>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Note: FY actuals reflect the city's G/L account and may span multiple elections
        (e.g., FY2022 includes both May general and Aug special election costs).
      </p>
    </div>
  );
}
