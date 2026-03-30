"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
export default function Contact() {
  return (
    <div className="bg-[#f8f7f4] text-gray-800 overflow-hidden">
<Navbar />
      {/* HERO */}
      <section className="relative py-24 text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">

        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] bottom-[-120px] right-[-120px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>

          <p className="text-orange-100 text-base md:text-lg leading-relaxed">
            Have an idea, project, or vision in mind? We’d love to hear from you.
            At Ventar, we believe in building meaningful digital experiences that
            not only solve real-world problems but also create long-term value.
            Whether you're a startup, a growing business, or an enterprise — let’s
            collaborate and turn your ideas into powerful, scalable solutions.
          </p>
        </motion.div>
      </section>

      {/* MAIN */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -4 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
            />

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700 hover:scale-[1.03] transition font-medium shadow-md"
            >
              Send Message →
            </button>

          </form>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -4 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between transition"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Contact Information
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We’re always open to discussing new ideas, collaborations, and
              opportunities. Our team is committed to understanding your needs
              and delivering solutions that truly make a difference.
            </p>

            <div className="space-y-4 text-sm">

              <p><strong>📍 Location:</strong> Pune, India</p>
              <p><strong>📧 Email:</strong> contact@ventar.in</p>
              <p><strong>📞 Phone:</strong> +91 9876543210</p>

            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            We typically respond within 24 hours.
          </p>
        </motion.div>

      </section>

      {/* CAREERS CTA */}
      <section className="pb-20 px-6 flex justify-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white px-8 py-6 rounded-2xl shadow-lg flex items-center justify-between gap-8 max-w-2xl w-full border border-gray-100 transition"
        >
          <div className="flex items-center gap-5">

            <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full text-lg shadow">
              💼
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Careers
              </h3>

              <p className="text-sm text-gray-600">
                Join our growing team of innovators, developers & creators.
              </p>
            </div>

          </div>

          <Link href="/careers">
            <button className="px-5 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 hover:scale-105 transition text-sm shadow">
              Explore →
            </button>
          </Link>

        </motion.div>

      </section>

    </div>
  );
}   