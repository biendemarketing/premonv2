'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  lightMode?: boolean;
}

export function Logo({
  className = '',
  size = 'md',
  showSubtitle = true,
  lightMode = false,
}: LogoProps) {
  const sizeConfig = {
    sm: {
      width: 130,
      height: 31,
      subtext: 'text-[9px] tracking-wider',
      wrapperClass: 'w-[130px]',
    },
    md: {
      width: 175,
      height: 42,
      subtext: 'text-[10px] md:text-xs tracking-wider',
      wrapperClass: 'w-[160px] md:w-[175px]',
    },
    lg: {
      width: 225,
      height: 54,
      subtext: 'text-xs md:text-sm tracking-widest',
      wrapperClass: 'w-[225px]',
    },
    xl: {
      width: 290,
      height: 70,
      subtext: 'text-sm md:text-base tracking-widest',
      wrapperClass: 'w-[290px]',
    },
  };

  const currentSize = sizeConfig[size];
  const logoSrc = lightMode
    ? '/logo-premom-negro.svg'
    : '/logo-premom-blanco.svg';

  return (
    <div className={`inline-flex flex-col select-none ${className}`} id="premom-brand-logo">
      {/* Official PREMOM Logo SVG (Black for light mode, White for dark mode) */}
      <div className={`relative ${currentSize.wrapperClass} flex items-center`}>
        <Image
          src={logoSrc}
          alt="PREMOM - Prefabricados y Montajes"
          width={currentSize.width}
          height={currentSize.height}
          priority
          className="w-full h-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
        />
      </div>

      {showSubtitle && (
        <div className="mt-1 flex flex-col w-full">
          <div className="h-[1.5px] w-full bg-lime-500 mb-0.5" />
          <span
            className={`whitespace-nowrap text-[8px] sm:text-[8.5px] md:text-[9px] uppercase tracking-wider font-normal leading-tight ${
              lightMode ? 'text-slate-700' : 'text-slate-200'
            }`}
          >
            Tuberías y Estructuras Metálicas
          </span>
          <span
            className={`whitespace-nowrap text-[7.5px] sm:text-[8px] md:text-[8.5px] uppercase tracking-wider font-normal leading-tight mt-0.5 ${
              lightMode ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            Soldaduras en General
          </span>
        </div>
      )}
    </div>
  );
}
