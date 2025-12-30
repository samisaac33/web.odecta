
import React from 'react';
import { SlideProps } from '../../types';

const ResidentialSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full min-h-full relative slide-enter flex flex-col overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" 
          alt="Modern Residential Architecture" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/90 md:via-blue-900/70 to-blue-900/30" />
      </div>

      <div className="relative z-10 w-full p-6 md:p-20 flex flex-col pt-36 md:pt-48 pb-16 md:pb-24">
        <div className="max-w-6xl w-full mx-auto">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="h-1 w-12 md:w-20 bg-blue-400" />
            <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-400 font-bold text-[10px] md:text-sm">Estrategia Residencial</span>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-3 md:mb-4 leading-tight">
            Flexibilidad: <span className="text-blue-300">4.000 m²</span>
          </h3>
          <p className="text-blue-100/70 mb-8 md:mb-10 text-sm md:text-lg max-w-2xl font-light">
            Dos alternativas para capturar la demanda insatisfecha en el sector.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6">
            {/* Alternativa A */}
            <div className="bg-white/10 backdrop-blur-xl p-5 md:p-8 rounded-2xl border border-white/20">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div>
                  <h4 className="text-blue-400 font-bold uppercase text-[9px] md:text-xs tracking-widest mb-1">Alternativa A</h4>
                  <p className="text-xl md:text-2xl font-serif text-white">Propiedad Horizontal</p>
                </div>
                <div className="bg-blue-600/30 p-2 md:p-3 rounded-lg text-blue-300">
                  <i className="fas fa-building text-base md:text-xl"></i>
                </div>
              </div>
              <ul className="space-y-3 md:space-y-4 text-slate-200 text-xs md:text-sm">
                <li className="flex gap-2 items-start">
                  <i className="fas fa-check-circle text-blue-400 mt-1"></i>
                  <span>Densidad y vivienda en altura con amenidades premium.</span>
                </li>
              </ul>
            </div>

            {/* Alternativa B */}
            <div className="bg-slate-900/40 backdrop-blur-xl p-5 md:p-8 rounded-2xl border border-white/10">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div>
                  <h4 className="text-blue-300 font-bold uppercase text-[9px] md:text-xs tracking-widest mb-1">Alternativa B</h4>
                  <p className="text-xl md:text-2xl font-serif text-white">Propiedad Individual</p>
                </div>
                <div className="bg-emerald-600/30 p-2 md:p-3 rounded-lg text-emerald-300">
                  <i className="fas fa-home text-base md:text-xl"></i>
                </div>
              </div>
              <ul className="space-y-3 md:space-y-4 text-slate-200 text-xs md:text-sm">
                <li className="flex gap-2 items-start">
                  <i className="fas fa-check-circle text-emerald-400 mt-1"></i>
                  <span>Lotes unifamiliares de alta gama y máxima exclusividad.</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-[10px] md:text-sm text-blue-200/60 italic text-center md:text-left mt-4">
            * Plusvalía garantizada por conectividad y entorno natural estratégico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidentialSlide;
