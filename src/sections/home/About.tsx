"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Rocket, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#f8f7f4] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative group"
        >
          <img
            src="/about-illustration.png"
            className="w-full max-w-md mx-auto transition duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_35px_rgba(255,115,0,0.6)]"
          />

          {/* glow effect */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500/10 blur-2xl" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold mb-6">
            About Ventar
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Ventar IT Solutions is built on the idea that technology should feel seamless,
            purposeful, and empowering. We help businesses transform ideas into reliable
            digital experiences through thoughtfully designed and expertly engineered
            technology solutions that are built to last.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            With a strong foundation in software development, cloud infrastructure,
            and modern digital systems, we partner with organizations to create solutions
            that are both functional and future-ready.
          </p>

          {/* FEATURES */}
          <div className="space-y-4 mb-8">

            <div className="flex gap-3 items-start group hover:translate-x-2 transition">
              <Sparkles className="text-orange-600 mt-1 group-hover:rotate-12 transition" />
              <p className="text-gray-700">
                Clean, scalable and modern solutions
              </p>
            </div>

            <div className="flex gap-3 items-start group hover:translate-x-2 transition">
              <Rocket className="text-orange-600 mt-1 group-hover:rotate-12 transition" />
              <p className="text-gray-700">
                Fast execution with real impact
              </p>
            </div>

            <div className="flex gap-3 items-start group hover:translate-x-2 transition">
              <ShieldCheck className="text-orange-600 mt-1 group-hover:rotate-12 transition" />
              <p className="text-gray-700">
                Reliable and long-term focused systems
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <Link href="/about-us">
            <button className="px-8 py-3 bg-orange-600 text-white rounded-full hover:scale-105 hover:shadow-lg transition">
              Read More →
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}