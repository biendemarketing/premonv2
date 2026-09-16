'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Layers, 
  Flame, 
  Wrench, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Award, 
  HardHat, 
  MapPin, 
  Mail, 
  Phone, 
  FileText,
  CheckCircle,
  Briefcase,
  ExternalLink
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export type MegaMenuTab = 'inicio' | 'nosotros' | 'servicios' | 'proyectos' | 'contacto';

interface MegaMenuProps {
  activeTab: MegaMenuTab | null;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaMenu({
  activeTab,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  if (!isOpen || !activeTab) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute top-full left-0 right-0 w-full bg-white border-t border-b border-slate-200 shadow-2xl z-40"
        id={`megamenu-${activeTab}`}
      >
        {/* Subtle decorative top accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-lime-500 via-lime-600 to-emerald-600" />

        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8">
          {/* TAB 1: INICIO */}
          {activeTab === 'inicio' && (
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Col 1: Información Corporativa de Inicio */}
              <div className="col-span-4 space-y-4 pr-4 border-r border-slate-100">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lime-700">
                  <Building2 className="w-4 h-4 text-lime-700" />
                  <span>Portal Corporativo PREMOM</span>
                </div>
                <h3 className="text-xl font-normal text-slate-900 leading-snug">
                  Ingeniería, Prefabricación en Taller y Montaje en Obra
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Líderes en fabricación de estructuras metálicas pesadas, tuberías industriales para vapor y agua helada, y soldadura certificada en Punta Cana – Bávaro y toda la República Dominicana.
                </p>

                <div className="pt-2 space-y-2.5">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                    <span>Cálculo estructural bajo normativas de viento ciclónico y sismo</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                    <span>Taller propio con bancos de ensamble, oxicorte y granallado</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                    <span>Flota de grúas telescópicas y montaje con personal homologado</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-700 hover:text-lime-800 transition-colors"
                  >
                    <span>Explorar Portada Principal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Col 2: Accesos Directos a Secciones Clave de Inicio */}
              <div className="col-span-4 space-y-3 pr-4 border-r border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Secciones Destacadas
                </span>

                <div className="grid grid-cols-1 gap-2.5">
                  <Link
                    href="/#servicios"
                    onClick={onClose}
                    className="p-3 bg-slate-50 hover:bg-slate-100 transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                        Catálogo de Servicios Industriales
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Estructuras metálicas, piping, barandillas inox y soldaduras
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-lime-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>

                  <Link
                    href="/#proyectos"
                    onClick={onClose}
                    className="p-3 bg-slate-50 hover:bg-slate-100 transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                        Galería de Obras en Punta Cana
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Proyectos hoteleros, cubiertas y naves ejecutadas
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-lime-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>

                  <Link
                    href="/#proceso"
                    onClick={onClose}
                    className="p-3 bg-slate-50 hover:bg-slate-100 transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                        Metodología de Ingeniería en 4 Fases
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Planos de taller, prefabricación, izaje y control de calidad
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-lime-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>

                  <Link
                    href="/#por-que-elegirnos"
                    onClick={onClose}
                    className="p-3 bg-slate-50 hover:bg-slate-100 transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                        ¿Por Qué Elegir a PREMOM?
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Garantía contractual de entrega y rigor milimétrico
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-lime-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Col 3: Tarjeta con Imagen Destacada de Inicio */}
              <div className="col-span-4">
                <div className="relative group overflow-hidden bg-slate-900 text-white flex flex-col justify-between">
                  <div className="relative w-full h-48">
                    <Image
                      src="/slider/projet-1.webp"
                      alt="Estructura de acero y marquesina PREMOM"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-lime-600 text-[10px] font-bold uppercase tracking-wider text-white">
                      Punta Cana – Bávaro
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 space-y-2">
                    <h4 className="text-sm font-bold text-white">
                      Fabricación y Montaje Metalmecánico
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                      Más de una década ejecutando superestructuras metálicas y cubiertas de gran envergadura en el este de República Dominicana.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/contacto"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white text-xs font-bold uppercase tracking-wider transition-colors w-full justify-center"
                      >
                        <span>Solicitar Presupuesto</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: NOSOTROS */}
          {activeTab === 'nosotros' && (
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Col 1: Misión, Visión y Valores */}
              <div className="col-span-4 space-y-4 pr-4 border-r border-slate-100">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lime-700">
                  <Award className="w-4 h-4 text-lime-700" />
                  <span>Trayectoria y Compromiso</span>
                </div>
                <h3 className="text-xl font-normal text-slate-900 leading-snug">
                  Construcción Metálica Diseñada para las Exigencias del Caribe
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  PREMOM SRL nace para responder a la necesidad del sector hotelero, industrial y comercial de contar con un contratista de acero con taller propio, ingeniería de despiece y cumplimiento riguroso de plazos.
                </p>

                <div className="space-y-2.5 pt-1">
                  <div className="p-2.5 bg-slate-50 border-l-2 border-lime-600">
                    <div className="text-xs font-bold text-slate-900">Misión</div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      Prefabricar y montar soluciones metálicas de máxima fiabilidad, resistiendo la salinidad marina y esfuerzos de huracán.
                    </p>
                  </div>
                  <div className="p-2.5 bg-slate-50 border-l-2 border-slate-700">
                    <div className="text-xs font-bold text-slate-900">Visión</div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      Ser el aliado de ingeniería estructural y piping de referencia en los desarrollos más ambiciosos del país.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    href="/nosotros"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-700 hover:text-lime-800 transition-colors"
                  >
                    <span>Ver Perfil Corporativo Completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Col 2: Capacidades Técnicas y Normas */}
              <div className="col-span-4 space-y-3 pr-4 border-r border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Capacidades de Taller &amp; Equipamiento
                </span>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 p-2.5 bg-slate-50">
                    <div className="p-1.5 bg-lime-100 text-lime-800 shrink-0 mt-0.5">
                      <HardHat className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Taller Propio de Prefabricación</div>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Bancos de ensamble nivelados, oxicorte y conformado en frío para perfiles pesados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 bg-slate-50">
                    <div className="p-1.5 bg-lime-100 text-lime-800 shrink-0 mt-0.5">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Soldadores Homologados AWS/ASME</div>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Procedimientos calificados en TIG purgado con argón, MIG/MAG y electrodo 7018.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 bg-slate-50">
                    <div className="p-1.5 bg-lime-100 text-lime-800 shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Grúas de Izaje y Seguridad OSHA</div>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Planes de izaje certificados para maniobras de alto tonelaje en altura.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-2">
                  <span className="font-semibold text-slate-700">Normativas:</span>
                  <span>AWS D1.1 • ASME IX • AISC 360 • MOPC</span>
                </div>
              </div>

