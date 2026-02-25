interface StatCardProps {
  label: string;
  value: string;
  sublabel?: string;
  icon: string;
  color: 'blue' | 'emerald' | 'amber' | 'purple';
}

const colorMap = {
  blue: 'from-blue-600 to-blue-800 ring-blue-500/30',
  emerald: 'from-emerald-600 to-emerald-800 ring-emerald-500/30',
  amber: 'from-amber-600 to-amber-800 ring-amber-500/30',
  purple: 'from-purple-600 to-purple-800 ring-purple-500/30',
};

export default function StatCard({ label, value, sublabel, icon, color }: StatCardProps) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${colorMap[color]} p-6 ring-1 ring-inset shadow-lg`}>
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>
        {sublabel && (
          <span className="text-xs font-medium text-white/60 bg-white/10 rounded-full px-2 py-0.5">
            {sublabel}
          </span>
        )}
      </div>
      <p className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}
