import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto y Cotizaciones',
  description: 'Comuníquese con el equipo de ingeniería de PREMOM SRL en Punta Cana. Cotizaciones de estructuras metálicas, piping industrial y soldadura en menos de 24 horas.',
  alternates: {
    canonical: 'https://premomdemo.vercel.app/contacto',
  },
  openGraph: {
    title: 'Contacto y Cotizaciones | PREMOM SRL',
    description: 'Solicite evaluación técnica y presupuesto para fabricación y montaje de estructuras de acero y tuberías industriales en República Dominicana.',
    url: 'https://premomdemo.vercel.app/contacto',
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
