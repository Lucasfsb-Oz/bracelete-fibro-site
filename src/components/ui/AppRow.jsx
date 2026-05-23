import React from 'react';

export default function AppRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 border border-white/5 hover:border-white/10 transition duration-200">
      <span className="text-slate-400 text-sm font-medium">{label}</span>
      <span className="font-semibold text-cyan-300">{value}</span>
    </div>
  );
}
