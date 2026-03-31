// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link"; // ✅ ADD THIS
// import {
//   Code2,
//   Cloud,
//   ShieldCheck,
//   Briefcase,
// } from "lucide-react";

// const services = [
//   {
//     title: "Web Development",
//     desc: "High-performance websites and custom web apps built for speed, scalability, and seamless user experience.",
//     icon: Code2,
//   },
//   {
//     title: "Cloud & DevOps",
//     desc: "Scalable cloud infrastructure and DevOps automation for faster deployment and reliable systems.",
//     icon: Cloud,
//   },
//   {
//     title: "CyberSecurity",
//     desc: "Advanced security frameworks to protect data, reduce risks, and maintain compliance.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "IT Consulting",
//     desc: "Strategic tech guidance to align IT solutions with business growth and long-term goals.",
//     icon: Briefcase,
//   },
// ];

// export default function Hero() {
//   return (
//     <section
//       className="relative overflow-hidden text-white pt-32 md:pt-36"
//       style={{
//         background:
//           "linear-gradient(270deg,#ff6a00,#ff3c00,#ff8c00,#ff6a00)",
//         backgroundSize: "600% 600%",
//         animation: "gradientMove 8s ease infinite",
//       }}
//     >
//       {/* KEYFRAMES */}
//       <style>
//         {`
//           @keyframes gradientMove {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//         `}
//       </style>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-black/10" />

//       {/* LIGHT SWEEP */}
//       <motion.div
//         animate={{ x: ["-100%", "100%"] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//         className="absolute top-0 w-1/2 h-full bg-white/10 blur-2xl"
//       />

//       {/* HERO TEXT */}
//       <div className="relative px-4 pt-10 pb-16">
//         <div className="container text-center max-w-4xl mx-auto">

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-6xl font-semibold leading-tight drop-shadow-lg"
//           >
//             Ventar IT Solutions —
//             <span className="block mt-2">
//               Your Trusted Digital Partner
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="mt-6 text-white/90 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto"
//           >
//             We build scalable, secure, and high-performance digital solutions
//             that help businesses grow faster in a connected world.
//           </motion.p>

//           {/* ✅ ONLY CHANGE HERE */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <Link
//               href="/services"
//               className="inline-block mt-8 bg-white text-orange-600 px-6 py-3 rounded-full font-medium hover:scale-105 transition shadow-lg"
//             >
//               Explore Services ↓
//             </Link>
//           </motion.div>

//         </div>
//       </div>

//       {/* 🔥 SERVICES */}
//       <div className="relative pb-20 px-4">
//         <motion.div
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
//           className="flex gap-6 w-max"
//         >
//           {[...services, ...services].map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05, y: -6 }}
//                 transition={{ type: "spring", stiffness: 180 }}
//                 className="
//                   min-w-[240px] max-w-[240px] h-[210px]
//                   bg-white text-black
//                   p-5 rounded-2xl
//                   shadow-lg hover:shadow-2xl
//                   border border-gray-200
//                   flex flex-col
//                 "
//               >
//                 <div className="mb-3">
//                   <Icon className="w-6 h-6 text-orange-500" />
//                 </div>

//                 <h3 className="font-semibold text-sm leading-tight">
//                   {item.title}
//                 </h3>

//                 <p className="text-xs text-gray-600 mt-2 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import {
  Code2,
  Cloud,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites and custom web apps built for speed, scalability, and seamless user experience.",
    icon: Code2,
  },
  {
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure and DevOps automation for faster deployment and reliable systems.",
    icon: Cloud,
  },
  {
    title: "CyberSecurity",
    desc: "Advanced security frameworks to protect data, reduce risks, and maintain compliance.",
    icon: ShieldCheck,
  },
  {
    title: "IT Consulting",
    desc: "Strategic tech guidance to align IT solutions with business growth and long-term goals.",
    icon: Briefcase,
  },
];

export default function Hero() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white pt-32 md:pt-36">

      {/* 🔥 BACKGROUND IMAGE */}
      <motion.img
        src="/bg.jpg"
        className="absolute top-1/2 left-1/2 w-[200%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover z-0"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* 🔥 🆕 SVG TOPO WAVES (ADDED ONLY THIS) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 z-[5]"
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff6a00" />
            <stop offset="100%" stopColor="#ff8c00" />
          </linearGradient>
        </defs>

        {[...Array(20)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${200 + i * 5} Q 400 ${150 + i * 5} 800 ${200 + i * 5}`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
          >
            <animate
              attributeName="d"
              dur={`${6 + i * 0.2}s`}
              repeatCount="indefinite"
              values={`
                M0 ${200 + i * 5} Q 400 ${150 + i * 5} 800 ${200 + i * 5};
                M0 ${200 + i * 5} Q 400 ${250 + i * 5} 800 ${200 + i * 5};
                M0 ${200 + i * 5} Q 400 ${150 + i * 5} 800 ${200 + i * 5}
              `}
            />
          </path>
        ))}
      </svg>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 🔥 HERO TEXT */}
      <div className="relative z-20 px-4 pt-10 pb-16">
        <div className="container text-center max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-semibold leading-tight drop-shadow-lg"
          >
            Ventar IT Solutions 
            <span className="block mt-2">
              Your Trusted Digital Partner
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/90 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We build scalable, secure, and high-performance digital solutions
            that help businesses grow faster in a connected world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/services"
              className="inline-block mt-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Explore Services ↓
            </Link>
          </motion.div>

        </div>
      </div>

      {/* 🔥 SERVICES (UNCHANGED) */}
      <div className="relative z-20 pb-20 px-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 w-max"
        >
          {[...services, ...services].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="
                  min-w-[240px] max-w-[240px] h-[210px]
                  bg-white/10 backdrop-blur-md
                  p-5 rounded-2xl
                  shadow-lg hover:shadow-2xl
                  border border-white/20
                  flex flex-col text-white
                "
              >
                <div className="mb-3">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>

                <h3 className="font-semibold text-sm leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}