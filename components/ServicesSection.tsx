'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { 
  Building2, 
  Flame, 
  Layers, 
  Wrench, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  ShieldCheck,
  CheckCircle,
  Clock, 
  Briefcase 
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  fullDesc: string;
  icon: React.ReactNode;
  specs: string[];
  standards: string;
  deliverables: string[];
}

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectServiceForQuote }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'estructuras-metalicas',
      title: 'Fabricación y Montaje de Estructuras Metálicas',
      fullDesc: 'Construcción integral de pórticos de acero, vigas IPR, celosías de grandes luces y cubiertas autoportantes calculadas bajo normativa sísmica y de viento del Caribe. Fabricación en taller propio y montaje en obra.',
      icon: <Building2 className="w-12 h-12 text-lime-600" />,
      specs: ['Acero ASTM A36 / A572 Gr. 50', 'Conexiones empernadas A325 y soldadas', 'Pintura anticorrosiva epóxica marina'],
      standards: 'AISC 360 • AWS D1.1 • MOPC',
      deliverables: ['Planos de taller y montaje', 'Control topográfico en obra', 'Certificados de torque y verticalidad'],
    },
    {
      id: 'montaje-tuberias',
      title: 'Fabricación y Montaje de Tuberías Industriales',
      fullDesc: 'Líneas de tuberías de alta presión para cuartos de máquinas, plantas de tratamiento y sistemas termo-mecánicos. Trazado isométrico, biselado de precisión y pruebas hidrostáticas certificadas.',
      icon: <Layers className="w-12 h-12 text-lime-600" />,
      specs: ['Acero al carbono ASTM A53 / A106 Gr. B', 'Cédulas Schedule 40 y Schedule 80', 'Bridas forjadas ANSI 150 / 300'],
      standards: 'ASME B31.1 • ASME B31.3 • NFPA',
      deliverables: ['Pruebas de presión hidrostática certificadas', 'Lavado químico de líneas', 'Dossier de calidad'],
    },
    {
      id: 'barandillas-inoxidable',
      title: 'Fabricación e Instalación de Barandillas en Acero Inoxidable',
      fullDesc: 'Diseño y colocación de elementos en acero inoxidable con acabado satinado o pulido espejo. Anclajes químicos estructurales ocultos y soldaduras TIG pasivadas químicamente para máxima durabilidad marina.',
      icon: <CheckCircle className="w-12 h-12 text-lime-600" />,
      specs: ['Acero inoxidable austenítico AISI 304 y 316', 'Soldadura TIG purgada con gas argón', 'Pasivado químico de uniones'],
      standards: 'ASTM A554 • Criterios de durabilidad marina',
      deliverables: ['Acabados sin marcas de unión', 'Fijaciones de alta seguridad', 'Certificado de aleación'],
    },
    {
      id: 'soldaduras-general',
      title: 'Soldaduras en General (TIG, MIG, Electrodo)',
      fullDesc: 'Ejecución de soldadura especializada para uniones estructurales y recipientes a presión en posiciones 1G a 6G. Procedimientos WPS y PQR con verificación visual y ensayos no destructivos.',
      icon: <Flame className="w-12 h-12 text-lime-600" />,
      specs: ['Electrodos E7018 / E6010', 'Aporte inoxidable ER308L / ER316L', 'Inspección visual y tintas penetrantes'],
      standards: 'AWS D1.1 / D1.6 • ASME Sección IX',
      deliverables: ['Registros de calificación de soldadores', 'Reportes de inspección de soldadura'],
    },
    {
      id: 'mantenimiento-reparacion',
      title: 'Mantenimiento y Reparación de Instalaciones',
      fullDesc: 'Diagnóstico técnico y rehabilitación estructural en instalaciones hoteleras e industriales existentes. Refuerzo de perfiles debilitados y arenado con recubrimientos de alto rendimiento.',
      icon: <Wrench className="w-12 h-12 text-lime-600" />,
      specs: ['Sustitución de anclajes desgastados', 'Placas de refuerzo calculadas', 'Recubrimientos epóxicos marinos'],
      standards: 'SSPC-SP10 • Normas de seguridad en obra',
      deliverables: ['Informe técnico de diagnóstico y entrega', 'Mínima interrupción operativa'],
    },
    {
      id: 'trabajos-medida',
      title: 'Trabajos a Medida y Proyectos Especiales',
      fullDesc: 'Prefabricación y montaje de estructuras arquitectónicas singulares: cenadores piramidales, pérgolas, domos y geometrías personalizadas según requerimientos de diseño arquitectónico.',
      icon: <Compass className="w-12 h-12 text-lime-600" />,
      specs: ['Planos de despiece de precisión', 'Corte por plasma y conformado en frío', 'Armado modular para fácil montaje'],
      standards: 'Códigos arquitectónicos y estructurales vigentes',
      deliverables: ['Verificación dimensional previa', 'Montaje con equipo especializado'],
    },
    {
      id: 'soluciones-integrales',
      title: 'Soluciones Integrales para Industria y Construcción',
      fullDesc: 'Gestión completa de proyectos metálicos: desde el acopio de acero certificado hasta la entrega llave en mano en obra. Logística coordinada, grúas telescópicas y supervisión técnica permanente.',
      icon: <Briefcase className="w-12 h-12 text-lime-600" />,
      specs: ['Grúas de alto tonelaje para izajes seguros', 'Coordinación con obra civil', 'Control documental de calidad'],
      standards: 'Estándares internacionales de ingeniería de izaje',
      deliverables: ['Cronograma de avance físico', 'Libro de obra y dossier final'],
    },
    {
      id: 'asesoramiento-tecnico',
      title: 'Asesoramiento Técnico y Cumplimiento de Plazos',
      fullDesc: 'Evaluación técnica de planos y memorias para optimizar pesos de acero, selección de perfiles y garantía contractual de tiempos de entrega en o antes de la fecha acordada.',
      icon: <Clock className="w-12 h-12 text-lime-600" />,
      specs: ['Ingeniería de valor en acero', 'Planificación de ruta crítica de fabricación', 'Garantía por contrato de entrega'],
      standards: 'ISO 9001 / Gestión de calidad',
      deliverables: ['Presupuesto técnico desglosado', 'Plan de trabajo detallado'],
    },
  ];

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleContactClick = (serviceTitle: string) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(serviceTitle);
    }
    const contactoElem = document.getElementById('contacto');
    if (contactoElem) {
      contactoElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white w-full overflow-hidden">
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
            Capacidades Industriales • PREMOM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mt-2"
          >
            Nuestros Servicios Especializados
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Fabricación en taller propio, montaje en obra con grúas telescópicas y soldadura certificada para el sector hotelero, comercial e industrial.
          </motion.p>
        </motion.div>

        {/* Minimalist Services Grid: Big Green Icons, Expanding Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleSelectService(service)}
              id={`service-card-${service.id}`}
              className="bg-slate-50 hover:bg-slate-100 p-8 flex flex-col justify-between transition-all duration-200 cursor-pointer group text-center"
            >
              <div>
                <div className="relative flex items-center justify-center mb-6">
                  <div className="shrink-0 text-lime-700 p-3 bg-lime-50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>
                  <span className="absolute right-0 top-0 text-xs font-normal text-slate-400 group-hover:text-lime-700 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-800 transition-colors leading-snug">
                  {service.title}
                </h3>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-lime-800">
                <span>Ver especificaciones</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Call to Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-slate-100 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full"
        >
          <div className="max-w-3xl text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
              ¿Dispone de planos técnicos o catálogo de requerimientos?
            </h4>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Nuestro equipo técnico evalúa planos en DWG o PDF para presentarle un presupuesto detallado por partidas y cronograma de ejecución.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleContactClick('Cotización de Planos Técnicos')}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              id="cta-service-quote"
            >
              Solicitar Presupuesto
            </button>
            <a
              href="https://wa.me/18293802005?text=Hola%20PREMOM,%20tengo%20unos%20planos%20para%20presupuestar."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-white hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Consultar</span>
            </a>
          </div>
        </motion.div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="bg-white max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-lime-100">
                  {selectedService.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-lime-800 uppercase tracking-wider">
                    Ficha Técnica de Servicio
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Technical Specifications */}
              <div className="mt-6 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Especificaciones Técnicas y Materiales
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2 text-xs text-slate-700 bg-slate-100 p-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standards */}
              <div className="mt-4 p-3 bg-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-lime-700" />
                  <span>Normas aplicables:</span>
                </div>
                <span className="font-bold text-slate-900">
                  {selectedService.standards}
                </span>
              </div>

              {/* Deliverables */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Entregables y Control de Calidad
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-1 text-xs bg-slate-100 text-slate-800 font-medium"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-7 pt-5 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    handleContactClick(selectedService.title);
                    setSelectedService(null);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Consultar por este Servicio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
