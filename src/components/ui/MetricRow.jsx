import React from 'react';

export default function MetricRow({ icon, name, time, value, color }) {
  const colors = {
    purple: "text-purple-400 bg-purple-500/15 border-purple-500/30",
    green: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
    blue: "text-blue-400 bg-blue-500/15 border-blue-500/30",
    orange: "text-orange-400 bg-orange-500/15 border-orange-500/30",
  };

  const selectedColor = colors[color] || colors.blue;

  return (
    <div className="grid grid-cols-[auto_1fr] sm:flex sm:items-center gap-x-3 gap-y-1 border-t border-[#1d3152] py-3 first:border-t-0">
      <span className={`h-9 w-9 rounded-full flex items-center justify-center sm:mr-4 shrink-0 ${selectedColor}`}>
        {icon}
      </span>
      <span className="min-w-0 font-medium text-slate-200">{name}</span>
      <span className="text-[#a5b7d1] text-sm sm:text-base sm:ml-auto sm:mr-6 col-start-2">{time}</span>
      <span className={`rounded-xl px-3 py-1 font-semibold text-sm sm:text-base w-fit col-start-2 ${selectedColor}`}>
        {value}
      </span>
    </div>
  );
}
