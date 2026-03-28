"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import {
  Briefcase,
  MapPin,
  Rocket,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Shield,
  Laptop,
} from "lucide-react";

/* JOB DATA */
const jobs = [
  {
    title: "Web Developer",
    location: "Pune",
    desc: "Build modern, fast and responsive web applications with clean UI and scalable backend.",
    skills: ["HTML, CSS, JS", "Laravel", "UI Focus"],
  },
  {
    title: "Full Stack Developer",
    location: "Pune",
    desc: "Work on production-ready systems with real-world performance and scalability.",
    skills: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Digital Marketing",
    location: "Pune",
    desc: "Drive growth with data-driven campaigns and creative marketing strategies.",
    skills: ["SEO", "SEM", "Analytics"],
  },
  {
    title: "Graphic Designer",
    location: "Pune",
    desc: "Design visually stunning UI/UX and branding assets for modern products.",
    skills: ["Figma", "Adobe", "Branding"],
  },
];

export default function Careers() {
  return (
    <div className="bg-[#020617] text-white">
    <Navbar />
      {/* HERO */}
      <section className="relative py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 opacity-20 blur-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-6">Build Your Future</h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join a fast-growing team where innovation meets execution and real-world impact.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 px-8 py-3 rounded-full hover:scale-105 transition">
              Open Positions
            </button>
            <button className="border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-14 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3">Why Join Ventar?</h2>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Work with modern technologies, collaborate with passionate developers,
          and grow your skills faster than the average developer.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            icon={<Rocket />}
            title="Innovative Work"
            desc="Work on real-world scalable projects using modern technologies."
          />
          <Feature
            icon={<Users />}
            title="Great Team"
            desc="Collaborate with talented and supportive team members."
          />
          <Feature
            icon={<TrendingUp />}
            title="Career Growth"
            desc="Continuous learning and fast career growth opportunities."
          />
        </div>
      </section>

      {/* JOBS */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group p-7 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 relative overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="text-orange-400" />
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <MapPin size={15} />
                  {job.location}
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {job.desc}
                </p>

                <ul className="text-gray-400 text-sm space-y-1 mb-5">
                  {job.skills.map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-orange-400 hover:gap-3 transition">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PERKS */}
      <section className="py-14 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Perks & Benefits</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            icon={<Laptop />}
            title="Remote Work"
            desc="Work from anywhere with flexible schedule and comfort."
          />
          <Feature
            icon={<Shield />}
            title="Job Security"
            desc="Stable work environment with long-term opportunities."
          />
          <Feature
            icon={<Sparkles />}
            title="Creative Freedom"
            desc="Freedom to explore ideas and build innovative solutions."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Ready to join us?
        </h2>

        <p className="text-gray-400 mb-6">
          Take the next step in your career journey.
        </p>

        <button className="bg-orange-500 px-8 py-3 rounded-full hover:scale-105 transition">
          Send Resume
        </button>
      </section>
    </div>
  );
}

/* COMPONENT */
function Feature({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group p-6 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 relative overflow-hidden"
    >
      {/* hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>

      <div className="relative z-10 text-center">
        <div className="bg-orange-500 p-3 rounded-full w-fit mx-auto mb-4">
          {icon}
        </div>

        <h3 className="font-semibold mb-2">{title}</h3>

        <p className="text-gray-400 text-sm">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}  