import { electionResults } from '../data/electionData';

export default function ElectionResultsTable() {
  const allRaces = electionResults.flatMap(result =>
    result.races.map(race => ({
      year: result.year,
      type: result.type,
      race: race.name,
      candidates: race.candidates,
      isContested: race.candidates.length > 1,
    }))
  );

  const contested = allRaces.filter(r => r.isContested);

  return (
    <div className="card overflow-x-auto">
      <h3 className="section-title">Contested Race Results</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400 text-left">
            <th className="py-3 px-2">Year</th>
            <th className="py-3 px-2">Race</th>
            <th className="py-3 px-2">Winner</th>
            <th className="py-3 px-2 text-right">Votes</th>
            <th className="py-3 px-2 text-right">%</th>
            <th className="py-3 px-2">Runner-up</th>
            <th className="py-3 px-2 text-right">Votes</th>
            <th className="py-3 px-2 text-right">%</th>
            <th className="py-3 px-2 text-right">Margin</th>
          </tr>
        </thead>
        <tbody>
          {contested.map((race, i) => {
            const winner = race.candidates.find(c => c.winner)!;
            const runnerUp = race.candidates.filter(c => !c.winner).sort((a, b) => b.votes - a.votes)[0];
            const margin = winner.percentage - (runnerUp?.percentage ?? 0);
            return (
              <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                <td className="py-2.5 px-2 text-gray-300 font-medium">{race.year}</td>
                <td className="py-2.5 px-2 text-gray-300">{race.race}</td>
                <td className="py-2.5 px-2 text-emerald-400 font-medium">{winner.name}</td>
                <td className="py-2.5 px-2 text-right text-gray-300">{winner.votes.toLocaleString()}</td>
                <td className="py-2.5 px-2 text-right text-gray-300">{winner.percentage.toFixed(1)}%</td>
                <td className="py-2.5 px-2 text-gray-400">{runnerUp?.name ?? '—'}</td>
                <td className="py-2.5 px-2 text-right text-gray-400">{runnerUp?.votes.toLocaleString() ?? '—'}</td>
                <td className="py-2.5 px-2 text-right text-gray-400">{runnerUp ? `${runnerUp.percentage.toFixed(1)}%` : '—'}</td>
                <td className="py-2.5 px-2 text-right">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    margin > 20 ? 'bg-emerald-900/50 text-emerald-300' :
                    margin > 10 ? 'bg-blue-900/50 text-blue-300' :
                    'bg-amber-900/50 text-amber-300'
                  }`}>
                    +{margin.toFixed(1)}%
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-3">
        {allRaces.filter(r => !r.isContested).length} additional races were unopposed (Culver 2019, Sabol 2022, Dawkins 2024).
        Races with 3+ candidates show only the top two here; see proposition tables for ballot measures.
      </p>
    </div>
  );
}
