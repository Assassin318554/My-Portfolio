"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavItemProps {
  item: string;
  pathname: string;
  mobile?: boolean;
  onClick?: () => void;
}

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Projects",
    "Achievements",
    "Contact",
    "Resume",
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <header className="bg-blue-950 shadow-2xl ">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold text-white hover:text-amber-300 transition-colors duration-300 flex items-center space-x-2"
          >
            <i className="fa-brands fa-neos tracking-widest text-amber-300 text-2xl font-bold"></i>
            ahin
          </Link>
          <div className="hidden md:flex space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <NavItem key={item} item={item} pathname={pathname} />
            ))}
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavItem
              key={item}
              item={item}
              pathname={pathname}
              mobile={true}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        </div>
      </motion.div>
    </header>
  );
};

const NavItem = ({ item, pathname, mobile = false, onClick }: NavItemProps) => {
  const isActive =
    pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`);
  const baseClasses =
    "relative block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
  const mobileClasses = mobile
    ? "text-white hover:bg-amber-600 hover:text-white"
    : "";
  const desktopClasses = !mobile
    ? "text-gray-300 hover:text-white hover:bg-amber-600"
    : "";
  const activeClasses = isActive ? "text-white bg-amber-600" : "";

  return (
    <Link
      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
      className={`${baseClasses} ${mobileClasses} ${desktopClasses} ${activeClasses}`}
      onClick={onClick}
    >
      {item}
      {isActive && !mobile && (
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-200"
          layoutId="underline"
          initial={false}
        />
      )}
    </Link>
  );
};

export default Header;
