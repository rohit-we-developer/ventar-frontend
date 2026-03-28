"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#f3dfc9] overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-5xl font-bold text-orange-500"
          >
            Our Story
          </motion.h2>

          {/* TEXT */}
          {[
            `Ventar was founded with a clear mission—to help businesses grow through reliable, modern, and scalable technology solutions. What began as a passion for building high-quality digital products has evolved into a company trusted by startups, entrepreneurs, and growing enterprises alike. From the very beginning, our goal has been simple: build technology that solves real-world problems and delivers measurable impact.`,

            `We work closely with clients across multiple industries, understanding their challenges, business goals, and long-term vision. This allows us to design and develop secure, high-performance web applications, cloud-based systems, and scalable platforms that are not only technically strong but also aligned with business success.`,

            `At Ventar, we don’t believe in one-size-fits-all solutions. Every project is approached with a fresh perspective, focusing on simplicity, efficiency, and future scalability. Our team ensures that every product we build is optimized for performance, security, and seamless user experience.`,

          ].map((text, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-5 text-gray-700 leading-relaxed text-base md:text-lg max-w-xl"
            >
              {text}
            </motion.p>
          ))}

          {/* BUTTON */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href="/story">
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
                Read Full Story →
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6 }}
          className="relative group"
        >
          {/* glow */}
          <div className="absolute inset-0 bg-orange-400 blur-xl opacity-20 rounded-2xl group-hover:opacity-30 transition"></div>

          <div className="relative bg-white p-8 rounded-2xl shadow-lg border">

            <h3 className="text-xl font-semibold mb-5 text-gray-900">
              Why Ventar?
            </h3>

            <ul className="space-y-4 text-gray-600">
              {[
                "Experienced team across modern technologies",
                "Strong focus on performance, scalability, and security",
                "Clear communication and structured development process",
                "Reliable delivery timelines with consistent quality",
                "Long-term collaboration and continuous support mindset",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-orange-500">✔</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}