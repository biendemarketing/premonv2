'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: 'hotelero' | 'industrial' | 'comercial' | 'inoxidable';
  categoryLabel: string;
  location: string;
  steelWeight: string;
  date: string;
  timeline?: string;
  description: string;
  highlights: string[];
  imageUrl: string;
}

export function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'marquesina-acero-andamios',
      title: 'Estructura y Marquesina de Acero con Andamiaje de Montaje',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Bávaro – Punta Cana, R.D.',
      steelWeight: '120 Toneladas',
      date: '2024',
      description: 'Fabricación y montaje de pórticos para marquesina de acero estructural con sistema de andamiaje y verificación milimétrica de alineación en obra.',
      highlights: [
        'Montaje de pórticos principales con fijaciones empernadas de alta resistencia',
        'Control topográfico y plomada estructural durante todo el izaje',
        'Esquema de protección anticorrosiva para ambiente húmedo',
      ],
      imageUrl: '/slider/projet-1.webp',
    },
    {
      id: 'resort-parque-acuatico',
      title: 'Estructuras Metálicas para Resort Hotelero y Parque Acuático',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Punta Cana, R.D.',
      steelWeight: '85 Toneladas',
      date: '2024',
      description: 'Montaje de perfiles y soportes de acero para parque acuático en complejo hotelero frente al mar, empleando plataformas elevadoras y soldaduras con tratamiento marino.',
      highlights: [
        'Estructuras resistentes a la corrosión en primera línea de costa',
        'Montaje coordinado en altura con plataformas articuladas',
        'Cálculo estructural para soportar cargas de viento ciclónico',
      ],
      imageUrl: '/slider/projet-2.webp',
    },
    {
      id: 'superestructura-multinivel-losa',
      title: 'Superestructura Metálica Multinivel con Losa de Concreto',
      category: 'comercial',
      categoryLabel: 'Sector Comercial',
      location: 'Cap Cana, R.D.',
      steelWeight: '140 Toneladas',
      date: '2023',
      description: 'Pórticos de acero de alta resistencia y vigas principales para edificación multinivel, con losa de entrepiso y arriostramientos estructurales calculados contra sismos y vientos.',
      highlights: [
        'Vigas maestras de alma llena y vigas secundarias electrosoldadas',
        'Integración con losa de entrepiso de concreto vaciado',
        'Inspección de uniones y control de torque en pernos estructurales',
      ],
      imageUrl: '/slider/projet-3.webp',
    },
    {
      id: 'estructuras-metalicas-costeras',
      title: 'Estructuras Metálicas y Cubiertas en Entorno Costero',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Verón – Punta Cana, R.D.',
      steelWeight: '110 Toneladas',
      date: '2023',
      description: 'Instalación de naves y cubiertas de acero estructural con recubrimiento anticorrosivo marino negro para área de servicio y logística de complejo resort.',
      highlights: [
        'Pórticos rígidos de gran luz para almacenamiento y mantenimiento',
        'Acabado negro mate de alta resistencia a los rayos UV y salitre',
        'Maniobras de montaje respetando el entorno natural y palmeras',
      ],
      imageUrl: '/slider/projet-4.webp',
    },
    {
      id: 'montaje-grua-frente-mar',
      title: 'Montaje con Grúa Telescópica de Estructura de Acero Frente al Mar',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Bávaro, R.D.',
      steelWeight: '160 Toneladas',
      date: '2024',
      description: 'Maniobras de izaje y acople de elementos estructurales de gran luz mediante grúa telescópica de alto tonelaje para complejo hotelero en primera línea de costa.',
      highlights: [
        'Plan de izaje certificado con grúa de alta capacidad',
        'Ensamble de vigas principales en altura con soldadura homologada',
        'Cumplimiento riguroso de protocolos de seguridad en obra',
      ],
      imageUrl: '/slider/projet-5.webp',
    },
    {
      id: 'estructura-piramidal-cenador',
      title: 'Estructura Metálica Piramidal y Cenador para Complejo Turístico',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Cap Cana, R.D.',
      steelWeight: '50 Toneladas',
      date: '2023',
      description: 'Fabricación y ensamblaje de gran estructura metálica piramidal de acero sobre áreas circulares revestidas de piedra en desarrollo turístico.',
      highlights: [
        'Geometría piramidal de precisión milimétrica prearmada en taller',
        'Tratamiento anticorrosivo marino y anclajes estructurales de alta fijación',
        'Diseño arquitectónico icónico integrado al paisaje del resort',
      ],
      imageUrl: '/slider/projet-6.webp',
    },
    {
      id: 'izaje-vigas-grua-torre',
      title: 'Montaje e Izaje de Vigas Estructurales de Acero Frente al Mar',
      category: 'industrial',
      categoryLabel: 'Sector Industrial',
      location: 'Punta Cana, R.D.',
      steelWeight: '180 Toneladas',
      date: '2023',
      description: 'Construcción integral de esqueleto metálico con izaje de vigas maestras mediante grúa torre para edificación frente al mar.',
      highlights: [
        'Pórticos de perfiles estructurales de alma llena',
        'Anclajes estructurales de alta resistencia ensayados a tracción',
        'Acero certificado bajo normas ASTM A572 Grado 50',
      ],
      imageUrl: '/projects/project-steel-frame.webp',
    },
    {
      id: 'red-piping-chillers',
      title: 'Red de Tuberías Industriales y Piping para Batería de Chillers',
      category: 'industrial',
      categoryLabel: 'Sector Industrial',
      location: 'Bávaro, R.D.',
      steelWeight: '2,400 Metros',
      date: '2024',
      description: 'Interconexión hidráulica y colectores de distribución de agua helada para acondicionamiento ambiental en cuartos de máquinas y salas de chillers.',
      highlights: [
        'Tubería de acero al carbono ASTM A106 con bridas ANSI forjadas',
        'Soldadura TIG y SMAW inspeccionada y purgada',
        'Prueba hidrostática certificada a 1.5 veces la presión de diseño',
      ],
      imageUrl: '/projects/project-piping-chiller.webp',
    },
    {
      id: 'prefabricacion-taller-soldadura',
      title: 'Prefabricación y Soldadura Homologada en Taller Propio',
      category: 'industrial',
      categoryLabel: 'Servicios de Taller',
      location: 'Punta Cana, R.D.',
      steelWeight: 'Producción Permanente',
      date: '2024',
      description: 'Corte por plasma, oxicorte, conformado y soldadura especializada bajo normas AWS D1.1 y ASME en banco de trabajo controlado.',
      highlights: [
        'Soldadores calificados en posiciones 1G a 6G',
        'Control dimensional milimétrico con plantillas láser',
        'Área dedicada de granallado y pintado anticorrosivo',
      ],
      imageUrl: '/projects/project-welding-shop.webp',
    },
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const filters = [
    { id: 'todos', label: 'Todas las Obras' },
    { id: 'hotelero', label: 'Sector Hotelero' },
    { id: 'industrial', label: 'Sector Industrial' },
    { id: 'comercial', label: 'Comercial' },
    { id: 'inoxidable', label: 'Acero Inoxidable' },
  ];

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-[#0b1b15] text-white w-full overflow-hidden">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header with Font Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-bold uppercase tracking-wider text-lime-400"
            >
              Registro de Obras • PREMOM
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-normal text-white tracking-tight mt-2"
            >
              Proyectos Ejecutados
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
            >
              Obras de estructuras pesadas, sistemas de tuberías industriales y soldadura certificada realizadas en Punta Cana, Bávaro y toda la República Dominicana.
            </motion.p>
          </div>

          {/* Dedicated Page Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Ver Catálogo Completo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Filter Buttons with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeFilter === f.id
                  ? 'bg-lime-500 text-slate-950'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* 3-Column Cards Grid Expanding Across Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 w-full">
          {filteredProjects.slice(0, 6).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveProject(project)}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container with Sharp Corners */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />

                {/* Category Badge on Corner */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 text-lime-400 text-[10px] font-medium uppercase tracking-wider">
                  <span>{project.categoryLabel}</span>
                </div>
              </div>

              {/* Text Container Below Image: Clean Title + Descriptive Text */}
              <div className="pt-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-normal text-white group-hover:text-lime-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Action Link */}
        <div className="mt-16 text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Explorar Todos los Proyectos de PREMOM</span>
            <ArrowRight className="w-4 h-4 text-lime-400" />
          </Link>
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="bg-white text-slate-900 max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] w-full mb-6 bg-slate-100 overflow-hidden">
                <Image
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 bg-lime-100 text-lime-900 text-xs font-medium uppercase tracking-wider">
                    {activeProject.categoryLabel}
                  </span>
                </div>

                <h3 className="text-2xl font-normal text-slate-900 leading-tight">
                  {activeProject.title}
                </h3>

                <div className="p-4 bg-slate-100 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-normal">Categoría del Proyecto</span>
                    <span className="font-medium text-slate-900">{activeProject.categoryLabel}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-normal">Ubicación</span>
                    <span className="font-normal text-slate-900 text-sm text-lime-800">{activeProject.location}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5">
                    Descripción del Proyecto
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Aspectos Destacados de Ingeniería
                  </h4>
                  <div className="space-y-1.5">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-medium">
                    ¿Desea cotizar un proyecto con especificaciones similares?
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProject(null)}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Cerrar
                    </button>
                    <Link
                      href="/contacto"
                      onClick={() => setActiveProject(null)}
                      className="px-5 py-2.5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Solicitar Presupuesto
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
