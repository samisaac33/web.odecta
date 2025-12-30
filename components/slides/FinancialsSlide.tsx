
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SlideProps } from '../../types';

const FinancialsSlide: React.FC<SlideProps> = () => {
  const data = [
    { name: 'Actual (MM)', value: 6900 },
    { name: '+ Bloque 1', value: 8100 },
    { name: '+ Plan Parcial', value: 10000 },
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 md:p-20 slide-enter">
      <div className="mb-12">
        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Avalúo & Metricas</h2>
        <h3 className="text-4xl font-serif text-slate-900">Datos Financieros Clave</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
        <div className="space-y-6">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <i className="fas fa-dollar-sign text-8xl"></i>
            </div>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Precio Referencial</p>
            <p className="text-5xl font-serif text-slate-900">USD 1.241.000</p>
            <p className="text-indigo-600 text-sm mt-2 font-medium italic">Activo de alta liquidez y plusvalía garantizada</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Costo m² Total</p>
              <p className="text-xl font-bold text-slate-900">$85.00</p>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">UPSIDE Potencial</p>
              <p className="text-xl font-bold text-emerald-600">+66% Area Útil</p>
            </div>
          </div>

          <div className="p-6 bg-indigo-900 text-white rounded-2xl">
            <h4 className="font-bold mb-2">Análisis de Valor</h4>
            <p className="text-indigo-100 text-sm leading-relaxed">
              La adquisición temprana permite capturar la plusvalía generada por el Puente Bicentenario y el desbloqueo de suelo mediante el Plan Parcial, posicionando el costo efectivo por m² urbanizable significativamente por debajo del mercado.
            </p>
          </div>
        </div>

        <div className="h-full min-h-[400px] flex flex-col">
          <p className="text-center text-sm font-bold text-slate-400 uppercase mb-4 tracking-widest">Evolución de Suelo Urbanizable (m²)</p>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 2 ? '#4f46e5' : '#94a3b8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FinancialsSlide;