              {/* Col 3: Tarjeta Visual de Nosotros */}
              <div className="col-span-4">
                <div className="relative group overflow-hidden bg-slate-900 text-white flex flex-col justify-between">
                  <div className="relative w-full h-48">
                    <Image
                      src="/projects/project-welding-shop.webp"
                      alt="Taller de prefabricación y soldadura PREMOM"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-lime-600 text-[10px] font-bold uppercase tracking-wider text-white">
                      Taller en República Dominicana
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 space-y-2">
                    <h4 className="text-sm font-bold text-white">
                      Taller Propio de Prefabricación
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                      Control dimensional milimétrico y preparación de pintura anticorrosiva de alto espesor antes del despacho a obra.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/nosotros"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white text-xs font-bold uppercase tracking-wider transition-colors w-full justify-center"
                      >
                        <span>Conocer Nuestro Equipo</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SERVICIOS */}
          {activeTab === 'servicios' && (
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Col 1 & 2: Grid de Servicios Principales */}
              <div className="col-span-8 pr-4 border-r border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lime-700">
                      <Wrench className="w-4 h-4 text-lime-700" />
                      <span>Especialidades Técnicas</span>
                    </div>
                    <h3 className="text-xl font-normal text-slate-900">
                      Catálogo Integral de Servicios Metalmecánicos
                    </h3>
                  </div>
                  <Link
                    href="/servicios"
                    onClick={onClose}
                    className="text-xs font-bold uppercase tracking-wider text-lime-700 hover:text-lime-800 transition-colors flex items-center gap-1 shrink-0"
                  >
                    <span>Ver Todos</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href="/servicios#estructuras-metalicas"
                    onClick={onClose}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white text-lime-700 shadow-sm shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                          Estructuras Metálicas Pesadas
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          Pórticos de acero, vigas IPR, celosías y naves industriales
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/servicios#montaje-tuberias"
                    onClick={onClose}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white text-lime-700 shadow-sm shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                          Tuberías Industriales (Piping)
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          Vapor, agua helada, Schedule 40/80 y cuartos de máquinas
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/servicios#barandillas-inoxidable"
                    onClick={onClose}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white text-lime-700 shadow-sm shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                          Barandillas en Acero Inoxidable
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          AISI 304 y 316L marino, acabado pulido o satinado
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/servicios#soldaduras-general"
                    onClick={onClose}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white text-lime-700 shadow-sm shrink-0">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                          Soldaduras Especializadas
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          TIG purga de argón, MIG/MAG y electrodo bajo AWS D1.1
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/servicios#mantenimiento-reparacion"
                    onClick={onClose}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white text-lime-700 shadow-sm shrink-0">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                          Mantenimiento y Refuerzos
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          Rehabilitación estructural y recubrimiento anticorrosivo
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/servicios#trabajos-medida"
                    onClick={onClose}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white text-lime-700 shadow-sm shrink-0">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                          Trabajos Arquitectónicos a Medida
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          Cenadores piramidales, pérgolas y cubiertas singulares
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/servicios#soluciones-integrales"
                    onClick={onClose}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white text-lime-700 shadow-sm shrink-0">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                          Soluciones Integrales
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          Gestión completa llave en mano con grúas de izaje
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/servicios#asesoramiento-tecnico"
                    onClick={onClose}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white text-lime-700 shadow-sm shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                          Asesoramiento y Plazos
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          Optimización de planos y garantía contractual de entrega
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Col 3: Tarjeta Visual de Servicios */}
              <div className="col-span-4">
                <div className="relative group overflow-hidden bg-slate-900 text-white flex flex-col justify-between">
                  <div className="relative w-full h-48">
                    <Image
                      src="/projects/project-piping-chiller.webp"
                      alt="Piping industrial para cuartos de máquinas PREMOM"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-lime-600 text-[10px] font-bold uppercase tracking-wider text-white">
                      Especialidad Destacada
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 space-y-2">
                    <h4 className="text-sm font-bold text-white">
                      Piping Industrial &amp; Baterías de Chillers
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                      Interconexión hidráulica para hoteles y plantas industriales con pruebas hidrostáticas certificadas bajo norma ASME.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/servicios"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white text-xs font-bold uppercase tracking-wider transition-colors w-full justify-center"
                      >
                        <span>Explorar Servicios y Fichas</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PROYECTOS */}
          {activeTab === 'proyectos' && (
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Col 1 & 2: Miniaturas de Proyectos Representativos */}
              <div className="col-span-8 pr-4 border-r border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lime-700">
                      <Building2 className="w-4 h-4 text-lime-700" />
                      <span>Obras Ejecutadas</span>
                    </div>
                    <h3 className="text-xl font-normal text-slate-900">
                      Proyectos en Complejos Hoteleros, Comerciales e Industriales
                    </h3>
                  </div>
                  <Link
                    href="/proyectos"
                    onClick={onClose}
                    className="text-xs font-bold uppercase tracking-wider text-lime-700 hover:text-lime-800 transition-colors flex items-center gap-1 shrink-0"
                  >
                    <span>Ver Todas las Obras</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <Link
                    href="/proyectos"
                    onClick={onClose}
                    className="group flex gap-3 p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all"
                  >
                    <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-slate-200">
                      <Image
                        src="/slider/projet-1.webp"
                        alt="Marquesina de acero y andamios"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase text-lime-700">Hotelero • Bávaro</div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                        Marquesina de Acero y Andamiaje
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        Pórticos de acero con fijación empernada A325
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/proyectos"
                    onClick={onClose}
                    className="group flex gap-3 p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all"
                  >
                    <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-slate-200">
                      <Image
                        src="/slider/projet-2.webp"
                        alt="Resort y parque acuático costero"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase text-lime-700">Hotelero • Punta Cana</div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                        Resort y Parque Acuático Frente al Mar
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        Estructuras marinas resistentes a ciclones de 240 km/h
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/proyectos"
                    onClick={onClose}
                    className="group flex gap-3 p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all"
                  >
                    <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-slate-200">
                      <Image
                        src="/slider/projet-3.webp"
                        alt="Superestructura multinivel con losa"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase text-lime-700">Comercial • Cap Cana</div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                        Superestructura Multinivel
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        Vigas de alma llena y losa de entrepiso de concreto
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/proyectos"
                    onClick={onClose}
                    className="group flex gap-3 p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-all"
                  >
                    <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-slate-200">
                      <Image
                        src="/slider/projet-6.webp"
                        alt="Estructura piramidal para cenador"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase text-lime-700">Arquitectónico • Cap Cana</div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700 transition-colors truncate">
                        Estructura Piramidal de Acero
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        Cenador monumental prearmado con anclaje epóxico
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Col 3: Tarjeta Visual de Izaje en Proyectos */}
              <div className="col-span-4">
                <div className="relative group overflow-hidden bg-slate-900 text-white flex flex-col justify-between">
                  <div className="relative w-full h-48">
                    <Image
                      src="/slider/projet-5.webp"
                      alt="Montaje de estructuras con grúa telescópica"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-lime-600 text-[10px] font-bold uppercase tracking-wider text-white">
                      Izaje Pesado en Obra
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 space-y-2">
                    <h4 className="text-sm font-bold text-white">
                      Montaje con Grúas Telescópicas
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                      Planificación rigurosa de izaje de vigas principales en altura cumpliendo estándares internacionales OSHA y AWS.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/proyectos"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white text-xs font-bold uppercase tracking-wider transition-colors w-full justify-center"
                      >
                        <span>Explorar Catálogo Completo</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CONTACTO */}
          {activeTab === 'contacto' && (
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Col 1: Canales Directos y Ubicación */}
              <div className="col-span-4 space-y-4 pr-4 border-r border-slate-100">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-lime-700">
                  <MapPin className="w-4 h-4 text-lime-700" />
                  <span>Contacto Directo de Ingeniería</span>
                </div>
                <h3 className="text-xl font-normal text-slate-900 leading-snug">
                  Atención Inmediata para Proyectos y Licitaciones
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comuníquese directamente con nuestro departamento técnico para coordinar visitas a obra, evaluación de planos o presupuestos desglosados en todo el territorio dominicano.
                </p>

                <div className="space-y-3 pt-1 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Ubicación Estratégica:</span>
                      <span className="text-slate-600 text-[11px]">Punta Cana – Bávaro, La Altagracia, República Dominicana</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Horario de Operaciones:</span>
                      <span className="text-slate-600 text-[11px]">Lunes a Sábado: 7:30 AM – 6:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Correo Oficial:</span>
                      <a href="mailto:premom@premomprefabricados.com" className="text-lime-700 hover:underline text-[11px]">
                        premom@premomprefabricados.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contacto"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-700 hover:text-lime-800 transition-colors"
                  >
                    <span>Ir al Formulario de Contacto</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Col 2: Recepción de Planos y Proceso de Cotización */}
              <div className="col-span-4 space-y-3 pr-4 border-r border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Recepción de Planos &amp; Cotizaciones
                </span>

                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs mb-1">
                      <FileText className="w-4 h-4 text-lime-700" />
                      <span>Planos en AutoCAD (DWG) y PDF</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Revisamos memorias de cálculo y planos arquitectónicos para generar cubicaciones precisas de acero estructural.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs mb-1">
                      <Clock className="w-4 h-4 text-lime-700" />
                      <span>Visitas a Obra en 24 – 48 Horas</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Inspección técnica in situ en la zona este (Punta Cana, Bávaro, Cap Cana, Verón) y a nivel nacional.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs mb-1">
                      <CheckCircle2 className="w-4 h-4 text-lime-700" />
                      <span>Presupuesto con Cronograma Firme</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Desglose detallado por partidas, especificación de acero y fecha contractual de entrega.
                    </p>
                  </div>
                </div>
              </div>

              {/* Col 3: Tarjeta Visual de WhatsApp Directo */}
              <div className="col-span-4">
                <div className="relative group overflow-hidden bg-slate-900 text-white flex flex-col justify-between">
                  <div className="relative w-full h-48">
                    <Image
                      src="/slider/projet-4.webp"
                      alt="Obras y cubiertas costeras PREMOM"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-lime-600 text-[10px] font-bold uppercase tracking-wider text-white">
                      Asesoría Directa
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 space-y-3">
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        ¿Necesita Respuesta Rápida?
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed mt-0.5">
                        Hable directamente con un ingeniero de PREMOM por WhatsApp para consultas urgentes o envíos inmediatos de archivos.
                      </p>
                    </div>

                    <div className="pt-1 flex flex-col gap-2">
                      <a
                        href="https://wa.me/18293802005?text=Hola%20PREMOM,%20deseo%20asesor%C3%ADa%20t%C3%A9cnica%20y%20presupuesto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors w-full justify-center"
                      >
                        <WhatsAppIcon className="w-4 h-4 shrink-0" />
                        <span>Chat WhatsApp (+1 829 380-2005)</span>
                      </a>

                      <Link
                        href="/contacto"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors w-full justify-center"
                      >
                        <span>Formulario Web</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
