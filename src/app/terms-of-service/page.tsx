"use client";

import Navbar from "@/components/navbar/Navbar";

export default function Terms() {
  return (
    <div className="bg-[#0a0a0a] text-gray-300">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pt-32 pb-20 max-w-6xl mx-auto">
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">
          Legal
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Terms of <br /> Service
        </h1>

        <div className="h-[4px] w-40 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 mb-8" />

        <p className="text-sm text-gray-400">
          Effective Date: January 2026
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24 max-w-4xl mx-auto space-y-10 leading-relaxed">

        <p>
          These Terms of Service govern your use of Ventar’s website and services.
          By accessing our platform, you agree to comply with these terms.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing our services, you confirm that you have read, understood,
            and agree to be bound by these terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            2. Use of Services
          </h2>
          <p>
            You agree to use our services only for lawful purposes and not to engage
            in activities that disrupt or harm the platform.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            3. User Responsibilities
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your data and
            ensuring that your use of services complies with applicable laws.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Intellectual Property
          </h2>
          <p>
            All content, code, branding, and materials are owned by Ventar and are
            protected by intellectual property laws.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Limitation of Liability
          </h2>
          <p>
            Ventar shall not be held liable for any indirect, incidental, or
            consequential damages arising from the use of our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate access to our services at
            any time if terms are violated.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Modifications
          </h2>
          <p>
            We may update these terms periodically. Continued use of the platform
            indicates acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Governing Law
          </h2>
          <p>
            These terms are governed by applicable laws and regulations of India.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Contact
          </h2>
          <p>
            For any questions regarding these terms:
            <br />
            <span className="text-orange-400">contact@ventar.in</span>
          </p>
        </div>

      </section>
    </div>
  );
}