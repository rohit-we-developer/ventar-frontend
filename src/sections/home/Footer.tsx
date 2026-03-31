"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="relative">

      <footer className="relative bg-[#020617] text-gray-400 pt-32 pb-10 px-6 z-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>

            <motion.img
              src="/logo.png.4.jpg"
              alt="Ventar Logo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="h-20 mb-5 object-contain"
            />

            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Building modern digital solutions that solve real-world problems 
              and deliver impactful user experiences.
            </p>

            <div className="flex gap-3">
              {[Globe].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 transition cursor-pointer border border-white/10 hover:border-orange-400"
                >
                  <Icon size={16} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              {[
                { name: "Home", link: "/" },
                { name: "Services", link: "/services" },
                { name: "About Us", link: "/about-us" },
                { name: "Careers", link: "/careers" },
                { name: "Contact", link: "/contact" },
              ].map((item, i) => (

                <li key={i}>
                  <Link href={item.link}>
                    <span className="group relative cursor-pointer hover:text-white transition">

                      {item.name}

                      {/* underline */}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />

                    </span>
                  </Link>
                </li>

              ))}

            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-sm">

              {[
                { name: "Blog", link: "/" },
                { name: "FAQs", link: "/FAQ" },
                { name: "Privacy-Policy", link: "/privacy-policy" },
                { name: "Terms-of-Service", link: "/terms-of-service" },
              ].map((item, i) => (

                <li key={i}>
                  <Link href={item.link}>
                    <span className="group relative cursor-pointer hover:text-white transition">

                      {item.name}

                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />

                    </span>
                  </Link>
                </li>

              ))}

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-orange-500" />
                <p>Pune, Maharashtra, India</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-orange-500" />
                <p>+91 9876543210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-orange-500" />
                <p>contact@ventar.in</p>
              </div>

            </div>

            {/* SUBSCRIBE */}
            <div className="mt-6">
              <p className="text-sm mb-2 text-gray-300">Stay updated</p>

              <div className="flex group">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-l-lg bg-white/5 border border-white/10 text-sm outline-none focus:border-orange-400 transition"
                />

                <button className="bg-orange-500 px-4 rounded-r-lg text-white text-sm hover:bg-orange-600 transition">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ventar. All rights reserved.
        </div>

      </footer>
    </div>
  );
}