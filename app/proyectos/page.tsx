import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { ProjectsGallery } from '@/components/ProjectsGallery';

export const metadata: Metadata = {
  title: 'Proyectos y Obras | PREMOM SRL - Punta Cana',
  description: 'Catálogo de obras y proyectos ejecutados por PREMOM SRL: estructuras metálicas para hoteles, naves logísticas, piping de vapor y agua helada en República Dominicana.',
};

export default function ProyectosPage() {
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
                <span className="text-white">Proyectos</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-white">
                Obras y Proyectos Ejecutados
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Registro fotográfico de obras de estructuras pesadas, piping y soldadura certificada en Punta Cana – Bávaro y toda la República Dominicana.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery with the exact 3-column reference card style on dark background */}
        <ProjectsGallery />

        {/* Contact CTA */}
        <section className="py-20 bg-slate-100 w-full">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              ¿Tiene un proyecto similar en planificación o licitación?
            </h3>
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Facilítenos sus planos en AutoCAD (DWG) o PDF para generar una propuesta económica detallada y cronograma de montaje garantizado.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/contacto"
                className="px-8 py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Solicitar Cotización de Proyecto
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
