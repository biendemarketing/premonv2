'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsGallery } from '@/components/ProjectsGallery';
import { WorkProcess } from '@/components/WorkProcess';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-lime-200 selection:text-slate-900 font-sans">
      {/* Barra de Navegación Corporativa con Browser Routing */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="flex-1">
        {/* Full-page Hero Slider Automático */}
        <Hero />

        {/* Sección Nosotros: Misión, Visión y Valores */}
        <AboutSection />

        {/* Servicios Especializados con Cards Minimalistas */}
        <ServicesSection onSelectServiceForQuote={handleServiceSelect} />

        {/* Galería de Obras Ejecutadas con estilo de 3 columnas en fondo oscuro */}
        <ProjectsGallery />

        {/* Metodología de Trabajo e Ingeniería */}
        <WorkProcess />

        {/* Razones para elegir a PREMOM */}
        <WhyChooseUs />

        {/* Formulario de Contacto y Datos Oficiales */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Botón Flotante Oficial de WhatsApp (Sin fondo, solo icono oficial) */}
      <FloatingWhatsApp />
    </div>
  );
}
