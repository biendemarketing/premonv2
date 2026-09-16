'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Wrench,
  Clock
} from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
}

export function Hero() {
  const slides: Slide[] = [
    {
      id: 1,
      image: '/slider/projet-1.webp',
      title: 'Estructura y Marquesina de Acero con Andamiaje de Montaje',
    },
    {
      id: 2,
      image: '/slider/projet-2.webp',
      title: 'Estructuras Metálicas para Resort Hotelero y Parque Acuático',
    },
    {
      id: 3,
      image: '/projects/project-steel-frame.webp',
      title: 'Montaje e Izaje de Vigas Estructurales de Acero Frente al Mar',
    },
    {
      id: 4,
      image: '/slider/projet-4.webp',
      title: 'Estructuras Metálicas y Cubiertas en Entorno Costero',
    },
    {
      id: 5,
      image: '/projects/project-piping-chiller.webp',
      title: 'Red de Tuberías Industriales y Piping para Batería de Chillers',
    },
    {
      id: 6,
      image: '/projects/project-welding-shop.webp',
      title: 'Prefabricación y Soldadura Homologada en Taller Propio',
    },
    {
      id: 7,
      image: '/slider/projet-3.webp',
      title: 'Superestructura Metálica Multinivel con Losa de Concreto',
    },
    {
      id: 8,
      image: '/slider/projet-5.webp',
      title: 'Montaje con Grúa Telescópica de Estructura de Acero Frente al Mar',
    },
    {
      id: 9,
      image: '/slider/projet-6.webp',
      title: 'Estructura Metálica Piramidal y Cenador para Complejo Turístico',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Automatic slider transition every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const current = slides[currentIndex];

  return (
    <section 
      id="inicio" 
      className="relative w-full min-h-screen flex flex-col justify-between bg-slate-950 text-white overflow-hidden pt-28 lg:pt-32"
    >
      {/* Background Image Slider with Automatic Crossfade */}
      <div className="absolute inset-0 w-full h-full z-0 select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Balanced industrial overlay allowing images to be clearly visible and vibrant */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Full-Page Hero Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex-1 flex flex-col justify-center py-12 lg:py-20">
        <div className="w-full max-w-5xl 2xl:max-w-6xl">
          {/* Master Headline with Font Entrance Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-normal tracking-tight text-white leading-[1.12] uppercase drop-shadow-md"
          >
            Tuberías y Estructuras Metálicas
          </motion.h1>

          {/* Subheading / Value proposition with Font Entrance Animation */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base sm:text-xl lg:text-2xl text-slate-200 leading-relaxed w-full max-w-3xl 2xl:max-w-4xl font-normal"
          >
            Fabricación en taller propio, montaje en obra con grúas telescópicas y soldadura certificada para proyectos hoteleros, comerciales e industriales en Punta Cana y toda la República Dominicana.
          </motion.p>

          {/* Call to Actions - Using Browser Routes */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Link
              href="/contacto"
              className="px-8 py-4 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-2.5"
              id="hero-quote-cta"
            >
              <span>Solicitar Presupuesto</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            <Link
              href="/proyectos"
              className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              Ver Obras Ejecutadas
            </Link>

            <Link
              href="/nosotros"
              className="px-7 py-4 bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              Sobre Nosotros
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Slide Navigation Controls & Minimalist Capability Strip (Bottom of Hero) */}
      <div className="relative z-10 w-full bg-slate-950/90 backdrop-blur-md">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Key Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto flex-1 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Building2 className="w-4 h-4 text-lime-400 shrink-0" />
              <span>Taller propio de prefabricación</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
              <span>Soldadores calificados AWS / ASME</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Wrench className="w-4 h-4 text-lime-400 shrink-0" />
              <span>Tratamiento anticorrosivo marino</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="w-4 h-4 text-lime-400 shrink-0" />
              <span>100% Cumplimiento de plazos</span>
            </div>
          </div>

          {/* Slider Pagination & Arrow Controls */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Counter */}
            <div className="text-xs font-bold tracking-widest text-slate-300">
              <span className="text-lime-400 text-sm">0{current.id}</span>
              <span className="mx-1 text-slate-500">/</span>
              <span>0{slides.length}</span>
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                aria-label="Diapositiva anterior"
                className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Siguiente diapositiva"
                className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Linear progress bar */}
        <div className="w-full h-1 bg-slate-800 flex">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir a diapositiva ${idx + 1}`}
              className={`h-full flex-1 transition-colors ${
                currentIndex === idx ? 'bg-lime-500' : 'bg-transparent hover:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
