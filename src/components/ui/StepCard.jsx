import React from 'react';

export default function StepCard({ number, title, text }) {
  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex gap-5 hover:bg-white/10 transition duration-300">
      <div className="text-cyan-300 font-bold text-xl">{number}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
