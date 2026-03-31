"use client";

import { motion } from "framer-motion";
import { Search, Layout, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search size={26} />,
    title: "Discovery",
    desc: "We deeply analyze your business needs, challenges, and goals to define a clear and effective strategy before starting any development.",
  },
  {
    icon: <Layout size={26} />,
    title: "Planning",
    desc: "We design scalable architecture and intuitive user experiences to ensure long-term success, flexibility, and seamless system performance.",
  },
  {
    icon: <Code size={26} />,
    title: "Development",
    desc: "We build high-performance, secure, and modern applications using the latest technologies and best engineering practices.",
  },
  {
    icon: <Rocket size={26} />,
    title: "Delivery",
    desc: "We launch, optimize, and continuously improve your product to ensure maximum efficiency, scalability, and long-term growth.",
  },
];

export default function Process() {
  return (
    <section className="py-28 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Process
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A structured and transparent workflow designed for efficiency, clarity, and consistent results.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-200 to-transparent hover:from-orange-400 hover:to-orange-200 transition duration-300"
            >
              <div className="h-full bg-white rounded-2xl p-6 text-center shadow-sm group-hover:shadow-2xl transition duration-300">

                {/* ICON */}
                <div className="flex justify-center mb-4 text-orange-600 group-hover:scale-110 group-hover:rotate-6 transition duration-300">
                  {step.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* ORANGE LINE */}
                <div className="mt-6 h-[3px] w-0 bg-orange-600 mx-auto transition-all duration-300 group-hover:w-10 rounded-full" />

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}