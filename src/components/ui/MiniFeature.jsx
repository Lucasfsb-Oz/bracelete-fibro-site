import React from 'react';

export default function MiniFeature({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition duration-300">
      <div className="text-cyan-300 mb-3">{icon}</div>
      <h3 className="font-bold mb-2 text-slate-100">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
    </div>
  );
}
