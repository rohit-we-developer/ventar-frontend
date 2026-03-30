"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
export default function About() {
  return (
    <div className="bg-[#f8f7f4] text-gray-800">
    <Navbar />
      {/* HERO */}
      <section className="relative py-28 text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">

        {/* glow effect */}
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Learn more about our mission,
            vision, and commitment
          </h1>

          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            We build technology that empowers businesses, simplifies complexity,
            and creates meaningful digital experiences that drive real growth.
          </p>
        </motion.div>

      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition"
        >
          <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
            Ventar IT Solutions is built on the idea that technology should feel seamless,
            purposeful, and empowering. We help businesses transform ideas into reliable
            digital experiences through thoughtfully designed and expertly engineered
            technology solutions that are built to last.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
            With a strong foundation in software development, cloud infrastructure,
            and modern digital systems, we partner with organizations to create solutions
            that are both functional and future-ready. Every project is approached with
            precision, clarity, and a deep understanding of real-world business needs.
          </p>

          <p className="text-gray-700 leading-relaxed text-[15px]">
            At Ventar, we focus on long-term value rather than short-term delivery.
            Our approach emphasizes collaboration, transparency, and technical excellence —
            ensuring every solution not only meets today's needs but is ready for tomorrow's growth.
          </p>
        </motion.div>

      </section>

      {/* NAV CARDS */}
      <section className="pb-10 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        <Link href="/about-us/our-aim">
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group cursor-pointer p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition relative overflow-hidden"
          >
            {/* glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-orange-600 mb-2 group-hover:translate-x-1 transition">
                Our Aim →
              </h3>

              <p className="text-gray-600 text-sm">
                Discover our mission, vision, and long-term strategic direction that drives innovation and impact.
              </p>
            </div>
          </motion.div>
        </Link>

        <Link href="/about-us/team">
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group cursor-pointer p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-orange-600 mb-2 group-hover:translate-x-1 transition">
                Our Team →
              </h3>

              <p className="text-gray-600 text-sm">
                Meet the passionate minds behind Ventar who bring ideas to life with creativity and expertise.
              </p>
            </div>
          </motion.div>
        </Link>

      </section>

      {/* CTA SECTION (FIXED PROPER POSITION) */}
      <section className="pb-20 px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-10 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">
            Ready to work with us?
          </h2>

          <p className="text-gray-600 mb-6 text-sm">
            Let’s collaborate to build powerful digital solutions that create real impact.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">

            <Link href="/contact">
              <button className="px-8 py-3 bg-orange-600 text-white rounded-full 
              hover:bg-orange-700 hover:scale-105 transition shadow-md">
                Contact Us →
              </button>
            </Link>

            <Link href="/">
              <button className="px-8 py-3 bg-gray-200 rounded-full 
              hover:bg-gray-300 hover:scale-105 transition shadow-sm">
                ← Back to Home
              </button>
            </Link>

          </div>
        </motion.div>

      </section>

    </div>
  );
}