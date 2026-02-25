import { repeatCandidates } from '../data/electionData';

export default function CandidateHistory() {
  return (
    <div className="card overflow-x-auto">
      <h3 className="section-title">Repeat Candidates</h3>
      <p className="text-sm text-gray-400 mb-4">
        Several candidates have run in multiple election cycles. Bedford council seats are 3-year terms.
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400 text-left">
            <th className="py-3 px-2">Candidate</th>
            <th className="py-3 px-2">Elections</th>
            <th className="py-3 px-2">Races</th>
            <th className="py-3 px-2 text-center">Record</th>
            <th className="py-3 px-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {repeatCandidates.map((c, i) => {
            const [wins, losses] = c.record.split('–').map(Number);
            const isUndefeated = losses === 0;
            return (
              <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                <td className="py-2.5 px-2 text-gray-200 font-medium">{c.name}</td>
                <td className="py-2.5 px-2 text-gray-400 text-xs">{c.elections}</td>
                <td className="py-2.5 px-2 text-gray-400 text-xs">{c.races}</td>
                <td className="py-2.5 px-2 text-center">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${
                    isUndefeated
                      ? 'bg-emerald-900/50 text-emerald-300 ring-1 ring-emerald-700/50'
                      : wins > 0
                        ? 'bg-blue-900/50 text-blue-300 ring-1 ring-blue-700/50'
                        : 'bg-red-900/50 text-red-300 ring-1 ring-red-700/50'
                  }`}>
                    {c.record}
                  </span>
                </td>
                <td className="py-2.5 px-2 text-gray-500 text-xs">{c.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
