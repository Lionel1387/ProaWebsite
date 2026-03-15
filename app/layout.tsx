import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Proa Rebeca Guber - Bachiller en Desarrollo de Software',
  description: 'Proa Rebeca Guber del programa Escuelas ProA en Córdoba. Formamos desarrolladores de software con educación técnica de excelencia.',
  keywords: 'proa rebeca guber, desarrollo de software, programación, Córdoba, educación tecnológica, bachiller técnico, escuela programación, aprender a programar, curso programación Córdoba',
  authors: [{ name: 'Proa Rebeca Guber' }],
  metadataBase: new URL('https://escuelaproa.edu.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Proa Rebeca Guber - Desarrollo de Software',
    description: 'Formamos los desarrolladores del futuro con educación técnica de excelencia',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Proa Rebeca Guber',
    url: 'https://escuelaproa.edu.ar',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Proa Rebeca Guber - Desarrollo de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proa Rebeca Guber - Desarrollo de Software',
    description: 'Formamos los desarrolladores del futuro con educación técnica de excelencia',
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Proa Rebeca Guber',
    description: 'Escuela técnica de formación en desarrollo de software del programa Escuelas ProA',
    url: 'https://escuelaproa.edu.ar',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Agustín Garzón 1221',
      addressLocality: 'Barrio San Vicente',
      addressRegion: 'Córdoba',
      addressCountry: 'AR',
    },
    offers: {
      '@type': 'EducationalOccupationalProgram',
      name: 'Bachiller con Orientación en Desarrollo de Software',
      description: 'Formación completa en desarrollo de software y programación',
      educationalLevel: 'Secondary Education',
      programType: 'Technical Education',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+54-351-XXXX-XXXX',
      contactType: 'educational services',
      availableLanguage: ['Spanish'],
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
