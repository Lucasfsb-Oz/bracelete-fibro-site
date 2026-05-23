import React from 'react';

export default function DashboardCard({ icon, title, value, unit, label, color }) {
  const colors = {
    purple: "text-purple-400 bg-purple-500/15 border-purple-500/30",
    green: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
    blue: "text-blue-400 bg-blue-500/15 border-blue-500/30",
    orange: "text-orange-400 bg-orange-500/15 border-orange-500/30",
    red: "text-rose-400 bg-rose-500/15 border-rose-500/30",
  };

  const selectedColor = colors[color] || colors.blue;

  return (
    <div className="rounded-2xl bg-[#08162b] border border-[#1d3152] p-4 sm:p-5 min-h-36 sm:min-h-40 overflow-hidden flex flex-col justify-between hover:border-[#3b82f6]/40 transition duration-300">
      <div className="flex items-center gap-3 text-[#c4d3ea] min-w-0">
        <span className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center shrink-0 ${selectedColor}`}>
          {icon}
        </span>
        <p className="font-semibold text-sm sm:text-base leading-snug min-w-0 truncate">{title}</p>
      </div>
      <div className="mt-3">
        <p className={`text-3xl sm:text-4xl font-bold whitespace-nowrap ${selectedColor.split(" ")[0]}`}>
          {value}
          <span className="text-base sm:text-lg text-[#c4d3ea] ml-1">{unit}</span>
        </p>
        <span className={`inline-block mt-2 rounded-xl px-3 py-0.5 text-xs sm:text-sm font-medium border ${selectedColor}`}>
          {label}
        </span>
      </div>
    </div>
  );
}
