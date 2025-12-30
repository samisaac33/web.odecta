
import React from 'react';
import { SlideProps } from '../../types';

const Stage2Slide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full min-h-full flex flex-col md:grid md:grid-cols-12 slide-enter bg-white overflow-y-auto">
      {/* Sidebar de Estrategia - 50% en mobile, 5/12 en desktop */}
      <div className="md:col-span-5 bg-slate-950 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
        <div className="max-w-md mx-auto md:mx-0">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Estrategia Etapa 02</h2>
          <h3 className="text-3xl md:text-4xl font-serif mb-8 text-white leading-tight">El "Upside": Potencial de Expansión</h3>
          
          <div className="space-y-8">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-3xl font-serif text-indigo-300">+3.100 m²</h4>
                <div className="px-2 py-1 bg-indigo-500/20 rounded text-indigo-400 text-[9px] font-bold uppercase tracking-widest">Objetivo</div>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">Área adicional con potencial de integración urbana mediante instrumentación técnica.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-sm md:text-base">
                <i className="fas fa-file-contract text-indigo-400"></i>
                Instrumento Plan Parcial
              </h4>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                El <span className="text-white font-semibold">Plan Parcial</span> es la herramienta técnica que garantiza legalmente la ganancia de edificabilidad y el cambio de uso.
              </p>
              
              <div className="bg-indigo-900/40 p-5 rounded-2xl border border-indigo-500/30">
                <p className="text-xs italic text-indigo-200 leading-relaxed">
                  "Instrumento para el planeamiento y gestión de proyectos urbanísticos detallados en suelo urbano..." 
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] text-indigo-400 font-bold uppercase">Base Legal: Art. 34 LOOTUGS</span>
                  <i className="fas fa-balance-scale text-indigo-500/50"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel de Respaldo - 7/12 en desktop */}
      <div className="md:col-span-7 p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-center">
        <div className="max-w-2xl mx-auto md:mx-0">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <i className="fas fa-map-location-dot text-indigo-600"></i>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Respaldo Técnico: Catastro</h4>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              El informe del 01 de octubre ratifica la factibilidad de integración urbana condicionada al Plan Parcial.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="flex gap-5 items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-indigo-200 transition-colors">
                 <i className="fas fa-gavel text-slate-700 text-xl"></i>
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm md:text-base">Seguridad Jurídica Directa</h5>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Procedimiento reglado bajo normativa nacional que elimina incertidumbre.</p>
              </div>
            </div>

            <div className="flex gap-5 items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-indigo-200 transition-colors">
                 <i className="fas fa-expand-arrows-alt text-slate-700 text-xl"></i>
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm md:text-base">Escala de Proyecto Elevada</h5>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Permite desarrollos de mayor densidad, mejorando drásticamente el ROI.</p>
              </div>
            </div>

            <div className="flex gap-5 items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-indigo-200 transition-colors">
                 <i className="fas fa-city text-slate-700 text-xl"></i>
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm md:text-base">Consolidación Urbana 2026</h5>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Posiciona el activo como el centro neurálgico del nuevo eje Papagayo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage2Slide;
