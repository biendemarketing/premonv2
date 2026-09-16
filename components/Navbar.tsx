'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ArrowRight 
} from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      {/* Top Corporate Information Strip (Phone number removed per user directive) */}
      <div className={`hidden lg:block text-xs py-2 transition-colors ${
        isScrolled ? 'bg-slate-100/60 text-slate-700' : 'bg-slate-100 text-slate-700'
      }`}>
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-lime-700 shrink-0" />
              <span>Punta Cana – Bávaro, República Dominicana</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Lunes a Sábado: 7:30 AM – 6:00 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="mailto:premom@premomprefabricados.com"
              className="flex items-center gap-1.5 hover:text-lime-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>premom@premomprefabricados.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation with Browser Routing */}
      <nav
        className={`transition-all duration-200 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center focus:outline-none">
            <Logo size="md" showSubtitle={true} lightMode={true} />
          </Link>

          {/* Desktop Navigation Links with Browser Routing */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm tracking-wide transition-colors ${
                    isActive
                      ? 'text-lime-700 font-medium'
                      : 'text-slate-700 hover:text-lime-700 font-normal'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button - Solicitar Presupuesto */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-lime-600 hover:bg-lime-700 text-white font-medium text-xs uppercase tracking-wider transition-colors"
              id="navbar-quote-btn"
            >
              <span>Solicitar Presupuesto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-slate-100 text-slate-800 hover:bg-slate-200"
              aria-label="Menú principal"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-3">
              <div className="py-2 text-xs text-slate-600 flex items-center justify-between">
                <span>Punta Cana – Bávaro, R.D.</span>
                <span className="text-lime-800 font-bold">PREMOM SRL</span>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? 'text-lime-700 font-medium'
                          : 'text-slate-700 hover:text-lime-700 font-normal'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 flex flex-col gap-2">
                <Link
                  href="/contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
