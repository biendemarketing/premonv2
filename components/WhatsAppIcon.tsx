import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number | string;
}

/**
 * Official WhatsApp Icon from Iconify (logos:whatsapp-icon)
 * Strict aspect-ratio preservation to prevent any stretching or distortion.
 */
export function WhatsAppIcon({ className = 'w-5 h-5', size }: WhatsAppIconProps) {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 258"
      preserveAspectRatio="xMidYMid meet"
      className={`shrink-0 aspect-square ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path
        fill="#25D366"
        d="M217.65 40.35C194.06 16.73 162.7.01 128.36 0C57.78 0 .42 57.36.39 127.97c-.01 22.57 5.89 44.59 17.13 64.08L0 258l67.56-17.72c18.86 10.28 40.11 15.7 61.73 15.7h.06c70.56 0 127.94-57.37 127.97-127.99c.02-34.34-16.66-65.7-40.27-89.34z"
      />
      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        d="M128.36 233.56h-.05c-19.16 0-37.95-5.15-54.34-14.88l-3.9-2.31l-40.42 10.6l10.79-39.4l-2.54-4.04c-10.69-17-16.33-36.67-16.32-56.84c.03-58.2 47.39-105.55 105.63-105.55c28.2 0 54.72 10.98 74.65 30.93c19.92 19.95 30.88 46.48 30.87 74.7c-.03 58.21-47.4 105.57-105.62 105.57zm57.91-79.08c-3.17-1.59-18.77-9.26-21.68-10.32c-2.91-1.06-5.02-1.59-7.14 1.59c-2.12 3.17-8.19 10.32-10.05 12.43c-1.85 2.12-3.7 2.38-6.87.79c-3.17-1.59-13.4-4.94-25.52-15.75c-9.43-8.41-15.8-18.81-17.65-21.98c-1.85-3.17-.2-4.89 1.39-6.47c1.43-1.42 3.17-3.7 4.76-5.55c1.59-1.85 2.12-3.17 3.17-5.29c1.06-2.12.53-3.97-.26-5.55c-.79-1.59-7.14-17.2-9.78-23.55c-2.58-6.19-5.2-5.35-7.14-5.45c-1.85-.1-3.97-.1-6.08-.1c-2.12 0-5.55.79-8.46 3.97c-2.91 3.17-11.11 10.85-11.11 26.46s11.37 30.69 12.96 32.81c1.59 2.12 22.38 34.18 54.23 47.94c7.58 3.27 13.5 5.23 18.11 6.7c7.61 2.42 14.54 2.08 20.01 1.26c6.11-.91 18.77-7.67 21.41-15.08c2.65-7.41 2.65-13.76 1.85-15.08c-.79-1.32-2.91-2.12-6.08-3.7z"
      />
    </svg>
  );
}

export const OfficialWhatsAppBadge = WhatsAppIcon;
