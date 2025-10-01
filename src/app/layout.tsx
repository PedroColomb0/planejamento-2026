import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PageTransition } from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apresentação Animada',
  description: 'Exemplo de transição de página com Next.js e Framer Motion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Adicione suppressHydrationWarning aqui
    <html lang="pt-br" suppressHydrationWarning> 
      <body className={inter.className}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}