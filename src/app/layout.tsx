import type { Metadata } from 'next';
import { Exo_2, Nunito } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';
export const metadata: Metadata = {
  title: 'Nishan',
  description: 'agency website',
};

export const nunito = Nunito({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

const exo_2 = Exo_2({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo_2.className} `}>
        <Navbar />
        <main className="flex  flex-col min-h-[calc(100vh-5rem)]">
          <div className="flex-1 flex flex-col h-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
