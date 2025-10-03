import React from "react";

export default function Cookies() {
  return (
    <div className="px-5 py-12 min-h-[80vh] bg-[#25222f] text-white font-sans mx-auto ">
      
      <h1 className="text-4xl font-bold text-center mb-4 text-cyan-400">
        Cookie Policy
      </h1>
      <p className="text-lg text-center text-gray-400 mb-10">
        This Cookie Policy explains how <strong>SkillUpU</strong> uses cookies
        to improve your experience on our platform.
      </p>

      <div className="space-y-6">
        {/* S- 1 */}
        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 rounded-2xl shadow-md transition">
          <h2 className="text-xl font-semibold mb-3 text-cyan-400">
            🍪 What Are Cookies?
          </h2>
          <p className="text-gray-400">
            Cookies are small text files stored on your device when you visit a
            website. They help us remember your preferences, keep you logged in,
            and improve your overall experience.
          </p>
        </section>

        {/* S- 2 */}
        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 rounded-2xl shadow-md transition">
          <h2 className="text-xl font-semibold mb-3 text-cyan-400">
            ✅ Accepting Cookies
          </h2>
          <p className="text-gray-400">
            By accepting cookies, you allow us to provide personalized content,
            track your quiz progress, and enhance the performance of our
            platform for a better experience.
          </p>
        </section>

        {/* S- 3 */}
        <section className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 p-6 rounded-2xl shadow-md transition">
          <h2 className="text-xl font-semibold mb-3 text-cyan-400">
            ❌ Rejecting Cookies
          </h2>
          <p className="text-gray-400">
            You can reject or disable cookies in your browser settings. However,
            some features of QuizMaster may not function properly without them.
          </p>
        </section>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition">
          Accept All
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition">
          Reject
        </button>
      </div> */}
    </div>
  );
}
