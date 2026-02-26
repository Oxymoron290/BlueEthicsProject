import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register all Chart.js components once
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Set global defaults for dark theme
ChartJS.defaults.color = '#9ca3af';
ChartJS.defaults.borderColor = 'rgba(75, 85, 99, 0.3)';

import StatCard from '../components/StatCard';
import CostBarChart from '../components/CostBarChart';
import CostBreakdownChart from '../components/CostBreakdownChart';
import MultiplierChart from '../components/MultiplierChart';
import EstimateVsActualChart from '../components/EstimateVsActualChart';
import BudgetVsActualChart from '../components/BudgetVsActualChart';
import CostPerBallotChart from '../components/CostPerBallotChart';
import TurnoutChart from '../components/TurnoutChart';
import VotingMethodChart from '../components/VotingMethodChart';
import VoterRegistrationChart from '../components/VoterRegistrationChart';
import CostCategoryBreakdown from '../components/CostCategoryBreakdown';
import ElectionResultsTable from '../components/ElectionResultsTable';
import PropositionsTable from '../components/PropositionsTable';
import CandidateHistory from '../components/CandidateHistory';
import DataGapsCard from '../components/DataGapsCard';

import {
  grandTotal,
  totalElections,
  avgCostPerElection,
  avgMunicipalTurnout,
} from '../data/electionData';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero KPIs */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon="💰"
            label="Total Documented Spending"
            value={`$${Math.round(grandTotal).toLocaleString()}`}
            sublabel="2019–2025"
            color="blue"
          />
          <StatCard
            icon="🗳️"
            label="Elections Analyzed"
            value={totalElections.toString()}
            sublabel="5 general, 3 special"
            color="emerald"
          />
          <StatCard
            icon="📊"
            label="Average Cost / Election"
            value={`$${Math.round(avgCostPerElection).toLocaleString()}`}
            color="amber"
          />
          <StatCard
            icon="📈"
            label="Avg Municipal Turnout"
            value={`${avgMunicipalTurnout.toFixed(1)}%`}
            sublabel="excl. 2020 presidential"
            color="purple"
          />
        </div>
      </section>

      {/* Key Insight Banner */}
      <section className="rounded-2xl bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-700/30 p-6">
        <h2 className="text-lg font-bold text-amber-300 mb-2">🔑 Key Finding</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          The cost-sharing <strong className="text-white">multiplier</strong> varies by <strong className="text-amber-400">263×</strong> (0.19% → 50%)
          and is the single largest cost driver — more important than election type, number of races, or turnout.
          The Aug 2022 special election cost <strong className="text-orange-400">$24,674</strong> at a 50% multiplier (2 entities),
          while the Nov 2020 proposition cost just <strong className="text-emerald-400">$80</strong> on the presidential ballot —
          a <strong className="text-white">308× cost difference</strong> for single-issue elections.
        </p>
      </section>

      {/* Cost Charts */}
      <section>
        <h2 className="text-xl font-bold text-gray-300 mb-4 flex items-center gap-2">
          <span className="text-2xl">💵</span> Election Costs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CostBarChart />
          <CostBreakdownChart />
        </div>
      </section>

      {/* Analysis Charts */}
      <section>
        <h2 className="text-xl font-bold text-gray-300 mb-4 flex items-center gap-2">
          <span className="text-2xl">🔍</span> Cost Analysis
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MultiplierChart />
          <EstimateVsActualChart />
        </div>
        <div className="mt-6">
          <BudgetVsActualChart />
        </div>
      </section>

      {/* Efficiency & Turnout */}
      <section>
        <h2 className="text-xl font-bold text-gray-300 mb-4 flex items-center gap-2">
          <span className="text-2xl">📊</span> Efficiency & Turnout
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CostPerBallotChart />
          <TurnoutChart />
        </div>
      </section>

      {/* Voting Patterns */}
      <section>
        <h2 className="text-xl font-bold text-gray-300 mb-4 flex items-center gap-2">
          <span className="text-2xl">🗳️</span> Voting Patterns
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VotingMethodChart />
          <div className="space-y-6">
            <VoterRegistrationChart />
            <CostCategoryBreakdown />
          </div>
        </div>
      </section>

      {/* Election Results */}
      <section>
        <h2 className="text-xl font-bold text-gray-300 mb-4 flex items-center gap-2">
          <span className="text-2xl">🏆</span> Election Results
        </h2>
        <div className="space-y-6">
          <ElectionResultsTable />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PropositionsTable />
            <CandidateHistory />
          </div>
        </div>
      </section>

      {/* Data Quality */}
      <section>
        <DataGapsCard />
      </section>

      {/* Recommendations */}
      <section className="card border-blue-800/50">
        <h3 className="section-title">
          <span className="text-blue-400">💡</span> Recommendations
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: '🚫', title: 'Avoid Standalone Specials', desc: 'Consolidating with scheduled elections saves $24,000+ per event ($80 vs $24,674).' },
            { icon: '📈', title: 'Budget 35% Above Estimates', desc: 'Tarrant County estimates consistently run 16–34% below actual costs.' },
            { icon: '👥', title: 'Monitor Entity Count', desc: "The number of entities in joint elections directly predicts Bedford's cost share." },
            { icon: '💸', title: 'Negotiate Admin Fee', desc: 'The flat 10% surcharge has added ~$2,600 across documented elections.' },
            { icon: '🏫', title: 'Clarify HEB ISD Splits', desc: 'Communiqués reference cost-sharing with HEB ISD but no documentation was provided.' },
          ].map((rec, i) => (
            <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/50 p-4">
              <div className="text-2xl mb-2">{rec.icon}</div>
              <h4 className="text-sm font-semibold text-gray-200 mb-1">{rec.title}</h4>
              <p className="text-xs text-gray-400">{rec.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
