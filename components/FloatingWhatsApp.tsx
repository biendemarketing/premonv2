'use client';

import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { X } from 'lucide-react';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Popup */}
      {isOpen && (
        <div className="mb-3 bg-white p-4 max-w-xs text-xs text-slate-700 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-700"
            aria-label="Cerrar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 bg-emerald-600" />
            Ingeniería PREMOM en Línea
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed mb-3">
            ¿Desea consultar sobre estructuras metálicas, tuberías o soldadura? Escríbanos directamente por WhatsApp.
          </p>
          <a
            href="https://wa.me/18293802005?text=Hola%20PREMOM,%20deseo%20asesor%C3%ADa%20t%C3%A9cnica%20y%20presupuesto."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-center block transition-colors text-xs flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Iniciar Conversación</span>
          </a>
        </div>
      )}

      {/* Floating Action Button - Sin fondo, solo el icono oficial de WhatsApp sin sombras ni trazos */}
      <div className="relative group">
        <a
          href="https://wa.me/18293802005?text=Hola%20PREMOM,%20deseo%20asesor%C3%ADa%20t%C3%A9cnica%20y%20presupuesto."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-0 transition-transform duration-200 hover:scale-110 active:scale-95"
          aria-label="Chat por WhatsApp al +1 (829) 380-2005"
          id="floating-whatsapp-btn"
        >
          <WhatsAppIcon className="w-14 h-14 shrink-0" />
        </a>

        {/* Hover tooltip label */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center bg-slate-900 text-white px-3 py-1.5 text-xs font-semibold whitespace-nowrap">
          Chat WhatsApp PREMOM
        </div>
      </div>
    </div>
  );
}
