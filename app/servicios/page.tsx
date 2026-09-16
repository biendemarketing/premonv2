import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { 
  Building2, 
  Layers, 
  Flame, 
  Wrench, 
  Compass, 
  Briefcase, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios | PREMOM SRL - Estructuras, Tuberías y Soldadura',
  description: 'Catálogo de servicios de PREMOM SRL: fabricación de estructuras metálicas, piping industrial de vapor y agua helada, soldadura certificada AWS/ASME y barandillas de acero inoxidable.',
};

export default function ServiciosPage() {
  const services = [
    {
      id: 'estructuras-metalicas',
      title: 'Fabricación y Montaje de Estructuras Metálicas',
      icon: <Building2 className="w-12 h-12 text-lime-700" />,
      desc: 'Construcción integral de pórticos de acero, vigas IPR, celosías de grandes luces y cubiertas autoportantes calculadas bajo normativa sísmica y de viento del Caribe. Fabricación en taller propio y montaje en obra.',
      specs: ['Acero ASTM A36 / A572 Gr. 50 certificado', 'Conexiones empernadas de alta resistencia A325 y soldadas', 'Pintura anticorrosiva epóxica marina de alto espesor'],
      standards: 'AISC 360 • AWS D1.1 • MOPC',
      deliverables: ['Planos de taller y montaje', 'Control topográfico en obra', 'Certificados de torque y verticalidad'],
    },
    {
      id: 'montaje-tuberias',
      title: 'Fabricación y Montaje de Tuberías Industriales',
      icon: <Layers className="w-12 h-12 text-lime-700" />,
      desc: 'Líneas de tuberías de alta presión para cuartos de máquinas, plantas de tratamiento y sistemas termo-mecánicos. Trazado isométrico, biselado de precisión y pruebas hidrostáticas certificadas.',
      specs: ['Acero al carbono ASTM A53 / A106 Gr. B', 'Cédulas Schedule 40 y Schedule 80', 'Bridas forjadas ANSI 150 / 300 lbs'],
      standards: 'ASME B31.1 • ASME B31.3 • NFPA',
      deliverables: ['Pruebas de presión hidrostática certificadas', 'Lavado químico de líneas', 'Dossier de calidad'],
    },
    {
      id: 'barandillas-inoxidable',
      title: 'Fabricación e Instalación de Barandillas en Acero Inoxidable',
      icon: <CheckCircle className="w-12 h-12 text-lime-700" />,
      desc: 'Diseño y colocación de elementos en acero inoxidable con acabado satinado o pulido espejo. Anclajes químicos estructurales ocultos y soldaduras TIG pasivadas químicamente para máxima durabilidad marina.',
      specs: ['Acero inoxidable austenítico AISI 304 y 316L', 'Soldadura TIG purgada con gas argón', 'Pasivado químico de uniones para evitar corrosión'],
      standards: 'ASTM A554 • Criterios de durabilidad costera',
      deliverables: ['Acabados sin marcas de unión', 'Fijaciones de alta seguridad', 'Certificado de aleación'],
    },
    {
      id: 'soldaduras-general',
      title: 'Soldaduras en General (TIG, MIG, Electrodo)',
      icon: <Flame className="w-12 h-12 text-lime-700" />,
      desc: 'Ejecución de soldadura especializada para uniones estructurales y recipientes a presión en posiciones 1G a 6G. Procedimientos WPS y PQR con verificación visual y ensayos no destructivos.',
      specs: ['Electrodos E7018 / E6010 de bajo hidrógeno', 'Aporte inoxidable ER308L / ER316L', 'Inspección visual y tintas penetrantes'],
      standards: 'AWS D1.1 / D1.6 • ASME Sección IX',
      deliverables: ['Registros de calificación de soldadores', 'Reportes de inspección de uniones'],
    },
    {
      id: 'mantenimiento-reparacion',
      title: 'Mantenimiento y Reparación de Instalaciones',
      icon: <Wrench className="w-12 h-12 text-lime-700" />,
      desc: 'Diagnóstico técnico y rehabilitación estructural en instalaciones hoteleras e industriales existentes. Refuerzo de perfiles debilitados y arenado con recubrimientos de alto rendimiento.',
      specs: ['Sustitución de anclajes desgastados', 'Placas de refuerzo calculadas', 'Recubrimientos epóxicos marinos'],
      standards: 'SSPC-SP10 • Normas de seguridad en obra',
      deliverables: ['Informe técnico de diagnóstico y entrega', 'Mínima interrupción operativa'],
    },
    {
      id: 'trabajos-medida',
      title: 'Trabajos a Medida y Proyectos Especiales',
      icon: <Compass className="w-12 h-12 text-lime-700" />,
      desc: 'Prefabricación y montaje de estructuras arquitectónicas singulares: cenadores piramidales, pérgolas, domos y geometrías personalizadas según requerimientos de diseño arquitectónico.',
      specs: ['Planos de despiece de precisión', 'Corte por plasma y conformado en frío', 'Armado modular para fácil montaje'],
      standards: 'Códigos arquitectónicos y estructurales vigentes',
      deliverables: ['Verificación dimensional previa', 'Montaje con equipo especializado'],
    },
    {
      id: 'soluciones-integrales',
      title: 'Soluciones Integrales para Industria y Construcción',
      icon: <Briefcase className="w-12 h-12 text-lime-700" />,
      desc: 'Gestión completa de proyectos metálicos: desde el acopio de acero certificado hasta la entrega llave en mano en obra. Logística coordinada, grúas telescópicas y supervisión técnica permanente.',
      specs: ['Grúas de alto tonelaje para izajes seguros', 'Coordinación con obra civil', 'Control documental de calidad'],
      standards: 'Estándares internacionales de ingeniería de izaje',
      deliverables: ['Cronograma de avance físico', 'Libro de obra y dossier final'],
    },
    {
      id: 'asesoramiento-tecnico',
      title: 'Asesoramiento Técnico y Cumplimiento de Plazos',
      icon: <Clock className="w-12 h-12 text-lime-700" />,
      desc: 'Evaluación técnica de planos y memorias para optimizar pesos de acero, selección de perfiles y garantía contractual de tiempos de entrega en o antes de la fecha acordada.',
      specs: ['Ingeniería de valor en acero', 'Planificación de ruta crítica de fabricación', 'Garantía por contrato de entrega'],
      standards: 'ISO 9001 / Gestión de calidad',
      deliverables: ['Presupuesto técnico desglosado', 'Plan de trabajo detallado'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-28 lg:pt-32">
        {/* Header */}
        <section className="bg-slate-950 text-white py-16 lg:py-24 w-full">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 mb-3">
                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                <span>/</span>
                <span className="text-white">Servicios</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-white">
                Servicios Especializados
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Ingeniería, fabricación en taller propio y montaje en obra para el sector hotelero, comercial e industrial en República Dominicana.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail List */}
        <section className="py-20 lg:py-28 bg-white w-full">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {services.map((s, idx) => (
                <div
                  key={s.id}
                  className="bg-slate-50 p-8 sm:p-10 flex flex-col justify-between transition-colors hover:bg-slate-100"
                >
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-lime-700">
                        {s.icon}
                      </div>
                      <span className="text-xs font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                      {s.title}
                    </h2>

                    <p className="text-base text-slate-700 leading-relaxed mb-6">
                      {s.desc}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Especificaciones Clave:
                      </h4>
                      {s.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-white text-xs sm:text-sm flex items-center justify-between mb-8">
                      <span className="text-slate-500 font-semibold">Norma técnica:</span>
                      <span className="font-bold text-slate-900">{s.standards}</span>
                    </div>
                  </div>

                  <Link
                    href={`/contacto?servicio=${encodeURIComponent(s.title)}`}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider text-center block transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Solicitar Cotización de este Servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Banner */}
        <section className="py-20 bg-slate-900 text-white w-full">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center max-w-4xl mx-auto">
            <ShieldCheck className="w-12 h-12 text-lime-400 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase">
              Control de Calidad y Dossier de Entrega
            </h3>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
              Cada estructura y línea de tubería construida por PREMOM cuenta con ensayos no destructivos (tintas penetrantes, ultrasonido), certificados de colada de acero y pruebas hidrostáticas debidamente documentadas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Solicitar Asesoría Técnica
              </Link>
              <Link
                href="/proyectos"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Ver Obras Ejecutadas
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
