
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SlideProps } from '../../types';

const ZoningSlide: React.FC<SlideProps> = () => {
  const data = [
    { name: 'Suelo Mixto-Múltiple (MM)', value: 6900, color: '#4f46e5' },
    { name: 'Protección Ecológica (PRE)', value: 7700, color: '#10b981' },
  ];

  return (
    <div className="w-full min-h-full flex flex-col p-8 md:p-20 slide-enter overflow-y-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
        <div>
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Masterplan Actual</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900">Zonificación y Usos</h3>
        </div>
        <div className="text-right">
          <p className="text-2xl md:text-3xl font-bold text-slate-900">14.600 m²</p>
          <p className="text-slate-400 text-[10px] md:text-sm uppercase font-bold tracking-widest">Superficie Total</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 flex-grow items-center">
        <div className="h-[300px] md:h-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="border-l-4 border-indigo-600 pl-6">
            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Suelo Mixto-Múltiple (MM) 47%</h4>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Base de monetización inmediata. Permite el inicio del desarrollo urbano y generación de flujo de caja mediante usos comerciales y residenciales densos.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-6">
            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Suelo Protección Ecológica (PRE) 53%</h4>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Potencial de plusvalía a largo plazo. Mediante Plan Parcial, permite la recuperación de área útil y la captura del valor generado por la nueva infraestructura vial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoningSlide;
