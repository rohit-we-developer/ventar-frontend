"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { Sparkles, Rocket, Layers, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="bg-[#f8f7f4] text-gray-800">
      <Navbar />

      {/* HERO (SAME) */}
      <section className="relative py-28 text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] bottom-[-100px] right-[-100px]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4">
            Learn more about our mission, vision, and commitment
          </h1>

          <p className="text-orange-100 max-w-2xl mx-auto">
            We build technology that empowers businesses, simplifies complexity,
            and creates meaningful digital experiences that drive real growth.
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/about-illustration.png"
          className="w-full max-w-md mx-auto transition duration-500 hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(255,115,0,0.5)]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold mb-4">About Ventar</h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Ventar IT Solutions is built on the idea that technology should feel seamless,
            purposeful, and empowering. We help businesses transform ideas into reliable
            digital experiences through thoughtfully designed and expertly engineered
            technology solutions that are built to last.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            With a strong foundation in software development, cloud infrastructure,
            and modern digital systems, we partner with organizations to create solutions
            that are both functional and future-ready.
          </p>

          <p className="text-gray-600 leading-relaxed">
            At Ventar, we focus on long-term value rather than short-term delivery,
            ensuring sustainable growth and meaningful impact.
          </p>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 bg-[#eef2f7]">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-semibold mb-3">Our Mission and Vision</h2>
          <p className="text-gray-500">
            We help businesses reinvent their goals with modern technology and strong execution.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-8 flex gap-3 items-start">
              <Rocket className="text-orange-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a trusted technology partner that helps businesses innovate,
                  scale, and succeed in a rapidly evolving digital world.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <ShieldCheck className="text-orange-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower organizations by delivering scalable, reliable, and high-performance
                  digital solutions that create measurable impact and long-term value.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.img
            src="/mission-illustration.png"
            className="w-full max-w-md mx-auto transition duration-500 hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(255,115,0,0.5)]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          />
        </div>
      </section>

      {/* WHY VENTAR */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-semibold mb-2">Why Ventar?</h2>
          <p className="text-gray-500">
            We deliver value through innovation, speed, and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            { img: "/card1.png", icon: <Sparkles />, desc: "We collaborate deeply with stakeholders to understand business problems, define strategies, and build solutions that actually solve real-world challenges." },
            { img: "/card2.png", icon: <Layers />, desc: "Our experience in integrating systems ensures seamless workflows, improved efficiency, and scalable architecture across platforms." },
            { img: "/card3.png", icon: <Rocket />, desc: "We provide flexible working models that adapt to your business, giving you control, scalability, and long-term sustainability." },
            { img: "/card4.png", icon: <ShieldCheck />, desc: "We follow disciplined execution and agile methodology to deliver projects on time while maintaining top quality." }
          ].map((item, i) => (

            <motion.div
              key={i}
              className="group h-[300px] [perspective:1000px]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="relative w-full h-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:scale-[1.03]">

                {/* FRONT */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-orange-600/70" />
                  <div className="absolute bottom-6 left-6 right-6 text-white text-xl font-semibold flex items-center gap-2">
                    {item.icon}
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-white rounded-2xl p-6 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-lg">
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-10 shadow-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to work with us?</h2>

          <p className="text-gray-600 mb-6">
            Let’s collaborate to build powerful digital solutions that create real impact.
          </p>

          <div className="flex justify-center gap-5">
            <Link href="/contact">
              <button className="px-8 py-3 bg-orange-600 text-white rounded-full hover:scale-105 transition">
                Contact Us →
              </button>
            </Link>

            <Link href="/">
              <button className="px-8 py-3 bg-gray-200 rounded-full hover:scale-105 transition">
                ← Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}