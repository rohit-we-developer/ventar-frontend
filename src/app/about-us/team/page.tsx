"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
const team = [
  {
    name: "Adinath",
    role: "Co-founder & CEO",
    img: "https://i.pravatar.cc/300?img=1",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Rahul",
    role: "Full Stack Developer",
    img: "https://i.pravatar.cc/300?img=2",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sneha",
    role: "UI/UX Designer",
    img: "https://i.pravatar.cc/300?img=3",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Amit",
    role: "Backend Engineer",
    img: "https://i.pravatar.cc/300?img=4",
    linkedin: "#",
    github: "#",
  },
];

export default function Team() {
  return (
    <div className="bg-[#f8f7f4] text-gray-800 overflow-hidden">
<Navbar />
      {/* HERO */}
      <section className="relative py-28 text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">

        {/* glow */}
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] bottom-[-100px] right-[-100px]" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Meet Our Team
          </h1>

          <p className="text-orange-100 max-w-2xl mx-auto">
            A group of passionate individuals dedicated to building impactful,
            scalable, and modern digital solutions that solve real-world problems.
          </p>
        </motion.div>
      </section>

      {/* TEAM GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-br from-orange-500/40 to-pink-500/40 hover:from-orange-500 hover:to-pink-500 transition"
            >
              {/* INNER CARD */}
              <div className="bg-white rounded-3xl overflow-hidden">

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3">

                    <a href={member.linkedin}>
                      <div className="px-4 py-2 bg-white text-black rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
                        LinkedIn
                      </div>
                    </a>

                    <a href={member.github}>
                      <div className="px-4 py-2 bg-white text-black rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
                        GitHub
                      </div>
                    </a>

                  </div>
                </div>

                {/* INFO */}
                <div className="p-5 text-center relative">

                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="transition"
                  >
                    <h3 className="font-semibold text-lg">
                      {member.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {member.role}
                    </p>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* EXTRA SECTION */}
      <section className="pb-24 px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            Built with Passion & Precision
          </h2>

          <p className="text-gray-600 leading-relaxed text-[15px]">
            Our team blends creativity, technical expertise, and strategic thinking
            to deliver solutions that truly matter. Every member contributes to building
            innovative, scalable, and user-focused digital products that create real impact.
            We believe in collaboration, continuous learning, and pushing boundaries to
            achieve excellence in every project we take on.
          </p>
        </motion.div>

      </section>

    </div>
  );
}