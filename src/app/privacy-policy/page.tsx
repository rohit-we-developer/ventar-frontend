"use client";

import Navbar from "@/components/navbar/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0a0a0a] text-gray-300">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pt-32 pb-20 max-w-6xl mx-auto">
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">
          Legal
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Privacy <br /> Policy
        </h1>

        <div className="h-[4px] w-40 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 mb-8" />

        <p className="text-sm text-gray-400">
          Effective Date: January 2026
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24 max-w-4xl mx-auto space-y-10 leading-relaxed">

        <p>
          This Privacy Policy describes how Ventar collects, uses, stores, and protects your
          personal information when you access or use our website and services. By using our
          platform, you agree to the practices described in this policy.
        </p>

        {/* INFO COLLECTION */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Information We Collect
          </h2>
          <p>
            We may collect various types of information including personal details such as your name,
            email address, phone number, and business information when you voluntarily submit forms.
          </p>
          <p className="mt-2">
            Additionally, we automatically collect technical data such as IP address, browser type,
            device information, pages visited, and interaction data through cookies and analytics tools.
          </p>
        </div>

        {/* USAGE */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            2. How We Use Your Information
          </h2>
          <p>
            We use collected data to provide and improve our services, respond to inquiries,
            personalize user experience, analyze performance, and communicate updates or marketing
            information where permitted.
          </p>
        </div>

        {/* COOKIES */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            Our website uses cookies and similar technologies to enhance functionality, remember user
            preferences, and analyze traffic. You may disable cookies in your browser settings, but some
            features may not function properly.
          </p>
        </div>

        {/* SHARING */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Information Sharing
          </h2>
          <p>
            We do not sell or rent your personal information. However, we may share data with trusted
            third-party service providers who assist in operating our services, subject to confidentiality
            agreements.
          </p>
        </div>

        {/* SECURITY */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Data Security
          </h2>
          <p>
            We implement strong security measures including encryption, access control, and secure
            infrastructure to protect your data. However, no method of transmission over the internet is
            completely secure.
          </p>
        </div>

        {/* RETENTION */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Data Retention
          </h2>
          <p>
            We retain your data only for as long as necessary to fulfill the purposes outlined in this
            policy or comply with legal obligations.
          </p>
        </div>

        {/* RIGHTS */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Your Rights
          </h2>
          <p>
            You have the right to access, update, or delete your personal data. You may also request
            restriction of processing or object to certain uses of your data.
          </p>
        </div>

        {/* GDPR */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            8. GDPR Compliance
          </h2>
          <p>
            If you are located in the European Economic Area, you have additional rights under GDPR,
            including the right to data portability and the right to lodge a complaint with a supervisory authority.
          </p>
        </div>

        {/* THIRD PARTY */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Third-Party Links
          </h2>
          <p>
            Our website may contain links to external websites. We are not responsible for the privacy
            practices of those third-party platforms.
          </p>
        </div>

        {/* CHANGES */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page
            with an updated effective date.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            11. Contact Us
          </h2>
          <p>
            For any questions regarding this Privacy Policy, contact us at:
            <br />
            <span className="text-orange-400">contact@ventar.in</span>
          </p>
        </div>

      </section>
    </div>
  );
}