import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Escuela Técnica PROA - Bachiller en Desarrollo de Software',
  description: 'Escuela Técnica del programa Escuelas ProA en Córdoba. Formamos desarrolladores de software con educación técnica de excelencia.',
  keywords: 'escuela técnica, PROA, desarrollo de software, programación, Córdoba, educación tecnológica',
  authors: [{ name: 'Escuela Técnica PROA' }],
  openGraph: {
    title: 'Escuela Técnica PROA - Desarrollo de Software',
    description: 'Formamos los desarrolladores del futuro con educación técnica de excelencia',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Escuela Técnica PROA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
