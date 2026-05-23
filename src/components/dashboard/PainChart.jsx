import React from 'react';

export default function PainChart() {
  const points = [
    [40, 115], [80, 112], [120, 128], [160, 158], [200, 157],
    [240, 140], [280, 133], [320, 134], [360, 112], [400, 112],
    [440, 92], [480, 105], [520, 102], [560, 95], [600, 82],
    [640, 67], [680, 73], [720, 78], [740, 92]
  ];

  const polylinePoints = points.map(p => p.join(',')).join(' ');
  const polygonPoints = `${polylinePoints} 740,210 40,210`;

  return (
    <div className="h-56 rounded-xl overflow-hidden bg-[#091220] p-2 border border-[#1e2e4a]">
      <svg viewBox="0 0 760 230" className="w-full h-full">
        {/* Grid lines */}
        {[30, 70, 110, 150, 190].map((y) => (
          <line key={y} x1="40" y1={y} x2="740" y2={y} stroke="#1e2e48" strokeDasharray="5 5" />
        ))}
        
        {/* Area fill */}
        <polygon points={polygonPoints} fill="url(#orange-gradient)" opacity="0.3" />
        
        {/* Line */}
        <polyline points={polylinePoints} fill="none" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
        
        {/* Dots */}
        {points.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4.5" fill="#fdba74" className="hover:r-6 transition duration-200 cursor-pointer" />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="orange-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#091220" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Y Axis Labels */}
        <text x="8" y="34" fill="#8198b8" fontSize="13" fontWeight="bold">10</text>
        <text x="16" y="74" fill="#8198b8" fontSize="13" fontWeight="bold">8</text>
        <text x="16" y="114" fill="#8198b8" fontSize="13" fontWeight="bold">6</text>
        <text x="16" y="154" fill="#8198b8" fontSize="13" fontWeight="bold">4</text>
        <text x="16" y="194" fill="#8198b8" fontSize="13" fontWeight="bold">2</text>
        
        {/* X Axis Labels */}
        <text x="40" y="225" fill="#8198b8" fontSize="13" fontWeight="bold">00:00</text>
        <text x="170" y="225" fill="#8198b8" fontSize="13" fontWeight="bold">04:00</text>
        <text x="320" y="225" fill="#8198b8" fontSize="13" fontWeight="bold">08:00</text>
        <text x="455" y="225" fill="#8198b8" fontSize="13" fontWeight="bold">12:00</text>
        <text x="600" y="225" fill="#8198b8" fontSize="13" fontWeight="bold">16:00</text>
        <text x="705" y="225" fill="#8198b8" fontSize="13" fontWeight="bold">24:00</text>
      </svg>
    </div>
  );
}
