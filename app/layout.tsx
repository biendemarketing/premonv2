import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PREMOM | Tuberías y Estructuras Metálicas - Punta Cana',
  description: 'Empresa corporativa especializada en fabricación y montaje de estructuras metálicas, piping de vapor y agua helada, y soldadura certificada en Punta Cana y República Dominicana.',
  openGraph: {
    title: 'PREMOM | Tuberías y Estructuras Metálicas',
    description: 'Empresa corporativa especializada en fabricación y montaje de estructuras metálicas, piping y soldadura certificada.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-white text-slate-800 font-sans font-normal antialiased selection:bg-lime-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

