"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text: "Working with Ventar was an incredibly smooth experience. Their team understood our requirements perfectly and delivered a solution that exceeded expectations.",
  },
  {
    name: "Priya Patel",
    role: "Product Manager",
    text: "The level of professionalism and attention to detail was outstanding. We saw real improvements in our system performance.",
  },
  {
    name: "Amit Verma",
    role: "Business Owner",
    text: "Reliable, efficient, and highly skilled team. They delivered exactly what we needed, on time and with great quality.",
  },
];

// helper for avatar initials
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real feedback from clients who trust us to deliver reliable and impactful digital solutions.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-200 to-transparent hover:from-orange-400 hover:to-orange-200 transition duration-300"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-sm group-hover:shadow-2xl transition duration-300">

                {/* QUOTE ICON */}
                <div className="text-orange-600 mb-4 opacity-80">
                  <Quote size={22} />
                </div>

                {/* TEXT */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  “{item.text}”
                </p>

                {/* USER */}
                <div className="flex items-center gap-3">

                  {/* AVATAR */}
                  <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold text-sm">
                    {getInitials(item.name)}
                  </div>

                  {/* NAME + ROLE */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {item.role}
                    </p>
                  </div>

                </div>

                {/* ORANGE LINE */}
                <div className="mt-6 h-[3px] w-0 bg-orange-600 transition-all duration-300 group-hover:w-12 rounded-full" />

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}