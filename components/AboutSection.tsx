'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Wrench,
  ArrowRight
} from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      title: 'Precisión y Calidad',
      description: 'Rigor técnico milimétrico en cada despiece en taller propio, soldadura certificada AWS/ASME y recubrimientos epóxicos marinos de alta durabilidad.',
      icon: <Award className="w-12 h-12 text-lime-700" />,
    },
    {
      title: 'Cumplimiento Contractual',
      description: 'Garantía formal de plazos de entrega y cronograma de montaje, coordinando la logística sin interferir con la operación del cliente.',
      icon: <Clock className="w-12 h-12 text-lime-700" />,
    },
    {
      title: 'Seguridad en Altura e Izajes',
      description: 'Protocolos rigurosos de seguridad ocupacional en maniobras de alto tonelaje con grúas telescópicas y montaje en obra.',
      icon: <ShieldCheck className="w-12 h-12 text-lime-700" />,
    },
    {
      title: 'Integridad y Transparencia',
      description: 'Presupuestos desglosados por partidas, trazabilidad de aceros estructurales y asesoría técnica honesta de principio a fin.',
      icon: <CheckCircle2 className="w-12 h-12 text-lime-700" />,
    },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white w-full overflow-hidden">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header with Font Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-wider text-lime-800"
          >
            Identidad Corporativa • PREMOM SRL
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mt-2"
          >
            Nosotros
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Especialistas en ingeniería, fabricación y montaje de estructuras metálicas, sistemas de tuberías industriales y soldadura calificada en Punta Cana y toda la República Dominicana.
          </motion.p>
        </motion.div>

        {/* Corporate Overview Grid: Image + Description with Framer Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] w-full bg-slate-100 overflow-hidden"
          >
            <Image
              src="/projects/project-welding-shop.webp"
              alt="Taller de prefabricación de acero PREMOM SRL"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Ingeniería Metalmecánica de Alto Rendimiento para el Sector Hotelero e Industrial
            </h3>
            
            <p className="text-base text-slate-700 leading-relaxed">
              En <strong>PREMOM SRL</strong> combinamos experiencia de campo, capacidad instalada en taller propio y tecnología de montaje para materializar proyectos estructurales de cualquier envergadura en la República Dominicana.
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              Nuestra ubicación estratégica en la zona de Punta Cana – Bávaro nos permite responder con agilidad a las demandas constructivas de complejos turísticos, cadenas hoteleras, naves logísticas y plantas agroindustriales, garantizando estructuras calculadas para resistir los vientos ciclónicos y la salinidad del entorno caribeño.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="py-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                  <Building2 className="w-5 h-5 text-lime-600 shrink-0" />
                  <span>Taller Propio</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Corte, armado y soldadura con trazabilidad.</p>
              </div>

              <div className="py-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                  <Wrench className="w-5 h-5 text-lime-600 shrink-0" />
                  <span>Montaje en Obra</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Flota de grúas y personal calificado en altura.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Misión y Visión - 2 Large Contrast Cards with Entrance Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Misión */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-10 lg:p-12 bg-slate-50 flex flex-col justify-between"
          >
            <div>
              <Target className="w-12 h-12 text-lime-700 mb-6" />
              <span className="text-xs font-bold uppercase tracking-wider text-lime-800">
                Propósito Fundamental
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-4">
                Nuestra Misión
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Diseñar, prefabricar y montar estructuras metálicas, sistemas de tuberías industriales y soldadura certificada con los más rigurosos estándares de seguridad, durabilidad y precisión técnica. Nos dedicamos a brindar soluciones metalmecánicas integrales que optimicen tiempos de obra y presupuestos para inversionistas, contratistas generales y operadores hoteleros en toda la República Dominicana.
              </p>
            </div>
            <div className="mt-8 pt-4 text-xs sm:text-sm font-semibold text-slate-600">
              ✓ Normativas AISC, ASME B31, AWS D1.1 y reglamentos locales MOPC
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-10 lg:p-12 bg-slate-900 text-white flex flex-col justify-between"
          >
            <div>
              <Eye className="w-12 h-12 text-lime-400 mb-6" />
              <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                Hacia Dónde Vamos
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
                Nuestra Visión
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Ser reconocidos como la empresa de referencia y el aliado estratégico preferido en ingeniería de estructuras metálicas, redes de piping y montaje industrial en el Caribe. Destacar continuamente por nuestra capacidad de respuesta inmediata, tecnología en taller propio, cultura de cero accidentes y excelencia inquebrantable en cada unión soldada.
              </p>
            </div>
            <div className="mt-8 pt-4 text-xs sm:text-sm font-semibold text-slate-400">
              ✓ Liderazgo tecnológico y expansión constante en el sector turismo e industria
            </div>
          </motion.div>

        </div>

        {/* Valores Corporativos - 4 Grid Columns */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-lime-800">
              Principios que nos guían
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Nuestros Valores
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 p-6 sm:p-8 flex flex-col justify-between transition-colors hover:bg-slate-100"
              >
                <div>
                  <div className="mb-5">
                    {v.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dedicated Page Link CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Conocer más sobre PREMOM</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

