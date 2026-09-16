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
  metadataBase: new URL('https://premomdemo.vercel.app'),
  title: {
    default: 'PREMOM SRL | Estructuras Metálicas y Tuberías - Punta Cana',
    template: '%s | PREMOM SRL',
  },
  description: 'Empresa líder en fabricación y montaje de estructuras metálicas, tuberías industriales de vapor y agua helada, y soldadura certificada AWS/ASME en Punta Cana, República Dominicana.',
  keywords: [
    'estructuras metálicas punta cana',
    'piping industrial república dominicana',
    'soldadura certificada AWS',
    'montaje de estructuras bávaro',
    'tuberías de vapor y agua helada',
    'PREMOM SRL',
    'metalmecánica cap cana',
    'naves industriales dominicana',
  ],
  authors: [{ name: 'PREMOM SRL', url: 'https://premomdemo.vercel.app' }],
  creator: 'PREMOM SRL',
  publisher: 'PREMOM SRL',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PREMOM SRL | Estructuras Metálicas y Tuberías Industriales',
    description: 'Empresa corporativa especializada en fabricación y montaje de estructuras metálicas, piping industrial y soldadura certificada en Punta Cana, R.D.',
    url: 'https://premomdemo.vercel.app',
    siteName: 'PREMOM SRL',
    locale: 'es_DO',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PREMOM SRL - Estructuras Metálicas y Tuberías Industriales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PREMOM SRL | Estructuras Metálicas y Tuberías Industriales',
    description: 'Fabricación y montaje de estructuras metálicas, piping industrial y soldadura certificada en Punta Cana, R.D.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'PREMOM SRL',
  alternateName: 'PREMOM Estructuras y Tuberías',
  url: 'https://premomdemo.vercel.app',
  logo: 'https://premomdemo.vercel.app/logo-premom-blanco.svg',
  image: 'https://premomdemo.vercel.app/og-image.png',
  description: 'Especialistas en fabricación, montaje y soldadura certificada de estructuras metálicas y tuberías industriales en Punta Cana, República Dominicana.',
  telephone: '+1-829-450-4221',
  email: 'premomsrl@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Barceló, Bávaro - Punta Cana',
    addressLocality: 'Punta Cana',
    addressRegion: 'La Altagracia',
    postalCode: '23000',
    addressCountry: 'DO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.582,
    longitude: -68.405,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$$',
  areaServed: [
    'Punta Cana',
    'Bávaro',
    'Cap Cana',
    'Uvero Alto',
    'La Romana',
    'Santo Domingo',
    'República Dominicana',
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-white text-slate-800 font-sans font-normal antialiased selection:bg-lime-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

