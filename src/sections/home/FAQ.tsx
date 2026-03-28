"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide internship opportunities?",
    answer:
      "Yes, we offer internship programs for students and freshers to gain real-world experience and work on live projects.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies like React, Next.js, Node.js, Laravel, and scalable cloud-based solutions.",
  },
  {
    question: "Is remote work available?",
    answer:
      "Yes, we support remote and flexible working environments depending on the role and project requirements.",
  },
  {
    question: "How can I apply for a job?",
    answer:
      "You can explore open positions on our careers page and apply directly through the application form.",
  },
  {
    question: "Do you provide career growth opportunities?",
    answer:
      "Absolutely. We focus on continuous learning, mentorship, and structured career progression paths.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-15 px-6 bg-gradient-to-b from-white to-[#fff7ed]">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 
                ${
                  isOpen
                    ? "bg-white border-orange-300 shadow-md"
                    : "bg-white/80 border-gray-200"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-orange-500" />
                  </motion.div>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}