import React from "react";

export default function Privacy() {
  return (
    <div className="px-5 py-10 bg-[#25222f] min-h-screen text-white mx-auto">
    
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-cyan-400">
        Privacy Policy
      </h1>
      <p className="text-center text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your personal data while you use{" "}
        <strong>SkillUpU</strong>.
      </p>

      <div className="space-y-6">
        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 transition">
          <h2 className="text-lg font-semibold text-cyan-400 mb-3">
            📌 Data We Collect
          </h2>
          <p className="text-gray-400 mb-2">
            We only collect the minimum information necessary to provide you
            with the best learning experience:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Your name and email address during account registration</li>
            <li>Quiz attempts and performance records</li>
            <li>Device & browser information for security and analytics</li>
          </ul>
        </section>

        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 transition">
          <h2 className="text-lg font-semibold text-cyan-400 mb-3">
            🛡️ Data Protection
          </h2>
          <p className="text-gray-400">
            We use industry-standard encryption and security practices to keep
            your personal information safe. Your data is never sold to third
            parties.
          </p>
        </section>

        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 transition">
          <h2 className="text-lg font-semibold text-cyan-400 mb-3">
            🛠️ Security Best Practices We Follow
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Use strong passwords - Suggestion</li>
            <li>Use HTTPS to secure all data in transit</li>
            {/* <li>Apply role-based access control to sensitive areas</li> */}
          </ul>
        </section>

        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 md:p-8 rounded-2xl shadow-md hover:-translate-y-1 transition">
          <h2 className="text-lg font-semibold text-cyan-400 mb-3">
            📧 Contact Us
          </h2>
          <p className="text-gray-400">
            If you have any questions regarding this Privacy Policy, feel free
            to reach out at:{" "}
            <a
              href="mailto:privacy@quizmaster.com"
              className="text-cyan-400 font-semibold hover:underline"
            >
              satpalsinghjadhav5@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
