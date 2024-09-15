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
      <body className={`${quicksand.className} bg-gray-100 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}
