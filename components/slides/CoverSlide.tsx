
import React from 'react';
import { SlideProps } from '../../types';

const CoverSlide: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="w-full h-full relative flex flex-col justify-center items-center md:items-start p-6 md:p-24 slide-enter text-center md:text-left">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/122/1600/900" 
          alt="Urban context" 
          className="w-full h-full object-cover opacity-20 md:opacity-10 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white via-white/95 md:to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <div className="h-1 w-20 bg-indigo-600 hidden md:block" />
          <span className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-indigo-600 font-bold text-xs md:text-sm">Oportunidad de Inversión</span>
        </div>
        
        <h1 className="text-4xl md:text-8xl font-serif text-slate-900 leading-tight mb-6 md:mb-8">
          Macrolote <br className="md:hidden" /> <span className="text-indigo-600">ODECTA</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 font-light mb-10 md:mb-12 leading-relaxed">
          Desarrollo estratégico en el nuevo eje urbano de Portoviejo.
        </p>

        <button 
          onClick={onNext}
          className="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-xl"
        >
          Explorar el Proyecto
          <i className="fas fa-chevron-right text-xs" />
        </button>
      </div>

      <div className="absolute bottom-16 md:bottom-12 left-0 w-full md:w-auto md:left-24 px-6 z-10 flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-[9px] md:text-xs font-bold text-slate-400 tracking-widest uppercase">
        <span className="hidden md:inline">|</span>
        <span>PORTOVIEJO, EC</span>
      </div>
    </div>
  );
};

export default CoverSlide;
