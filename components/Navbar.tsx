'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { MegaMenu, type MegaMenuTab } from './MegaMenu';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<MegaMenuTab | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Store information from previous render to close mega menu on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMegaMenuOpen(false);
    setActiveTab(null);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setIsMegaMenuOpen(false);
        setActiveTab(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks: { name: string; href: string; tab: MegaMenuTab }[] = [
    { name: 'Inicio', href: '/', tab: 'inicio' },
    { name: 'Nosotros', href: '/nosotros', tab: 'nosotros' },
    { name: 'Servicios', href: '/servicios', tab: 'servicios' },
    { name: 'Proyectos', href: '/proyectos', tab: 'proyectos' },
    { name: 'Contacto', href: '/contacto', tab: 'contacto' },
  ];

  const handleLinkMouseEnter = (tab: MegaMenuTab) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveTab(tab);
    setIsMegaMenuOpen(true);
  };

  const handleLinkMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
      setActiveTab(null);
    }, 200);
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleMenuMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
      setActiveTab(null);
    }, 200);
  };

  const handleCloseMegaMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMegaMenuOpen(false);
    setActiveTab(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || isMegaMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
    >
      {/* Top Corporate Information Strip */}
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
        className={`relative transition-all duration-200 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center focus:outline-none"
            onClick={handleCloseMegaMenu}
          >
            <Logo size="md" showSubtitle={true} lightMode={true} />
          </Link>

          {/* Desktop Navigation Links with Mega Menu on Hover */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = isMegaMenuOpen && activeTab === link.tab;

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleLinkMouseEnter(link.tab)}
                  onMouseLeave={handleLinkMouseLeave}
                >
                  <Link
                    href={link.href}
                    onClick={handleCloseMegaMenu}
                    className={`px-3.5 py-2 text-sm tracking-wide transition-all inline-flex items-center gap-1.5 rounded-sm ${
                      isActive || isHovered
                        ? 'text-lime-700 font-medium bg-lime-50/60'
                        : 'text-slate-700 hover:text-lime-700 hover:bg-slate-50 font-normal'
                    }`}
                    aria-expanded={isHovered}
                  >
                    <span>{link.name}</span>
                    <ChevronDown 
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        isHovered ? 'rotate-180 text-lime-700' : ''
                      }`} 
                    />
                  </Link>

                  {/* Active bottom line indicator */}
                  {(isActive || isHovered) && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-lime-600 pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action Button - Solicitar Presupuesto */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contacto"
              onClick={handleCloseMegaMenu}
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

        {/* Desktop Mega Menu Dropdown */}
        <MegaMenu
          activeTab={activeTab}
          isOpen={isMegaMenuOpen}
          onClose={handleCloseMegaMenu}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        />
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white overflow-hidden border-t border-slate-200"
          >
            <div className="px-5 pt-3 pb-6 space-y-3">
              <div className="py-2 text-xs text-slate-600 flex items-center justify-between border-b border-slate-100 pb-2">
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
                      className={`px-3 py-2.5 text-sm transition-colors flex items-center justify-between ${
                        isActive
                          ? 'text-lime-700 font-medium bg-lime-50/50'
                          : 'text-slate-700 hover:text-lime-700 font-normal'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 flex flex-col gap-2 border-t border-slate-100">
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
