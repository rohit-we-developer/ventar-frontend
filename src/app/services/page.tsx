"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import {
  Code2,
  ShieldCheck,
  Briefcase,
  Cloud,
  BarChart3,
  Megaphone,
  Sparkles,
  Rocket,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "Software & Web Development",
    desc: "We design and develop high-performance web applications, custom portals, mobile apps, and enterprise ERP systems that are scalable, secure, and optimized for long-term business growth.",
    icon: Code2,
  },
  {
    title: "Cybersecurity Services",
    desc: "Our cybersecurity solutions include firewall protection, SOC monitoring, and risk assessments to safeguard your business from threats while ensuring compliance and data integrity.",
    icon: ShieldCheck,
  },
  {
    title: "IT Consulting",
    desc: "We provide expert IT consulting services focused on strategy, infrastructure planning, and compliance to help businesses align technology with their long-term vision.",
    icon: Briefcase,
  },
  {
    title: "Cloud Solutions",
    desc: "From cloud migration to hosting and DevOps automation, we build flexible cloud environments that ensure scalability, cost efficiency, and seamless deployment processes.",
    icon: Cloud,
  },
  {
    title: "Data Analysis",
    desc: "Transform your raw data into meaningful insights using advanced analytics, business intelligence dashboards, and reporting systems that drive smarter decisions.",
    icon: BarChart3,
  },
  {
    title: "Digital Marketing",
    desc: "We help businesses grow online with SEO optimization, PPC campaigns, and data-driven marketing strategies that increase visibility, engagement, and conversions.",
    icon: Megaphone,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f3dfc9] min-h-screen">

      <Navbar />

      {/* TITLE */}
      <section className="pt-28 pb-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Powerful IT solutions crafted to scale, secure, and transform your business.
        </p>
      </section>

      {/* SERVICES CARDS (UNCHANGED) */}
      <section className="pb-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="flex"
              >
                <div className="flex flex-col justify-between w-full bg-white/90 p-6 rounded-2xl shadow-md">

                  <div>
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500 text-white mb-4 shadow">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 text-orange-500 text-sm font-medium">
                    Learn More →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 🔥 WHY CHOOSE (HEAVY DESCRIPTION ADDED) */}
      <section className="py-16 bg-white text-center px-4">
        <h3 className="text-3xl font-bold text-gray-900">
          Why Choose Ventar?
        </h3>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Choosing the right technology partner is critical for your business success. At Ventar, 
          we combine deep technical expertise with real-world business understanding to deliver 
          solutions that are not just functional but future-ready. Our focus is on reliability, 
          performance, and long-term value creation.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {[
            {
              icon: Sparkles,
              title: "Expert Team",
              desc: "Our team brings hands-on industry experience and delivers practical, scalable solutions tailored to real business challenges.",
            },
            {
              icon: Shield,
              title: "Secure Systems",
              desc: "We prioritize security at every level, ensuring your data, infrastructure, and applications remain protected against modern threats.",
            },
            {
              icon: Rocket,
              title: "Growth Focused",
              desc: "We build systems designed to grow with your business, enabling long-term scalability and continuous improvement.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#f9f9f9] p-6 rounded-xl shadow"
              >
                <Icon className="mx-auto text-orange-500 mb-3" size={24} />
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 🔥 DESCRIPTION (UNCHANGED) */}
      <section className="py-14 text-center px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900">
          We Deliver More Than Just Services
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          At Ventar, we don’t just build products — we create solutions that solve real business problems.
          From ideation to deployment and scaling, we ensure every step is optimized for performance,
          security, and growth.
        </p>

        <p className="mt-3 text-gray-600">
          Whether you're a startup or an enterprise, our tailored strategies help you stay ahead.
        </p>
      </section>

      {/* 🔥 HOW WE WORK (HEAVY DESCRIPTION ADDED) */}
      <section className="py-16 bg-white px-4">
        <h3 className="text-3xl text-center font-bold text-gray-900">
          How We Work
        </h3>

        <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
          Our process is designed to ensure clarity, efficiency, and long-term success. 
          We follow a structured yet flexible approach that allows us to understand your needs, 
          design effective solutions, and deliver results that scale with your business.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {[
            {
              title: "Understand Requirements",
              desc: "We begin by deeply understanding your business goals, challenges, and technical requirements to create a strong foundation.",
            },
            {
              title: "Design Smart Solutions",
              desc: "Our team designs scalable and efficient systems that align with your long-term vision and operational needs.",
            },
            {
              title: "Deliver & Scale",
              desc: "We deploy robust solutions and continuously optimize them to ensure performance, growth, and reliability.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#f3dfc9] p-6 rounded-xl shadow text-center"
            >
              <h4 className="font-semibold text-lg">{step.title}</h4>
              <p className="text-sm text-gray-700 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-4">
        <h2 className="text-4xl font-bold">
          Ready to Start?
        </h2>

        <p className="mt-3">
          Let’s build something powerful together.
        </p>

        <button className="mt-6 bg-white text-orange-600 px-6 py-2 rounded-full font-semibold shadow">
          Contact Us
        </button>
      </section>

    </div>
  );
}