'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { 
  MapPin, 
  Mail, 
  Clock, 
  ArrowUp, 
  ShieldCheck,
  Phone
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros (Misión, Visión, Valores)', href: '/nosotros' },
    { name: 'Servicios Especializados', href: '/servicios' },
    { name: 'Proyectos y Obras', href: '/proyectos' },
    { name: 'Contacto y Presupuestos', href: '/contacto' },
  ];

  const services = [
    'Fabricación y Montaje de Estructuras Metálicas',
    'Tuberías Industriales, Vapor y Agua Helada',
    'Barandillas y Pasarelas en Acero Inoxidable',
    'Soldaduras Calificadas (TIG, MIG, Electrodo)',
    'Mantenimiento y Reparación de Instalaciones',
    'Proyectos Singulares y Estructuras a Medida',
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs w-full overflow-hidden">
      {/* Top Banner inside Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 lg:py-16 bg-slate-950 w-full"
      >
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
            <div className="md:col-span-8">
              <h3 className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight">
                ¿Planea un proyecto de estructuras o tuberías en República Dominicana?
              </h3>
              <p className="mt-2 text-base text-slate-300 font-normal max-w-3xl leading-relaxed">
                Póngase en contacto con nuestro equipo de ingeniería para coordinar una inspección en obra o evaluar sus planos técnicos.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-wrap items-center gap-3 md:justify-end">
              <Link
                href="/contacto"
                className="px-6 py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Solicitar Presupuesto
              </Link>
              <Link
                href="/nosotros"
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Conocer Nosotros
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Links */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" showSubtitle={true} lightMode={false} />
            <p className="text-slate-400 text-sm leading-relaxed pt-2 font-normal">
              Empresa especializada en la fabricación, montaje y mantenimiento de estructuras metálicas, sistemas de tuberías y trabajos de soldadura en general en Punta Cana – Bávaro y toda la República Dominicana.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-lime-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Materiales certificados y personal calificado AWS/ASME</span>
            </div>
          </div>

          {/* Navigation Links Col (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-2 text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 bg-lime-500 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-xs">
              {services.slice(0, 4).map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/servicios"
                    className="hover:text-white transition-colors block text-slate-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contacto Corporativo
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-bold text-sm">Punta Cana – Bávaro</div>
                  <div className="text-slate-400">Provincia La Altagracia, República Dominicana</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-lime-500 shrink-0" />
                <a
                  href="mailto:premom@premomprefabricados.com"
                  className="text-slate-200 font-bold hover:text-white transition-colors break-all"
                >
                  premom@premomprefabricados.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-lime-500 shrink-0" />
                <div className="text-slate-300">
                  Lunes a Sábado: 7:30 AM – 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} PREMOM SRL. Todos los derechos reservados. Punta Cana – Bávaro, República Dominicana.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Volver arriba</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
