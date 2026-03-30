"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
export default function OurAim() {
  return (
    <div className="bg-[#f8f7f4] text-gray-800 overflow-hidden">
<Navbar />
      {/* HERO */}
      <section className="relative py-24 text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">

        <div className="absolute w-[350px] h-[350px] bg-white/10 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[350px] h-[350px] bg-white/10 blur-[120px] bottom-[-100px] right-[-100px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Our Aim & Vision
          </h1>

          <p className="text-orange-100 text-base md:text-lg">
            Driving innovation, empowering businesses, and building scalable digital
            solutions that create real impact.
          </p>
        </motion.div>
      </section>

      {/* MISSION + VISION */}
      <section className="py-14 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="group p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/30 to-pink-500/30 hover:from-orange-500 hover:to-pink-500 transition"
        >
          <div className="bg-white p-6 rounded-2xl h-full hover:shadow-lg transition">
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-3">
              Our Mission
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our mission is to empower businesses by delivering scalable, reliable,
              and high-performance digital solutions. We bridge the gap between
              innovative ideas and real-world execution through thoughtful design,
              modern technology, and continuous improvement.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="group p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/30 to-pink-500/30 hover:from-orange-500 hover:to-pink-500 transition"
        >
          <div className="bg-white p-6 rounded-2xl h-full hover:shadow-lg transition">
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-3">
              Our Vision
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We envision a future where technology seamlessly integrates into
              every business. Our goal is to become a trusted partner that helps
              organizations innovate, scale, and succeed in an evolving digital world.
            </p>
          </div>
        </motion.div>

      </section>

      {/* VALUES */}
      <section className="py-14 px-6 bg-[#fff7ed]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Innovation",
              desc: "We continuously explore new technologies to stay ahead and deliver smarter solutions.",
            },
            {
              title: "Transparency",
              desc: "Clear communication and trust are the foundation of every project we build.",
            },
            {
              title: "Excellence",
              desc: "We focus on quality, performance, and attention to detail in everything we create.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group p-[1px] rounded-xl bg-gradient-to-br from-orange-400/30 to-pink-400/30 hover:from-orange-500 hover:to-pink-500 transition"
            >
              <div className="bg-white p-5 rounded-xl text-center hover:shadow-lg transition">
                <h3 className="text-base md:text-lg font-semibold text-orange-600 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Let’s Build Something Meaningful
          </h2>

          <p className="text-gray-600 text-sm md:text-base mb-5">
            Partner with us to transform your ideas into scalable, impactful digital solutions.
          </p>

          <Link href="/contact">
            <button className="px-7 py-2.5 bg-orange-600 text-white rounded-full hover:bg-orange-700 hover:scale-105 transition">
              Get Started →
            </button>
          </Link>
        </motion.div>

        {/* EXTRA BUTTONS */}
        <div className="mt-8 flex justify-center gap-5 flex-wrap">

          <Link href="/contact">
            <button className="px-7 py-2.5 bg-orange-600 text-white rounded-full hover:bg-orange-700 hover:scale-105 transition shadow-md">
              Contact Us →
            </button>
          </Link>

          <Link href="/">
            <button className="px-7 py-2.5 bg-gray-200 rounded-full hover:bg-gray-300 hover:scale-105 transition shadow-sm">
              ← Back to Home
            </button>
          </Link>

        </div>

      </section>

    </div>
  );
}