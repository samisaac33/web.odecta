
import React from 'react';
import { SlideProps } from '../../types';

const EcotourismSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full min-h-full relative slide-enter flex flex-col overflow-y-auto">
      {/* Background Image with Deep Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://drive.google.com/thumbnail?id=1y0vzVVk4OZQylRotLP8Onue0_vMljBv_&sz=w2000" 
          alt="Natural environment" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/90 md:via-emerald-900/70 to-emerald-900/30" />
      </div>

      <div className="relative z-10 w-full p-6 md:p-24 flex flex-col pt-36 md:pt-48 pb-16 md:pb-24">
        <div className="max-w-5xl">
          {/* Tagline Decoration */}
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-1 w-12 md:w-20 bg-emerald-400" />
            <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-emerald-400 font-bold text-[10px] md:text-sm">Valor Agregado Distintivo</span>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 md:mb-8 leading-tight">
            Componente Ecoturístico: <br /> 
            <span className="text-emerald-300 italic">Integración con el Río Portoviejo</span>
          </h3>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                  <i className="fas fa-expand-alt"></i>
                </div>
                <h4 className="text-white font-bold uppercase text-[9px] md:text-xs tracking-widest opacity-70">Capacidad</h4>
              </div>
              <p className="text-white text-xl md:text-2xl font-serif">1.400 m²</p>
              <p className="text-emerald-400 text-[10px] md:text-xs mt-1">Usos compatibles PRE</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                  <i className="fas fa-bed"></i>
                </div>
                <h4 className="text-white font-bold uppercase text-[9px] md:text-xs tracking-widest opacity-70">Vocación</h4>
              </div>
              <p className="text-white text-xl md:text-2xl font-serif">Hotelería Boutique</p>
              <p className="text-emerald-400 text-[10px] md:text-xs mt-1">Cabañas & Glamping</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4 className="text-white font-bold uppercase text-[9px] md:text-xs tracking-widest opacity-70">Sostenibilidad</h4>
              </div>
              <p className="text-white text-xl md:text-2xl font-serif">Activo Verde</p>
              <p className="text-emerald-400 text-[10px] md:text-xs mt-1">Turismo de Experiencia</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-sm md:text-lg text-emerald-50/80 leading-relaxed font-light">
              Ubicado en suelo <span className="text-white font-semibold underline decoration-emerald-500/50 underline-offset-4">PRE mitigable</span>, este componente convierte el entorno natural en un activo único, fusionando naturaleza virgen con conectividad urbana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcotourismSlide;
