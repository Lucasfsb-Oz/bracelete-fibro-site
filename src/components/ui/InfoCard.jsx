import React from 'react';

export default function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition duration-300">
      <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{text}</p>
    </div>
  );
}
