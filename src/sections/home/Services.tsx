"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  ShieldCheck,
  Briefcase,
  Cloud,
  BarChart3,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Software & Web Development",
    desc: "Custom Applications | Web Portals | Mobile Apps | ERP Solutions. We build scalable and high-performance applications tailored for long-term growth.",
    icon: Code2,
  },
  {
    title: "Cybersecurity Services",
    desc: "Firewall | SOC | Risk Assessments. Protect your systems with advanced security solutions and proactive monitoring.",
    icon: ShieldCheck,
  },
  {
    title: "IT Consulting",
    desc: "Strategy | Infrastructure | Compliance. Align your technology with business goals through expert consulting.",
    icon: Briefcase,
  },
  {
    title: "Cloud Solutions",
    desc: "Cloud Migration | Hosting | DevOps. Build scalable and flexible cloud infrastructure with modern deployment practices.",
    icon: Cloud,
  },
  {
    title: "Data Analysis",
    desc: "Business Intelligence | Analytics | Insights. Transform data into meaningful insights for better decisions.",
    icon: BarChart3,
  },
  {
    title: "Digital Marketing",
    desc: "SEO | PPC | Growth Strategies. Increase visibility and drive growth with data-driven marketing strategies.",
    icon: Megaphone,
  },
];

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="bg-[#f3dfc9] min-h-screen py-24 px-4 scroll-mt-32"
    >

      {/* TITLE */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Our Services
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Explore our wide range of IT solutions designed to help your business grow, scale, and stay secure in a digital world.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {services.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="relative"
            >
              {/* SIMPLE CARD */}
              <div className="h-full w-full rounded-2xl bg-white p-7 shadow-md border border-gray-200 transition hover:shadow-xl">

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500 text-white mb-5">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* LINK */}
                <Link
                  href="/services"
                  className="mt-5 inline-block text-orange-500 text-sm font-medium hover:translate-x-1 transition"
                >
                  Learn More →
                </Link>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 🔥 VIEW MORE SECTION */}
      <div className="mt-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Need More Advanced Solutions?
          </h3>

          <p className="mt-3 text-gray-600">
            We offer customized enterprise solutions tailored specifically to your business requirements.
            Let’s discuss how we can help you grow faster.
          </p>

          <Link
            href="/services"
            className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            View More Services
          </Link>
        </motion.div>
      </div>

    </section>
  );
}