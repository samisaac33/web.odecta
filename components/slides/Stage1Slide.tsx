
import React from 'react';
import { SlideProps } from '../../types';

const Stage1Slide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full min-h-full flex flex-col p-6 md:p-12 lg:p-16 slide-enter bg-indigo-50/20 overflow-y-auto">
      {/* Cabecera */}
      <div className="mb-8 md:mb-10 shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-bold rounded uppercase tracking-tighter">Etapa 01</span>
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Estrategia Inmediata</h2>
        </div>
        <h3 className="text-2xl md:text-4xl font-serif text-slate-900 leading-tight">Desarrollo Inmediato: Etapa 1</h3>
      </div>

      {/* Imagen Destacada - Casi cuadrada, ahora sin recuadros flotantes */}
      <div className="mb-10 md:mb-12">
        <div className="w-full aspect-square md:max-h-[700px] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-slate-200 relative mx-auto">
          <img 
            src="https://drive.google.com/thumbnail?id=1utqDAX16MQivtdMDt_aPgX1eWsc2fqYC&sz=w2000" 
            alt="Zonificación Bloque 1" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Grid de Información Inferior */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        
        {/* Card 1: Métricas */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-indigo-100 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-xl shadow-lg">
                <i className="fas fa-bolt text-lg"></i>
            </div>
            <h4 className="text-lg font-bold text-slate-900">1.200 m²</h4>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Recuperación inmediata de franja para reclasificación a suelo <span className="text-indigo-600 font-bold">Mixto-Múltiple (MM)</span>.
          </p>
        </div>

        {/* Card 2: Hoja de Ruta */}
        <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <i className="fas fa-list-check text-indigo-400"></i>
            <h4 className="text-[10px] font-bold uppercase tracking-widest">Hoja de Ruta Técnica</h4>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[9px] uppercase tracking-tighter font-bold text-slate-400">
            <div className="flex flex-col gap-1 border-l border-indigo-500/30 pl-3">
              <span className="text-indigo-400">P1</span>
              <span>Topografía</span>
            </div>
            <div className="flex flex-col gap-1 border-l border-indigo-500/30 pl-3">
              <span className="text-indigo-400">P2</span>
              <span>Riesgos</span>
            </div>
            <div className="flex flex-col gap-1 border-l border-indigo-500/30 pl-3">
              <span className="text-indigo-400">P3</span>
              <span>PUGS</span>
            </div>
          </div>
        </div>

        {/* Card 3: Impacto */}
        <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-xl flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
              <i className="fas fa-chart-line text-emerald-200 text-xl"></i>
              <p className="text-[10px] font-bold uppercase tracking-widest">Impacto de Valor</p>
          </div>
          <p className="text-sm font-medium leading-relaxed">
              Incorporación de área útil urbana para comercialización inmediata, maximizando liquidez desde el primer trimestre.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Stage1Slide;
