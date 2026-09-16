'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Wrench, 
  ShieldCheck, 
  Truck 
} from 'lucide-react';

export function WorkProcess() {
  const steps = [
    {
      num: '01',
      title: 'Levantamiento & Modelado',
      desc: 'Visita técnica y levantamiento de cotas en obra. Elaboración de planos de taller y despiece milimétrico para evitar desajustes en el montaje.',
      icon: <Compass className="w-12 h-12 text-lime-700 shrink-0" />,
      badges: ['Levantamiento en Obra', 'Planos de Taller', 'Ingeniería de Detalle'],
    },
    {
      num: '02',
      title: 'Prefabricación en Taller',
      desc: 'Corte, biselado de precisión, conformado y soldadura en taller bajo condiciones controladas. Aplicación de imprimaciones y esquemas anticorrosivos marinos.',
      icon: <Wrench className="w-12 h-12 text-lime-700 shrink-0" />,
      badges: ['Corte de Precisión', 'Soldadura en Taller', 'Pintura Epóxica'],
    },
    {
      num: '03',
      title: 'Control de Calidad (QA/QC)',
      desc: 'Inspección de soldaduras por personal calificado AWS, verificación dimensional, pruebas de presión hidrostática en tuberías y control de espesores.',
      icon: <ShieldCheck className="w-12 h-12 text-lime-700 shrink-0" />,
      badges: ['Normas AWS / ASME', 'Pruebas Hidrostáticas', 'Dossier de Calidad'],
    },
    {
      num: '04',
      title: 'Transporte e Izaje en Obra',
      desc: 'Logística de traslado y maniobras de izaje con grúas de alto tonelaje. Cuadrillas especializadas con equipos de protección y estricta seguridad ocupacional.',
      icon: <Truck className="w-12 h-12 text-lime-700 shrink-0" />,
      badges: ['Grúas Telescópicas', 'Seguridad en Altura', 'Entrega a Tiempo'],
    },
  ];

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-white w-full overflow-hidden">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header with Font Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-wider text-lime-800"
          >
            Metodología de Trabajo • PREMOM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mt-2"
          >
            Proceso de Ejecución de Principio a Fin
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Un flujo de trabajo estandarizado que minimiza los tiempos de obra, asegura la solidez estructural y garantiza el cumplimiento estricto de las fechas de entrega.
          </motion.p>
        </motion.div>

        {/* Steps in Column Layout with Sequential Entrance Animations */}
        <div className="flex flex-col space-y-6 md:space-y-8 w-full max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 sm:p-10 bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="flex items-start gap-6 flex-1">
                {/* Large Icon directly without any background container */}
                <div className="shrink-0 pt-1">
                  {step.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl font-normal text-lime-700">
                      {step.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-slate-900 leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                    {step.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-3 py-1 text-xs font-semibold bg-white text-slate-700"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

