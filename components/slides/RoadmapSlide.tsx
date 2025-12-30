
import React from 'react';
import { SlideProps } from '../../types';

const RoadmapSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col p-12 md:p-20 slide-enter">
      <div className="mb-16">
        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Modelo de Gestión</h2>
        <h3 className="text-4xl font-serif text-slate-900">Roadmap Estratégico</h3>
      </div>

      <div className="relative flex-grow">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-slate-900">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-6">01</div>
            <h4 className="font-bold text-lg mb-2">Adquisición & Cierre</h4>
            <p className="text-slate-500 text-sm">Transferencia de dominio y formalización del activo estratégico.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-indigo-600">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mb-6">02</div>
            <h4 className="font-bold text-lg mb-2">Fase A: Inmediata</h4>
            <p className="text-slate-500 text-sm">Trámite Bloque 1 (Riesgos). Inicio de habilitación en zona consolidada (MM).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-indigo-400">
            <div className="w-12 h-12 bg-indigo-400 text-white rounded-full flex items-center justify-center font-bold mb-6">03</div>
            <h4 className="font-bold text-lg mb-2">Fase B: Plan Parcial</h4>
            <p className="text-slate-500 text-sm">Elaboración y aprobación del Plan Parcial para integración del Bloque 2.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-emerald-500">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold mb-6"><i className="fas fa-flag-checkered"></i></div>
            <h4 className="font-bold text-lg mb-2">Consolidación Total</h4>
            <p className="text-slate-500 text-sm">Ejecución del masterplan integral (Urbano + Ecoturístico).</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-slate-50 rounded-lg text-center">
          <p className="text-xs text-slate-400 font-bold uppercase mb-1">Status</p>
          <p className="text-slate-900 font-bold">Viabilidad Técnica Comprobada</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg text-center">
          <p className="text-xs text-slate-400 font-bold uppercase mb-1">Riesgo</p>
          <p className="text-indigo-600 font-bold">Mapeado y Mitigado</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg text-center">
          <p className="text-xs text-slate-400 font-bold uppercase mb-1">Potencial</p>
          <p className="text-emerald-600 font-bold">Máxima Edificabilidad</p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSlide;
