'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { ContactSection } from '@/components/ContactSection';

function ContactContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('servicio') || '';

  return <ContactSection initialService={serviceParam} />;
}

export default function ContactoPage() {
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
                <span className="text-white">Contacto</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-white">
                Contacto y Presupuestos
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Póngase en contacto directo con nuestro departamento técnico para coordinar visitas a obra, evaluación de planos o presupuestos detallados en Punta Cana y todo el país.
              </p>
            </div>
          </div>
        </section>

        {/* Form and Contact Information */}
        <Suspense fallback={<div className="py-20 text-center text-slate-500">Cargando formulario...</div>}>
          <ContactContent />
        </Suspense>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
