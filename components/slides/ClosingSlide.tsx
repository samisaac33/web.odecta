
import React, { useState } from 'react';
import { SlideProps } from '../../types';

const ClosingSlide: React.FC<SlideProps> = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombres: '',
    correo: '',
    celular: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    console.log('Datos de contacto:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center p-8 md:p-24 slide-enter bg-slate-900 text-white text-center overflow-y-auto">
      <div className="max-w-4xl py-20 w-full">
        {!showForm ? (
          <>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mb-10"></div>
            
            <h2 className="text-4xl md:text-7xl font-serif mb-8 italic leading-tight">
              El futuro de Portoviejo <br /> se construye en <span className="text-indigo-400 not-italic">ODECTA</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 md:mb-16 font-light leading-relaxed max-w-2xl mx-auto">
              Un activo estratégico, una ruta técnica clara y una rentabilidad excepcional. 
              Estamos listos para el siguiente paso.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setShowForm(true)}
                className="w-full md:w-auto px-10 py-5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-[0_20px_40px_rgba(79,70,229,0.3)] flex items-center justify-center gap-3 group"
              >
                Agendar Reunión de Inversión
                <i className="fas fa-calendar-alt text-xs group-hover:scale-110 transition-transform"></i>
              </button>
            </div>
          </>
        ) : submitted ? (
          <div className="bg-slate-800/40 border border-indigo-500/30 p-10 md:p-16 rounded-[2.5rem] backdrop-blur-xl animate-pulse">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4">¡Solicitud Enviada!</h3>
            <p className="text-slate-400 text-lg mb-8">Un Director de Inversiones se pondrá en contacto con usted en las próximas 24 horas.</p>
            <button 
              onClick={() => { setShowForm(false); setSubmitted(false); }}
              className="text-indigo-400 font-bold uppercase tracking-widest text-xs hover:text-indigo-300 transition-colors"
            >
              Volver al Cierre
            </button>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-slate-800/50 border border-slate-700 p-8 md:p-10 rounded-[2rem] shadow-2xl backdrop-blur-md text-left">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-white">Datos de Contacto</h3>
              <button onClick={() => setShowForm(false)} className="text-slate-500 hover:text-white transition-colors">
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Nombres</label>
                <input 
                  required
                  type="text" 
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Correo Electrónico</label>
                <input 
                  required
                  type="email" 
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="juan@inversionista.com"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Celular</label>
                <input 
                  required
                  type="tel" 
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  placeholder="+593 99 999 9999"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 mt-4 flex items-center justify-center gap-3"
              >
                Enviar Solicitud
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </form>
          </div>
        )}

        {/* Pie de página */}
        <div className="mt-32 flex flex-col items-center opacity-40">
           <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-white"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Macrolote Odecta</span>
              <div className="h-[1px] w-8 bg-white"></div>
           </div>
           <p className="text-[10px] text-slate-500 uppercase tracking-widest">Estrategia Inmobiliaria & Desarrollo Urbano</p>
        </div>
      </div>
    </div>
  );
};

export default ClosingSlide;
