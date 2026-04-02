"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  {
    name: "About Us",
    dropdown: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Aim", href: "/about-us/our-aim" },
      { name: "Team", href: "/about-us/team" },
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
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
          flex items-center justify-between h-18 px-6
          rounded-2xl transition-all duration-300
          ${
            scrolled
              ? "bg-white shadow-xl"
              : "bg-white border border-gray-200"
          }
        `}
        >
          {/* LOGO */}
          <Link href="/">
            <motion.img
              src="/logo.png2.jpeg"
              alt="Ventar Logo"
              initial={{ opacity: 0, scale: 0.85, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.4 }}
              className="h-14 md:h-16 object-contain cursor-pointer"
            />
          </Link>

          {/* DESKTOP */}
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
                    <span className="cursor-pointer text-black font-medium hover:text-orange-500 transition">
                      {link.name}
                    </span>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
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
                    </AnimatePresence>
                  </div>
                );
              }

              // 🔥 CONTACT BUTTON (DESKTOP)
              if (link.name === "Contact") {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition"
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black font-medium hover:text-orange-500 transition"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              <span className="text-black text-2xl">☰</span>
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

              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name}>
                      {/* CLICK TITLE */}
                      <div
                        onClick={() => setMobileDropdown(!mobileDropdown)}
                        className="cursor-pointer font-medium text-gray-700"
                      >
                        {link.name}
                      </div>

                      {/* DROPDOWN */}
                      <AnimatePresence>
                        {mobileDropdown && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col mt-2 gap-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenu(false)}
                                className="text-sm text-gray-600 hover:text-orange-500"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // 🔥 CONTACT BUTTON (MOBILE)
                if (link.name === "Contact") {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenu(false)}
                      className="bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition"
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenu(false)}
                    className="text-gray-700 font-medium hover:text-orange-500"
                  >
                    {link.name}
                  </Link>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}