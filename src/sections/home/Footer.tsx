"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="relative">

      {/* WAVE (PERFECT FIX) */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C300,40 600,180 900,80 C1200,0 1440,120 1440,120 L1440,0 L0,0 Z"
            fill="#020617"
          />
        </svg>
      </div> */}

      {/* FOOTER */}
      <footer className="relative bg-[#020617] text-gray-400 pt-32 pb-10 px-6 z-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Ventar
            </h2>

            <p className="text-sm leading-relaxed mb-5">
              Building modern digital solutions that solve real-world problems 
              and deliver impactful user experiences.
            </p>

            <div className="flex gap-3">
              {[Globe, ].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 transition cursor-pointer"
                >
                  <Icon size={16} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              {["Home", "Services", "About Us", "Careers", "Contact"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Resources
            </h3>

            <ul className="space-y-2 text-sm">
              {["Blog", "FAQs", "Privacy Policy", "Terms of Service"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-orange-500" />
                <p>Pune, Maharashtra, India</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500" />
                <p>+91 9876543210</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-orange-500" />
                <p>contact@ventar.in</p>
              </div>

            </div>

            <div className="mt-5">
              <p className="text-sm mb-2">Stay updated</p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-l-lg bg-white/5 border border-white/10 text-sm outline-none"
                />

                <button className="bg-orange-500 px-4 rounded-r-lg text-white text-sm hover:bg-orange-600 transition">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ventar. All rights reserved.
        </div>

      </footer>
    </div>
  );
}