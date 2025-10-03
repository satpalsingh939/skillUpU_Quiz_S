import React from "react";

export default function Terms() {
  return (
    <div className="bg-[#25222f] min-h-screen px-4 py-12 text-white mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-cyan-400">
        Terms of Service
      </h1>
      <p className="text-gray-400 text-center text-base md:text-lg mb-10 max-w-[700px] mx-auto leading-relaxed">
        Welcome to <strong>SkillUpU</strong>. By accessing or using our platform, 
        you agree to follow these terms and conditions. Please read them carefully.
      </p>

      <div className="flex flex-col gap-6">
        {/* S- 1 */}
        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 rounded-xl shadow-md hover:-translate-y-1 transition transform">
          <h2 className="text-cyan-400 text-lg font-semibold mb-2">
            1. Responsible Usage
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Use QuizMaster only for legitimate learning and quiz activities. 
            Avoid any attempts to manipulate quiz scores, certificates, 
            or leaderboards. Misuse may result in account suspension or ban.
          </p>
        </section>

        {/* S- 2 */}
        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 rounded-xl shadow-md hover:-translate-y-1 transition transform">
          <h2 className="text-cyan-400 text-lg font-semibold mb-2">
            2. Community Guidelines
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Treat fellow learners with respect. Harassment, hate speech, or 
            inappropriate behavior in discussions will not be tolerated. 
            Repeated violations may lead to restricted access.
          </p>
        </section>

        {/* S- 3 */}
        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 rounded-xl shadow-md hover:-translate-y-1 transition transform">
          <h2 className="text-cyan-400 text-lg font-semibold mb-2">
            3. Account Security
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Keep your account credentials confidential. QuizMaster is not 
            responsible for unauthorized access due to compromised accounts. 
            Always use strong passwords and enable 2FA if available.
          </p>
        </section>

        {/* S- 4 */}
        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 rounded-xl shadow-md hover:-translate-y-1 transition transform">
          <h2 className="text-cyan-400 text-lg font-semibold mb-2">
            4. Contact Us
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            If you have questions about these terms, reach out at{" "}
            <a
              href="mailto:legal@quizmaster.com"
              className="text-cyan-400 font-medium ml-1 hover:underline"
            >
              skillUpU@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
