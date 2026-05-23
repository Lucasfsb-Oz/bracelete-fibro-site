import React from 'react';
import { Zap, Thermometer, Activity } from 'lucide-react';
import InfoCard from '../ui/InfoCard';

export default function Features() {
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-slate-950 relative border-b border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <InfoCard 
          icon={<Zap size={24} />} 
          title="Sensores bioelétricos" 
          text="Captam sinais elétricos gerados pelos músculos, ajudando a identificar alterações sutis antes mesmo do aparecimento de espasmos e crises agudas." 
        />
        <InfoCard 
          icon={<Thermometer size={24} />} 
          title="Temperatura da pele" 
          text="Monitora de forma contínua variações térmicas locais que possam sinalizar reações inflamatórias ou estresse corporal." 
        />
        <InfoCard 
          icon={<Activity size={24} />} 
          title="Tensão muscular" 
          text="Detecta microvariações de rigidez e contração das fibras musculares ao longo do dia para prever fadiga muscular extrema." 
        />
      </div>
    </section>
  );
}
