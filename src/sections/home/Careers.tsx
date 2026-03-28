"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const jobs = [
  {
    title: "Web Developer",
    location: "Pune",
    desc: "Build modern, fast and scalable web applications using the latest frontend and backend technologies. Focus on clean UI, performance and real-world usability.",
  },
  {
    title: "Full Stack Developer",
    location: "Pune",
    desc: "Work on end-to-end product development, building scalable systems with real-world impact. Handle both frontend and backend with performance-first approach.",
  },
  {
    title: "Graphic Designer",
    location: "Pune",
    desc: "Create visually appealing and user-focused designs. Work on UI/UX, branding and product visuals that enhance user experience and engagement.",
  },
];

export default function CareersSection() {
  const router = useRouter();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fff7ed] to-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3 text-gray-900">
            Join Our Team
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            We’re building impactful digital products that solve real-world problems.
            Join a passionate team, work on meaningful projects, and grow your career faster.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-7">

          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              onClick={() => router.push("/careers")}
              className="cursor-pointer group p-7 rounded-2xl 
              bg-gradient-to-br from-white to-orange-50
              border border-orange-100
              shadow-sm hover:shadow-xl
              relative overflow-hidden transition"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
              bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>

              <div className="relative z-10">

                {/* TITLE */}
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="text-orange-500" size={18} />
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {job.title}
                  </h3>
                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <MapPin size={14} />
                  {job.location}
                </div>

                {/* DESC */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {job.desc}
                </p>

                {/* CTA */}
                <div className="text-sm text-orange-500 flex items-center gap-1 group-hover:gap-2 transition font-medium">
                  View Role <ArrowRight size={14} />
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA SECTION (REPLACED VIEW ALL CARD) */}
        <div className="mt-16 text-center">

          <p className="text-gray-600 mb-4 text-sm">
            Looking for more opportunities?
          </p>

          <button
            onClick={() => router.push("/careers")}
            className="bg-orange-500 text-white px-8 py-3 rounded-full 
            hover:scale-105 hover:shadow-lg transition"
          >
            View All Positions
          </button>

        </div>

      </div>
    </section>
  );
}