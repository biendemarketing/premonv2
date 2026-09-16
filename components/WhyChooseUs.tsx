'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  Wrench, 
  MapPin, 
  Building2, 
  HardHat,
  Award
} from 'lucide-react';

export function WhyChooseUs() {
  const guarantees = [
    {
      icon: <Clock className="w-12 h-12 text-lime-700" />,
      title: 'Cumplimiento Riguroso de Cronogramas',
      desc: 'Planificación de ruta crítica y producción paralela en taller para garantizar la entrega en o antes de la fecha pactada.',
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-lime-700" />,
      title: 'Soldadura Calificada (AWS / ASME)',
      desc: 'Procedimientos homologados y soldadores certificados para estructuras de gran porte y líneas de fluidos a presión.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-lime-700" />,
      title: 'Tratamiento Anticorrosivo Marino',
      desc: 'Sistemas de pintura epóxica y poliuretano formulados específicamente para resistir la salinidad y humedad de la costa dominicana.',
    },
    {
      icon: <MapPin className="w-12 h-12 text-lime-700" />,
      title: 'Sede y Capacidad de Respuesta en Bávaro',
      desc: 'Taller propio y equipo humano localizado estratégicamente en Punta Cana para atención inmediata y soporte técnico continuo.',
    },
    {
      icon: <Building2 className="w-12 h-12 text-lime-700" />,
      title: 'Acopio y Certificación de Acero',
      desc: 'Todos nuestros perfiles y láminas de acero cuentan con certificados de colada y origen que respaldan su resistencia mecánica.',
    },
    {
      icon: <HardHat className="w-12 h-12 text-lime-700" />,
      title: 'Seguridad Ocupacional y Cuadrillas Propias',
      desc: 'Personal asegurado bajo la legislación dominicana (TSS) y entrenado en protocolos de trabajo en altura y maniobras de izaje.',
    },
  ];

  return (
    <section id="garantia" className="py-20 lg:py-28 bg-slate-50 w-full overflow-hidden">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header with Font Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-wider text-lime-800"
          >
            Diferenciales Técnicos • PREMOM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mt-2"
          >
            Por Qué Contratistas y Hoteles Confían en PREMOM
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            No improvisamos. Nuestra combinación de taller propio, soldadores homologados y estricto control de calidad nos convierte en el socio estratégico para proyectos de construcción de alto nivel.
          </motion.p>
        </motion.div>

        {/* 6 Guarantees Grid - Sharp corners expanding across full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full">
          {guarantees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 bg-white flex flex-col items-center text-center hover:bg-slate-100 transition-colors"
            >
              <div className="w-full flex flex-col items-center">
                <div className="mb-6 text-lime-700 flex justify-center items-center">
                  <div className="p-3.5 bg-lime-50 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

