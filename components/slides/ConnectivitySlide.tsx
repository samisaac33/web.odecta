
import React from 'react';
import { SlideProps } from '../../types';

const ConnectivitySlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full min-h-full flex flex-col slide-enter bg-white overflow-y-auto p-8 md:p-16 lg:p-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Cabecera Estratégica */}
        <div className="mb-10">
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Conectividad & Plusvalía</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight">El Impacto del Puente Bicentenario</h3>
        </div>

        {/* Imagen del Plano - Formato cuadrado para máximo detalle */}
        <div className="mb-12 md:mb-16">
          <div className="w-full aspect-square md:max-h-[800px] relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-[10px] border-white ring-1 ring-slate-200 bg-slate-100">
            <img 
              src="https://drive.google.com/thumbnail?id=14cx-lHcu9hcufnTvjZcxzN1METpVlfPx&sz=w2000" 
              alt="Mapa de conectividad y nuevo eje vial" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Sección de Datos Técnicos - Reconfigurada para enfoque puramente comercial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 shadow-sm border border-indigo-100">
                <i className="fas fa-road text-indigo-600 text-lg"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Nueva Vía de 15 metros</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Vía pública municipal proyectada que atraviesa el predio, integrándolo al sistema vial estructurante de la ciudad y garantizando accesibilidad total.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 shadow-sm border border-indigo-100">
                <i className="fas fa-location-crosshairs text-indigo-600 text-lg"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Epicentro de Plusvalía: El Nodo Bicentenario</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Consolidación de un corredor comercial de alta densidad que captura el flujo masivo generado por el Puente Bicentenario, maximizando el valor del suelo por m².</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nota Técnica al Pie */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            <i className="fas fa-info-circle text-indigo-500"></i>
            Habilitación vial sujeta a planificación municipal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectivitySlide;
