import '@/style/globals.css';
import { Poppins, Quicksand } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const quicksand = Quicksand({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Nahin Intesher - Portfolio',
  description: 'Problem Solver & Dedicated Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-gradient-to-t from-gray-950 to-blue-900 text-white flex flex-col min-h-screen `}>
        <Header />
        <main className="flex-grow min-w-screen">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
