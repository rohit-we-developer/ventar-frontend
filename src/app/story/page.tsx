"use client";

import Navbar from "@/components/navbar/Navbar";
import { motion } from "framer-motion";
import { Target, Rocket, Lightbulb } from "lucide-react";

export default function StoryPage() {
  return (
    <main className="bg-[#f3dfc9] min-h-screen">

      <Navbar />

      {/* 🔥 HERO STORY (CENTERED PREMIUM) */}
      <section className="pt-36 pb-20 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
        >
          Our Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-gray-700 text-lg leading-relaxed"
        >
          Ventar was founded with a clear mission—to help businesses grow through reliable, modern, and scalable technology solutions. What started as a passion for building high-quality digital products quickly turned into a vision of creating impactful, scalable, and future-ready solutions for businesses across industries.

          <br /><br />

          Over time, we have worked with startups, entrepreneurs, and enterprises, helping them transform ideas into real, working products. Our expertise spans across web development, cloud infrastructure, DevOps, and scalable system design, allowing us to deliver solutions that are not only technically sound but also aligned with real business goals.

          <br /><br />

          At Ventar, we focus on understanding the core problem before jumping into development. We believe that the best solutions come from clarity, simplicity, and strong execution. Every project we take is treated with responsibility, precision, and a commitment to delivering measurable results.

          <br /><br />

          Our approach is centered around performance, security, and scalability. Whether it's a small application or a large-scale system, we ensure that every solution is built to handle growth, adapt to future changes, and deliver consistent performance.

          <br /><br />

          What truly sets us apart is our mindset. We don’t just build projects—we build relationships. We work as partners with our clients, helping them navigate challenges, make better technical decisions, and continuously improve their systems.

          <br /><br />

          Through transparent communication, structured workflows, and a strong focus on quality, we aim to deliver solutions that go beyond expectations and create long-term value.
        </motion.p>
      </section>

      {/* 🔥 STATS (CONSISTENT CARDS) */}
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">

          {[
            { num: "50+", text: "Projects Delivered" },
            { num: "20+", text: "Happy Clients" },
            { num: "3+", text: "Years Experience" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg transition h-[160px] flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold text-orange-500">
                {item.num}
              </h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🔥 MISSION + VISION */}
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To empower businesses with scalable, secure, and innovative technology solutions that drive measurable growth, efficiency, and long-term success.",
            },
            {
              icon: Rocket,
              title: "Our Vision",
              desc: "To become a trusted global technology partner known for delivering impactful, future-ready digital solutions.",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg flex gap-4 items-start h-[180px]"
              >
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Icon className="text-orange-500" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* 🔥 VALUES (FIXED SAME SIZE) */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: Lightbulb,
              title: "Innovation",
              desc: "We explore new ideas and build smarter solutions.",
            },
            {
              icon: Target,
              title: "Transparency",
              desc: "Clear communication in every step of development.",
            },
            {
              icon: Rocket,
              title: "Growth",
              desc: "Solutions built for long-term scalability.",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center h-[200px] flex flex-col justify-center"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-100 rounded-full mb-4">
                  <Icon className="text-orange-500" size={26} />
                </div>

                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </section>

    </main>
  );
}