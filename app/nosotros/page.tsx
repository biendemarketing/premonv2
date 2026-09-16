import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Wrench, 
  ArrowRight,
  HardHat,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nosotros | PREMOM SRL - Misión, Visión y Valores',
  description: 'Conozca la historia, misión, visión y valores de PREMOM SRL. Empresa líder en fabricación de estructuras metálicas, piping y soldadura en Punta Cana, República Dominicana.',
};

export default function NosotrosPage() {
  const values = [
    {
      title: 'Precisión y Calidad de Taller',
      description: 'Rigor milimétrico en cada despiece, control de soldaduras bajo normas AWS/ASME y protección anticorrosiva marina de alta durabilidad.',
      icon: <Award className="w-12 h-12 text-lime-700" />,
    },
    {
      title: 'Cumplimiento Estricto de Plazos',
      description: 'Garantía contractual de entrega y montaje en fecha acordada. Sabemos el costo de cada día de atraso en el sector hotelero e industrial.',
      icon: <Clock className="w-12 h-12 text-lime-700" />,
    },
    {
      title: 'Seguridad en Altura e Izajes',
      description: 'Protocolos rigurosos de seguridad ocupacional en maniobras de alto tonelaje con grúas telescópicas y personal debidamente protegido.',
      icon: <ShieldCheck className="w-12 h-12 text-lime-700" />,
    },
    {
      title: 'Integridad y Transparencia',
      description: 'Presupuestos desglosados por partidas, trazabilidad del acero estructural y asesoría técnica de ingeniería de principio a fin.',
      icon: <CheckCircle2 className="w-12 h-12 text-lime-700" />,
    },
  ];

  const equipment = [
    {
      title: 'Taller Propio de Prefabricación',
      desc: 'Bancos de ensamblaje nivelados, puentes grúa y zonas de oxicorte y conformado en frío para perfiles estructurales pesados.',
    },
    {
      title: 'Equipos de Soldadura Homologada',
      desc: 'Generadores y soldadoras inverter multiproceso para soldaduras TIG purgadas con argón, MIG/MAG y electrodo revestido (SMAW).',
    },
    {
      title: 'Flota de Izaje y Montaje en Obra',
      desc: 'Grúas telescópicas y camiones pluma para maniobras seguras de elementos de gran luz libre y piezas de más de 100 toneladas.',
    },
    {
      title: 'Área de Tratamiento Anticorrosivo',
      desc: 'Cabinas para granallado y aplicación de imprimaciones epóxicas ricas en zinc y esmaltes poliuretánicos aptos para ambiente salino.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1 pt-28 lg:pt-32">
        {/* Page Hero Header */}
        <section className="bg-slate-950 text-white py-16 lg:py-24 w-full">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 mb-3">
                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                <span>/</span>
                <span className="text-white">Nosotros</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-white">
                Quiénes Somos
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Especialistas en ingeniería, prefabricación en taller propio y montaje en obra de estructuras metálicas, tuberías industriales y soldadura certificada en Punta Cana – Bávaro y toda la República Dominicana.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Profile & History */}
        <section className="py-20 lg:py-28 bg-white w-full">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/projects/project-welding-shop.webp"
                  alt="Taller de prefabricación de estructuras PREMOM SRL"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-lime-800">
                  Trayectoria y Solidez
                </span>
                <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 leading-tight">
                  Construcción Metálica Diseñada para las Exigencias del Caribe
                </h2>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  <strong>PREMOM SRL</strong> nació para responder a la necesidad de constructoras, operadores hoteleros e industrias en la región este y a nivel nacional de contar con un aliado confiable capaz de prefabricar con precisión y montar con grúas propias en los plazos contractuales más exigentes.
                </p>

                <p className="text-base text-slate-700 leading-relaxed">
                  Nos especializamos en naves industriales, cubiertas de gran luz, redes de piping para agua helada y vapor, pasarelas de acero inoxidable y soldaduras de alta responsabilidad estructural. Nuestras obras están calculadas bajo criterios sísmicos y de resistencia a vientos huracanados de categoría 5, utilizando esquemas de protección anticorrosiva marina para resistir el ambiente salino de las costas dominicanas.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <Building2 className="w-4 h-4 text-lime-600" />
                      <span>Capacidad Instalada</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">Corte, conformado y prearmado en taller propio.</p>
                  </div>
                  <div className="p-5 bg-slate-50">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <HardHat className="w-4 h-4 text-lime-600" />
                      <span>Montaje en Obra</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">Izajes seguros y soldadores calificados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión Section */}
        <section className="py-20 lg:py-28 bg-slate-100 w-full">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-800">
                Nuestra Brújula Estratégica
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mt-2">
                Misión y Visión
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Misión */}
              <div className="bg-white p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <Target className="w-12 h-12 text-lime-700 mb-6" />
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-800">
                    Propósito Fundamental
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-4">
                    Nuestra Misión
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Diseñar, prefabricar y montar estructuras metálicas, sistemas de tuberías industriales y soldadura certificada con los más rigurosos estándares de seguridad, durabilidad y precisión técnica. Nos dedicamos a brindar soluciones metalmecánicas integrales que optimicen tiempos de obra y presupuestos para inversionistas, contratistas generales y operadores hoteleros en toda la República Dominicana.
                  </p>
                </div>
                <div className="mt-8 pt-4 text-xs font-semibold text-slate-600">
                  ✓ Normativas AISC, ASME B31, AWS D1.1 y reglamentos locales MOPC
                </div>
              </div>

              {/* Visión */}
              <div className="bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <Eye className="w-12 h-12 text-lime-400 mb-6" />
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                    Hacia Dónde Vamos
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                    Nuestra Visión
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed">
                    Ser reconocidos como la empresa de referencia y el aliado estratégico preferido en ingeniería de estructuras metálicas, redes de piping y montaje industrial en el Caribe. Destacar continuamente por nuestra capacidad de respuesta inmediata, tecnología en taller propio, cultura de cero accidentes y excelencia inquebrantable en cada unión soldada.
                  </p>
                </div>
                <div className="mt-8 pt-4 text-xs font-semibold text-slate-400">
                  ✓ Liderazgo tecnológico y expansión constante en el sector turismo e industria
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Corporativos */}
        <section className="py-20 lg:py-28 bg-white w-full">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-800">
                Pilares Innegociables
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mt-2">
                Nuestros Valores
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Los principios éticos y operativos que rigen cada cotización, soldadura y montaje que entregamos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-8 transition-colors flex flex-col items-center text-center hover:bg-slate-100"
                >
                  <div className="w-full flex flex-col items-center">
                    <div className="mb-5 text-lime-700 p-3 bg-lime-50 rounded-full flex items-center justify-center">
                      {v.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipamiento y Taller */}
        <section className="py-20 lg:py-28 bg-slate-50 w-full">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-800">
                Infraestructura Operativa
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mt-2">
                Taller y Equipamiento de Ingeniería
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
              {equipment.map((eq, eIdx) => (
                <div key={eIdx} className="bg-white p-8 hover:bg-slate-100 transition-colors">
                  <div className="w-10 h-10 bg-slate-100 flex items-center justify-center font-bold text-slate-900 text-xs mb-4">
                    0{eIdx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {eq.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {eq.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA banner */}
            <div className="mt-16 bg-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">¿Desea coordinar una visita técnica a su obra en Punta Cana?</h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2">
                  Nuestros ingenieros evalúan requerimientos y planos en menos de 24 horas.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/contacto"
                  className="px-6 py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Contactar Ingeniería
                </Link>
                <Link
                  href="/proyectos"
                  className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Ver Obras
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
