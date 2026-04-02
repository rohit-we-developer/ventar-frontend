"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";

const team = [
  {
    name: "Krish Shinde",
    role: "MD, Lanes Products",
    img: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "Sai Swagatam Swain",
    role: "MD, Lanes Agency",
    img: "https://i.pravatar.cc/400?img=13",
  },
  {
    name: "Aditya Tiwari",
    role: "Head of Finance",
    img: "https://i.pravatar.cc/400?img=14",
  },
  {
    name: "Bhumika Rawat",
    role: "MD, Lanes Media",
    img: "https://i.pravatar.cc/400?img=15",
  },
  {
    name: "Samruddhi Daphal",
    role: "MD, Lanes Creative",
    img: "https://i.pravatar.cc/400?img=16",
  },
];

export default function Team() {
  // 🔥 Cursor follower
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: any) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-[#f6f5f2] text-black relative"
    >
      <Navbar />

      {/* 🔥 CURSOR FOLLOWER */}
      <motion.div
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="fixed top-0 left-0 w-6 h-6 bg-black rounded-full pointer-events-none z-50 mix-blend-difference"
      />

      {/* ===== FOUNDER ===== */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24">

        <p className="text-sm tracking-[4px] text-gray-400 mb-4">
          {"{ MEET THE TEAM }"}
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mb-16">
          THE FOUNDER
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden group cursor-pointer relative"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              className="w-full h-[520px] object-cover"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Hello, I'm Adinath.
            </h2>

            <p className="text-gray-600 mb-6">
              I build systems that actually work — not just look good. My focus is
              understanding the real problem and engineering scalable solutions.
            </p>

            <p className="text-gray-600 mb-6">
              I’ve worked across development, ML, and product systems — helping
              me design efficient and real-world-ready systems.
            </p>

            <p className="text-gray-600 mb-10">
              No fluff. Just strong fundamentals and execution.
            </p>

            <div className="space-y-2 text-sm text-gray-700">
              <p>Founder & CEO — 2024–Now</p>
              <p> Cyber Security Specialist — 2023–2024</p>
              <p>Freelance Developer — 2020–2023</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              Contact Founder
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <p className="text-sm tracking-[4px] text-gray-400 mb-4 text-center">
          {"{ CORE STRUCTURE }"}
        </p>

        <h2 className="text-5xl font-bold text-center mb-16">
          Vertical Leads
        </h2>

        {/* STAGGER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10"
        >
          {team.map((member, i) => {
            const rotateX = useMotionValue(0);
            const rotateY = useMotionValue(0);

            const handleMove = (e: any) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const midX = rect.width / 2;
              const midY = rect.height / 2;

              rotateX.set(-(y - midY) / 10);
              rotateY.set((x - midX) / 10);
            };

            const reset = () => {
              rotateX.set(0);
              rotateY.set(0);
            };

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer"
              >
                <motion.div
                  onMouseMove={handleMove}
                  onMouseLeave={reset}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative rounded-2xl overflow-hidden"
                >
                  <motion.img
                    src={member.img}
                    className="w-full h-[320px] object-cover grayscale"
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white p-5 text-center">

                    <p className="text-sm">
                      Precision, clarity, and execution define how we build.
                    </p>

                    <div className="flex gap-2 mt-4">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>

                  </div>
                </motion.div>

                <div className="mt-4 text-center">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ===== CTA ===== */}
      <section className="text-center px-6 pb-28 max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-6">
          Beyond the Leads
        </h2>

        <p className="text-gray-600 mb-10">
          We operate as a remote-first collective, scaling with top talent globally.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-10 py-4 rounded-full"
        >
          Message us to join
        </motion.button>

      </section>
    </div>
  );
}