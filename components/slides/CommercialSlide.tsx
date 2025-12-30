
import React from 'react';
import { SlideProps } from '../../types';

const CommercialSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full min-h-full relative slide-enter flex flex-col overflow-y-auto">
      {/* Background Image fixed */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop" 
          alt="Eje Comercial Moderno" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 md:via-slate-900/60 to-slate-900/30" />
      </div>

      <div className="relative z-10 w-full p-6 md:p-24 flex flex-col pt-36 md:pt-48 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-1 w-12 md:w-20 bg-amber-500" />
            <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-amber-500 font-bold text-[10px] md:text-sm">Alta Exposición Comercial</span>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 md:mb-8 leading-tight">
            Eje Comercial: <br /> 
            <span className="text-amber-400">El Nuevo Frente de Portoviejo</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-12">
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20">
              <h4 className="text-white font-bold mb-1 md:mb-3 uppercase text-[9px] md:text-xs tracking-widest opacity-70">Frente Lineal</h4>
              <p className="text-slate-200 text-xl md:text-2xl font-serif">200 metros</p>
              <p className="text-amber-400 text-[9px] md:text-xs mt-1">Vía Municipal de 15m</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20">
              <h4 className="text-white font-bold mb-1 md:mb-3 uppercase text-[9px] md:text-xs tracking-widest opacity-70">Superficie</h4>
              <p className="text-slate-200 text-xl md:text-2xl font-serif">2.400 m²</p>
              <p className="text-amber-400 text-[9px] md:text-xs mt-1">Lotes Proyectados</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20">
              <h4 className="text-white font-bold mb-1 md:mb-3 uppercase text-[9px] md:text-xs tracking-widest opacity-70">Impacto</h4>
              <p className="text-slate-200 text-xl font-serif">Alta Visibilidad</p>
              <p className="text-amber-400 text-[9px] md:text-xs mt-1">Tráfico Estratégico</p>
            </div>
          </div>

          <p className="text-sm md:text-lg text-slate-300 leading-relaxed font-light max-w-2xl">
            La nueva vía municipal transforma el predio en un <span className="text-white font-bold underline decoration-amber-500/50 underline-offset-4">frente comercial inédito</span>. Ideal para retail y servicios de alto nivel que demandan máxima visibilidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommercialSlide;
