import { propositions2024 } from '../data/electionData';

export default function PropositionsTable() {
  return (
    <div className="card">
      <h3 className="section-title">2024 Charter Amendment Propositions</h3>
      <p className="text-sm text-gray-400 mb-4">
        All seven charter amendments passed. These drove the $6,236 Star-Telegram cost (multilingual legal notices).
      </p>
      <div className="space-y-3">
        {propositions2024.map(prop => {
          const yesWidth = prop.yesPercent;
          return (
            <div key={prop.id} className="group">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">{prop.id}</span>
                <span className="text-xs text-gray-400">
                  {prop.yes.toLocaleString()} Yes / {prop.no.toLocaleString()} No
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden flex">
                <div
                  className="bg-emerald-600 h-full flex items-center justify-end pr-2 transition-all duration-500"
                  style={{ width: `${yesWidth}%` }}
                >
                  <span className="text-xs font-bold text-white">{prop.yesPercent}%</span>
                </div>
                <div
                  className="bg-red-600/70 h-full flex items-center justify-start pl-2"
                  style={{ width: `${100 - yesWidth}%` }}
                >
                  {prop.noPercent > 15 && (
                    <span className="text-xs font-bold text-white">{prop.noPercent}%</span>
                  )}
                </div>
              </div>
              {prop.id === 'Prop D' && (
                <p className="text-xs text-amber-400 mt-1">⚠ Narrowest margin — 55.4% approval</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">2020 Alcohol Sales Proposition</h4>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-400">Prop A: Legal Alcohol Sales</span>
          <span className="text-xs text-gray-400">19,403 For / 4,708 Against</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden flex">
          <div className="bg-emerald-600 h-full flex items-center justify-end pr-2" style={{ width: '80.5%' }}>
            <span className="text-xs font-bold text-white">80.5%</span>
          </div>
          <div className="bg-red-600/70 h-full flex items-center justify-start pl-2" style={{ width: '19.5%' }}>
            <span className="text-xs font-bold text-white">19.5%</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">75% turnout (on presidential election ballot) • 24,111 ballots cast</p>
      </div>
    </div>
  );
}
