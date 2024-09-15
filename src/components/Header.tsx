'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-white hover:text-white hover:cursor-pointer flex items-center">
          <i className="fa-brands fa-neos text-3xl"></i>
          ahin
        </Link>
        <ul className="flex space-x-8">
          {['Home', 'About', 'Projects', 'Achievements', 'Contact', 'Resume'].map((item) => (
            <li key={item}>
              <Link 
                href={item === 'Home' ? '/' : item === 'Resume' ? '/resume' : `/${item.toLowerCase()}`} 
                className="relative text-white group"
              >
                <span 
                  className={`transition-colors duration-300 hover:text-gray-400 ${pathname === (item === 'Home' ? '/' : item === 'Resume' ? '/resume' : `/${item.toLowerCase()}`) ? 'text-gray-200' : 'text-gray-300'}`}
                >
                  {item}
                </span>
                {pathname === (item === 'Home' ? '/' : item === 'Resume' ? '/resume' : `/${item.toLowerCase()}`) && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                    initial={false}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
