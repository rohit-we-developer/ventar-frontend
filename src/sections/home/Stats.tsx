"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-[#f8f7f4]">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto border-t border-b border-gray-200 py-10 md:py-12"
      >

        {/* MOBILE → STACK */}
        <div className="flex flex-col gap-10 md:hidden text-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              <Counter target={50} />+
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Enterprise Projects Delivered
            </p>
          </div>

          <div className="h-[1px] bg-gray-200 w-10 mx-auto" />

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              99.98%
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Infrastructure Uptime
            </p>
          </div>

          <div className="h-[1px] bg-gray-200 w-10 mx-auto" />

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              <Counter target={30} />%
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Avg. Performance Optimization
            </p>
          </div>

        </div>

        {/* DESKTOP → ORIGINAL */}
        <div className="hidden md:grid md:grid-cols-3 text-center items-center">

          {/* ITEM 1 */}
          <div className="px-6">
            <h2 className="text-5xl font-bold text-gray-900">
              <Counter target={50} />+
            </h2>
            <p className="mt-3 text-gray-600 text-sm tracking-wide">
              Enterprise Projects Delivered
            </p>
          </div>

          {/* DIVIDER */}
          <div className="h-16 w-[1px] bg-gray-300 mx-auto" />

          {/* ITEM 2 */}
          <div className="px-6">
            <h2 className="text-5xl font-bold text-gray-900">
              99.98%
            </h2>
            <p className="mt-3 text-gray-600 text-sm tracking-wide">
              Infrastructure Uptime
            </p>
          </div>

          {/* DIVIDER */}
          <div className="h-16 w-[1px] bg-gray-300 mx-auto" />

          {/* ITEM 3 */}
          <div className="px-6">
            <h2 className="text-5xl font-bold text-gray-900">
              <Counter target={30} />%
            </h2>
            <p className="mt-3 text-gray-600 text-sm tracking-wide">
              Avg. Performance Optimization
            </p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}