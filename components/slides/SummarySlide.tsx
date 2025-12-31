
import React from 'react';
import { SlideProps } from '../../types';

const SummarySlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col p-6 md:p-20 slide-enter bg-slate-50 overflow-y-auto">
      <div className="mb-6 md:mb-8">
        <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1 md:mb-2">Macrolote Odecta</h2>
        <h3 className="text-2xl md:text-4xl font-serif text-slate-900">Resumen Ejecutivo</h3>
      </div>

      {/* Imagen Destacada del Proyecto */}
      <div className="mb-8 md:mb-12 w-full">
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-200">
          <img 
            src="https://drive.google.com/thumbnail?id=1rls9bpUrVQiIF8GmSdPowtUqXZqVlrH3&sz=w2000" 
            alt="Visualización Estratégica Macrolote Odecta" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 flex-grow">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="text-indigo-600 mb-4 md:mb-6"><i className="fas fa-map-marker-alt text-2xl md:text-4xl"></i></div>
          <h4 className="text-base md:text-lg font-bold mb-2 md:mb-4 text-slate-800">Ubicación Premium</h4>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">Parroquia 18 de Octubre, Sitio El Papagayo. Sobre la Avenida 5 de Junio.</p>
          <div className="mt-auto pt-4 border-t border-slate-50 italic text-slate-400 text-[10px] md:text-sm">Entorno urbano consolidado</div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="text-indigo-600 mb-4 md:mb-6"><i className="fas fa-chart-line text-2xl md:text-4xl"></i></div>
          <h4 className="text-base md:text-lg font-bold mb-2 md:mb-4 text-slate-800">Escalabilidad</h4>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">Superficie de 14.600 m² con estrategia de expansión planificada en etapas.</p>
          <div className="mt-auto pt-4 border-t border-slate-50 italic text-slate-400 text-[10px] md:text-sm">Valoración estratégica: USD 1.2M</div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="text-indigo-600 mb-4 md:mb-6"><i className="fas fa-layer-group text-2xl md:text-4xl"></i></div>
          <h4 className="text-base md:text-lg font-bold mb-2 md:mb-4 text-slate-800">Optimización</h4>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">Reclasificación de suelo PRE a MM mediante Plan Parcial estructurado.</p>
          <div className="mt-auto pt-4 border-t border-slate-50 italic text-slate-400 text-[10px] md:text-sm">Riesgo mitigado técnicamente</div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 bg-indigo-900 text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-indigo-200 text-[10px] uppercase tracking-widest font-bold mb-1">Métrica Clave</p>
          <p className="text-lg md:text-2xl font-serif">Aumento de área útil: +4.300 m²</p>
        </div>
        <div className="text-center md:text-right border-t border-indigo-800 md:border-none pt-4 md:pt-0 w-full md:w-auto">
          <p className="text-indigo-200 text-[10px]">Zonificación</p>
          <p className="text-lg md:text-xl font-bold">Mixto-Múltiple + PRE</p>
        </div>
      </div>
    </div>
  );
};

export default SummarySlide;
