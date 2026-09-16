'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

export interface Project {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  category: 'hotelero' | 'industrial' | 'comercial' | 'inoxidable';
  categoryLabel: string;
  location: string;
  description: string;
  scope: string;
  highlights: string[];
  tags: string[];
  imageUrl: string;
}

export function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const projects: Project[] = [
    {
      id: 'marquesina-acero-andamios',
      code: '01',
      title: 'Estructura y Marquesina de Acero con Andamiaje',
      shortTitle: 'Marquesina de Acero y Andamiaje',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Bávaro – Punta Cana, R.D.',
      scope: 'Fabricación y Montaje Estructural',
      description: 'Fabricación y montaje de pórticos para marquesina de acero estructural con sistema de andamiaje y verificación milimétrica de alineación en obra.',
      highlights: [
        'Montaje de pórticos principales con fijaciones empernadas de alta resistencia',
        'Control topográfico y plomada estructural durante todo el izaje con grúas',
        'Esquema de protección anticorrosiva multicapa para ambiente marino',
      ],
      tags: ['Pórticos de Acero', 'Soldadura AWS D1.1', 'Fijación Empernada'],
      imageUrl: '/slider/projet-1.webp',
    },
    {
      id: 'resort-parque-acuatico',
      code: '02',
      title: 'Estructuras Metálicas para Resort y Parque Acuático',
      shortTitle: 'Resort y Parque Acuático',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Punta Cana, R.D.',
      scope: 'Estructuras Especiales Costeras',
      description: 'Montaje de perfiles y soportes de acero para parque acuático en complejo hotelero frente al mar, empleando plataformas elevadoras y tratamiento anticorrosivo.',
      highlights: [
        'Estructuras resistentes a la salinidad severa en primera línea de costa',
        'Montaje coordinado en altura con plataformas articuladas y grúas telescópicas',
        'Cálculo estructural para soportar cargas de viento ciclónico de hasta 240 km/h',
      ],
      tags: ['Acabado Marino', 'Montaje en Altura', 'Resistente a Ciclones'],
      imageUrl: '/slider/projet-2.webp',
    },
    {
      id: 'superestructura-multinivel-losa',
      code: '03',
      title: 'Superestructura Metálica Multinivel con Losa de Concreto',
      shortTitle: 'Superestructura Multinivel',
      category: 'comercial',
      categoryLabel: 'Sector Comercial',
      location: 'Cap Cana, R.D.',
      scope: 'Edificación Metálica Multinivel',
      description: 'Pórticos de acero de alta resistencia y vigas principales para edificación multinivel, con losa de entrepiso y arriostramientos calculados contra sismos.',
      highlights: [
        'Vigas maestras de alma llena y vigas secundarias electrosoldadas',
        'Integración estructural con losa de entrepiso de concreto vaciado',
        'Inspección no destructiva de uniones y control de torque en pernos estructurales',
      ],
      tags: ['Vigas de Alma Llena', 'Control de Torque', 'Diseño Sismorresistente'],
      imageUrl: '/slider/projet-3.webp',
    },
    {
      id: 'estructuras-metalicas-costeras',
      code: '04',
      title: 'Estructuras Metálicas y Cubiertas en Entorno Costero',
      shortTitle: 'Naves y Cubiertas Costeras',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Verón – Punta Cana, R.D.',
      scope: 'Cubiertas de Gran Luz y Naves',
      description: 'Instalación de naves y cubiertas de acero estructural con recubrimiento anticorrosivo marino negro para área de servicio y logística de resort.',
      highlights: [
        'Pórticos rígidos de gran luz libre para almacenamiento y mantenimiento técnico',
        'Pintura electrostática y epóxica de alta resistencia a rayos UV y salitre',
        'Maniobras de montaje seguras preservando el entorno paisajístico del resort',
      ],
      tags: ['Pórticos Rígidos', 'Recubrimiento Epóxico', 'Gran Luz Libre'],
      imageUrl: '/slider/projet-4.webp',
    },
    {
      id: 'montaje-grua-frente-mar',
      code: '05',
      title: 'Montaje con Grúa Telescópica Frente al Mar',
      shortTitle: 'Montaje con Grúa Telescópica',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Bávaro, R.D.',
      scope: 'Izaje Pesado e Ingeniería de Montaje',
      description: 'Maniobras de izaje y acople de elementos estructurales de gran envergadura mediante grúa telescópica de alto tonelaje para complejo hotelero.',
      highlights: [
        'Plan de izaje certificado con grúa telescópica de 90 toneladas',
        'Ensamble de vigas principales en altura con soldadores homologados 6G',
        'Cumplimiento estricto de normativas internacionales OSHA y AWS',
      ],
      tags: ['Izaje con Grúa', 'Soldadura 6G', 'Seguridad Certificada'],
      imageUrl: '/slider/projet-5.webp',
    },
    {
      id: 'estructura-piramidal-cenador',
      code: '06',
      title: 'Estructura Metálica Piramidal para Cenador',
      shortTitle: 'Estructura Piramidal de Acero',
      category: 'hotelero',
      categoryLabel: 'Sector Hotelero',
      location: 'Cap Cana, R.D.',
      scope: 'Estructuras Arquitectónicas',
      description: 'Fabricación y ensamblaje de estructura metálica piramidal de acero sobre bases revestidas de piedra en desarrollo turístico de alto perfil.',
      highlights: [
        'Geometría piramidal de precisión milimétrica prearmada en taller propio',
        'Tratamiento anticorrosivo marino y anclajes estructurales epóxicos',
        'Diseño arquitectónico icónico perfectamente integrado al paisaje',
      ],
      tags: ['Geometría Compleja', 'Prefabricación en Taller', 'Anclaje Epóxico'],
      imageUrl: '/slider/projet-6.webp',
    },
    {
      id: 'red-piping-chillers',
      code: '07',
      title: 'Red de Tuberías Industriales y Piping para Chillers',
      shortTitle: 'Piping para Batería de Chillers',
      category: 'industrial',
      categoryLabel: 'Sector Industrial',
      location: 'Bávaro, R.D.',
      scope: 'Tuberías Industriales y Salas de Máquinas',
      description: 'Interconexión hidráulica y colectores de distribución de agua helada para acondicionamiento ambiental en cuartos de máquinas y salas de chillers.',
      highlights: [
        'Tubería de acero al carbono ASTM A106 con bridas ANSI forjadas clase 150/300',
        'Soldadura TIG y SMAW con inspección por líquidos penetrantes y radiografía',
        'Prueba hidrostática certificada a 1.5 veces la presión nominal de trabajo',
      ],
      tags: ['ASTM A106 / A53', 'Soldadura TIG Purga', 'Prueba Hidrostática'],
      imageUrl: '/projects/project-piping-chiller.webp',
    },
    {
      id: 'prefabricacion-taller-soldadura',
      code: '08',
      title: 'Prefabricación y Soldadura Calificada en Taller Propio',
      shortTitle: 'Taller Propio de Prefabricación',
      category: 'industrial',
      categoryLabel: 'Servicios de Taller',
      location: 'Punta Cana, R.D.',
      scope: 'Fabricación y Metalmecánica',
      description: 'Corte por plasma, oxicorte, conformado y soldadura especializada bajo normas AWS D1.1 y ASME en banco de trabajo con control de calidad.',
      highlights: [
        'Equipo de soldadores calificados bajo estándares internacionales AWS y ASME',
        'Control dimensional milimétrico en mesa de trazado y oxicorte computarizado',
        'Área propia de granallado y aplicación de recubrimientos anticorrosivos',
      ],
      tags: ['Taller Industrial', 'Normas AWS / ASME', 'Control Dimensional'],
      imageUrl: '/projects/project-welding-shop.webp',
    },
  ];

  const filters = [
    { id: 'todos', label: 'Todas las Obras' },
    { id: 'hotelero', label: 'Sector Hotelero' },
    { id: 'industrial', label: 'Sector Industrial' },
    { id: 'comercial', label: 'Comercial' },
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const [selectedId, setSelectedId] = useState<string>(projects[0].id);

  // Fallback if filter changes and selectedId is not in filtered list
  const currentSelectedProject = filteredProjects.find(p => p.id === selectedId) || filteredProjects[0] || projects[0];

  const currentIndex = filteredProjects.findIndex(p => p.id === currentSelectedProject.id);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedId(filteredProjects[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % filteredProjects.length;
    setSelectedId(filteredProjects[nextIdx].id);
  };

  // Automatic slider interval with pause on hover/interaction or modal
  useEffect(() => {
    if (!isAutoPlaying || activeProjectModal) return;

    const interval = setInterval(() => {
      setSelectedId((prevId) => {
        const idx = filteredProjects.findIndex(p => p.id === prevId);
        const next = (idx + 1) % filteredProjects.length;
        return filteredProjects[next].id;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeProjectModal, filteredProjects]);

  return (
    <section id="proyectos" className="py-20 lg:py-28 bg-[#091510] text-white w-full overflow-hidden">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-14 gap-6"
        >
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-wider text-lime-400 block mb-2">
              Registro de Obras • PREMOM SRL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight uppercase">
              Proyectos Ejecutados
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Estructuras pesadas, sistemas de tuberías industriales y soldadura certificada en Punta Cana, Bávaro y toda la República Dominicana.
            </p>
          </div>

          {/* Navigation Controls & Direct Link (Sin trazos) */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 bg-slate-900/90 p-1">
              <button
                onClick={handlePrev}
                className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Proyecto siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-5 py-3 bg-lime-600 hover:bg-lime-700 text-white font-medium text-xs uppercase tracking-wider transition-colors"
            >
              <span>Presupuestar Obra</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Filter Tabs (Sin trazos) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setActiveFilter(f.id);
                const firstMatch = f.id === 'todos' ? projects[0] : projects.find(p => p.category === f.id);
                if (firstMatch) setSelectedId(firstMatch.id);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                activeFilter === f.id
                  ? 'bg-lime-500 text-slate-950 font-medium'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 font-normal'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP ACCORDION LAYOUT: Sin trazos en cards, sin bordes en botones,      */}
        {/* sin tonelada, rotación automática tipo slider                              */}
        {/* ========================================================================= */}
        <div 
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="hidden lg:flex flex-row gap-2.5 w-full min-h-[580px] xl:min-h-[620px] items-stretch"
        >
          
          {/* Loop over filtered projects */}
          {filteredProjects.map((project) => {
            const isActive = project.id === currentSelectedProject.id;

            if (isActive) {
              return (
                <motion.div
                  key={project.id}
                  layout
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveProjectModal(project)}
                  className="flex-[8] relative overflow-hidden bg-slate-950 flex flex-col justify-between p-7 sm:p-9 xl:p-10 shadow-lg cursor-pointer group"
                >
                  {/* Real Project Image Background */}
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 1536px) 75vw, 1200px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Degradado overlay solo en la parte inferior */}
                  <div className="absolute inset-x-0 bottom-0 h-3/5 sm:h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

                  {/* Flecha grande en la esquina superior derecha para ir al proyecto */}
                  <div className="relative z-10 flex justify-end">
                    <div 
                      className="p-3 sm:p-3.5 bg-slate-950/60 hover:bg-lime-500 text-white hover:text-slate-950 transition-all shadow-md group-hover:bg-lime-500 group-hover:text-slate-950"
                      title="Ver proyecto"
                      aria-label="Ver proyecto"
                    >
                      <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>

                  {/* Información: solo el título en la parte inferior sobre el degradado */}
                  <div className="relative z-10 mt-auto pt-16">
                    <h3 className="text-2xl sm:text-3xl xl:text-4xl font-normal text-white uppercase tracking-tight leading-tight drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              );
            }

            // Collapsed Vertical Cards (Strips) (Sin trazos)
            return (
              <motion.div
                key={project.id}
                layout
                onClick={() => setSelectedId(project.id)}
                className="w-14 xl:w-16 shrink-0 relative overflow-hidden cursor-pointer bg-slate-900/90 hover:bg-slate-800 transition-colors flex flex-col justify-between items-center py-6 group"
              >
                {/* Subtle Image Background in Collapsed State */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="100px"
                  className="object-cover opacity-20 group-hover:opacity-35 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-950/50 transition-colors" />

                {/* Top Code Badge (Sin trazo) */}
                <div className="relative z-10 w-9 h-9 bg-slate-800 text-slate-200 group-hover:text-lime-400 group-hover:bg-slate-700 flex items-center justify-center text-xs font-medium transition-colors">
                  {project.code}
                </div>

                {/* Vertical Project Title (Rotating 90 degrees) */}
                <div className="relative z-10 my-auto py-6 flex items-center justify-center">
                  <span 
                    className="text-xs uppercase tracking-widest text-slate-300 group-hover:text-white font-normal whitespace-nowrap transition-colors"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {project.shortTitle}
                  </span>
                </div>

                {/* Bottom Category Code */}
                <div className="relative z-10 text-[9px] uppercase tracking-wider text-lime-400 font-medium px-1">
                  {project.category.slice(0, 3)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW: Featured Active Card + Horizontal Selector Strips   */}
        {/* (Sin trazos y con slider automático)                                      */}
        {/* ========================================================================= */}
        <div 
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="lg:hidden flex flex-col gap-5 w-full"
        >
          {/* Active Featured Card: degradado solo abajo, solo título abajo, flecha grande arriba a la derecha, card completa clicable */}
          <div 
            onClick={() => setActiveProjectModal(currentSelectedProject)}
            className="relative overflow-hidden bg-slate-950 flex flex-col justify-between p-6 sm:p-8 min-h-[460px] cursor-pointer group shadow-lg"
          >
            <Image
              src={currentSelectedProject.imageUrl}
              alt={currentSelectedProject.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Degradado overlay solo en la parte inferior */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

            {/* Flecha grande en la esquina superior derecha para ir al proyecto */}
            <div className="relative z-10 flex justify-end">
              <div 
                className="p-2.5 bg-slate-950/60 hover:bg-lime-500 text-white hover:text-slate-950 transition-all shadow-md group-hover:bg-lime-500 group-hover:text-slate-950"
                title="Ver proyecto"
                aria-label="Ver proyecto"
              >
                <ArrowUpRight className="w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            {/* Información: solo el título en la parte inferior sobre el degradado */}
            <div className="relative z-10 mt-auto pt-16">
              <h3 className="text-xl sm:text-2xl font-normal text-white uppercase tracking-tight leading-tight drop-shadow-md">
                {currentSelectedProject.title}
              </h3>
            </div>
          </div>

          {/* Horizontal Selector of Other Projects (Sin trazo) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {filteredProjects.map((p) => {
              const isSelected = p.id === currentSelectedProject.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 shrink-0 text-left transition-colors ${
                    isSelected
                      ? 'bg-lime-600 text-white'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="w-6 h-6 flex items-center justify-center bg-black/40 text-xs font-medium">
                    {p.code}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-normal whitespace-nowrap">
                    {p.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Footer CTA (Sin trazos) */}
        <div className="mt-14 text-center">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Cotizar Proyecto con Especificaciones Similares</span>
            <ArrowRight className="w-4 h-4 text-lime-400" />
          </Link>
        </div>

      </div>

      {/* Project Detail Modal (Sin tonelada ni trazos innecesarios) */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="bg-white text-slate-900 max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] w-full mb-6 bg-slate-100 overflow-hidden">
                <Image
                  src={activeProjectModal.imageUrl}
                  alt={activeProjectModal.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 bg-lime-100 text-lime-900 text-xs font-medium uppercase tracking-wider">
                    {activeProjectModal.categoryLabel}
                  </span>
                </div>

                <h3 className="text-2xl font-normal text-slate-900 leading-tight">
                  {activeProjectModal.title}
                </h3>

                <div className="p-4 bg-slate-100 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-normal">Categoría del Proyecto</span>
                    <span className="font-medium text-slate-900">{activeProjectModal.categoryLabel}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5 font-normal">Ubicación</span>
                    <span className="font-normal text-slate-900 text-sm text-lime-800">{activeProjectModal.location}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5">
                    Descripción del Proyecto
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {activeProjectModal.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-slate-700 mb-2">
                    Aspectos Destacados de Ingeniería
                  </h4>
                  <div className="space-y-1.5">
                    {activeProjectModal.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-normal">
                    ¿Desea cotizar un proyecto con especificaciones similares?
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProjectModal(null)}
                      className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                    >
                      Cerrar
                    </button>
                    <Link
                      href="/contacto"
                      onClick={() => setActiveProjectModal(null)}
                      className="px-5 py-2.5 bg-lime-600 hover:bg-lime-700 text-white font-medium text-xs uppercase tracking-wider transition-colors"
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


