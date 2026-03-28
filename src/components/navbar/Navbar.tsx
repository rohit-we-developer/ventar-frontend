"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  {
    name: "About Us",
    dropdown: [
      { name: "About Us", href: "#about" },
      { name: "Our Aim", href: "#aim" },
      { name: "Team", href: "#team" },
    ],
  },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-6xl"
      >
        <div
          className={`
          flex items-center justify-between h-16 px-6
          rounded-2xl transition-all duration-300
          ${
            scrolled
              ? "bg-orange-500/90 backdrop-blur-xl shadow-xl"
              : "bg-white/20 backdrop-blur-lg border border-white/30"
          }
        `}
        >
          {/* LOGO */}
          <h1 className="text-xl font-bold text-white">VENTAR</h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <span className="cursor-pointer text-white font-medium hover:text-orange-200 transition">
                      {link.name}
                    </span>

                    {open && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-10 left-0 w-48 bg-white rounded-xl shadow-xl p-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 rounded-lg transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white font-medium hover:text-orange-200 transition"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              <span className="text-white text-2xl">☰</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-xl shadow-xl p-6 z-[90]"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-gray-700 font-medium hover:text-orange-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}