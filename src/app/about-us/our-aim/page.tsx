"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import {
  Target,
  Eye,
  Sparkles,
  ShieldCheck,
  Zap,
  Rocket,
  Users,
  Layers,
  Workflow,
  Lightbulb,
  Globe,
  ArrowLeft,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function OurAim() {
  return (
    <div className="bg-[#f8f7f4] text-gray-800 overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative py-24 text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
        
        {/* glow blobs */}
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] bottom-[-100px] right-[-100px]" />

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold mb-4">Our Aim & Vision</h1>
          <p className="text-orange-100 max-w-2xl mx-auto">
            Driving innovation, empowering businesses, and building scalable digital
            solutions that create real impact.
          </p>
        </motion.div>
      </section>

      {/* 🔥 MISSION + VISION (GLASS CARDS FLOATING) */}
      <section className="py-24 px-6 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-transparent" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

          {[
            {
              icon: <Target />,
              title: "Our Mission",
              desc: "Our mission is to empower businesses by delivering scalable, reliable, and high-performance digital solutions. We bridge the gap between innovative ideas and real-world execution through thoughtful design, modern technology, and continuous improvement.",
            },
            {
              icon: <Eye />,
              title: "Our Vision",
              desc: "We envision a future where technology seamlessly integrates into every business. Our goal is to become a trusted partner that helps organizations innovate, scale, and succeed in an evolving digital world.",
            },
          ].map((item, i) => (

            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-orange-200/50 to-transparent hover:from-orange-400 transition duration-300"
            >
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition duration-300">

                <div className="text-orange-600 mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h2 className="text-xl font-semibold mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* accent line */}
                <div className="mt-6 h-[3px] w-0 bg-orange-600 transition-all duration-300 group-hover:w-14" />

              </div>
            </motion.div>

          ))}

        </div>

      </section>

      {/* 🔥 VALUES (FLOATING STRIP STYLE) */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-transparent to-orange-50" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-semibold mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                icon: <Sparkles />,
                title: "Innovation",
                desc: "We continuously explore new technologies and creative approaches to deliver smarter, future-ready solutions.",
              },
              {
                icon: <ShieldCheck />,
                title: "Transparency",
                desc: "We believe in open communication, honesty, and building trust at every step of the journey.",
              },
              {
                icon: <Zap />,
                title: "Excellence",
                desc: "We focus on delivering high-quality, performant, and reliable solutions with attention to every detail.",
              },
            ].map((item, i) => (

              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                className="group"
              >
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                  <div className="text-orange-600 mb-4 group-hover:rotate-6 transition">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>

                  <div className="mt-4 h-[3px] w-0 bg-orange-600 mx-auto transition-all duration-300 group-hover:w-12" />

                </div>
              </motion.div>

            ))}

          </div>
        </div>

      </section>

      {/* 🔥 APPROACH (CENTER TIMELINE PRO) */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative">

  <h2 className="text-3xl font-semibold text-center mb-16">
    Our Approach
  </h2>

  <div className="relative border-l-2 border-orange-200 pl-12 space-y-12">

    {[
      {
        icon: <Workflow />,
        title: "Structured Execution",
        desc: "We follow a systematic approach from planning to deployment, ensuring clarity, efficiency, and successful delivery.",
      },
      {
        icon: <Lightbulb />,
        title: "Problem Solving Mindset",
        desc: "We focus on understanding real-world problems and delivering solutions that are practical, scalable, and impactful.",
      },
      {
        icon: <Globe />,
        title: "Future Ready Thinking",
        desc: "We build solutions that are adaptable and ready for evolving technologies and changing business environments.",
      },
    ].map((item, i) => (

      <motion.div
        key={i}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="relative flex items-start gap-4 group"
      >

        {/* ICON */}
        <div className="absolute -left-8 top-1 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow text-orange-600 group-hover:scale-110 transition">
          {item.icon}
        </div>

        {/* TEXT */}
        <div className="ml-4">
          <h3 className="font-semibold mb-1">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>

      </motion.div>

    ))}

  </div>

</section>
      {/* 🔥 WHY CHOOSE (MINIMAL PREMIUM) */}
      <section className="py-24 px-6 bg-[#f1f5f9] text-center">

        <h2 className="text-3xl font-semibold mb-12">Why Choose Ventar</h2>

        <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">

          {[
            {
              icon: <Rocket />,
              title: "Scalable Solutions",
              desc: "We build systems designed to grow with your business.",
            },
            {
              icon: <Users />,
              title: "Client-Centric",
              desc: "We align closely with client goals for better results.",
            },
            {
              icon: <Layers />,
              title: "Modern Stack",
              desc: "We use latest technologies for performance and reliability.",
            },
          ].map((item, i) => (

            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="group max-w-xs"
            >
              <div className="text-orange-600 mb-3 flex justify-center group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>

              <div className="mt-3 h-[3px] w-0 bg-orange-600 mx-auto transition-all duration-300 group-hover:w-12" />
            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <motion.div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">
            Let’s Build Something Meaningful
          </h2>
          <p className="text-gray-600 mb-5">
            Partner with us to transform your ideas into scalable, impactful digital solutions.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <button className="px-6 py-2.5 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition">
                Get Started →
              </button>
            </Link>

            <Link href="/">
              <button className="px-6 py-2.5 bg-gray-200 rounded-full hover:bg-gray-300 transition flex items-center gap-2">
                <ArrowLeft size={16} /> Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}