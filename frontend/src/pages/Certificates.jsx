import React from "react";

export default function Certificates() {
  return (
    <div className="px-5 py-12 min-h-screen bg-[#25222f] text-white font-sans mx-auto">
    
      <h1 className="text-4xl font-bold text-center mb-4 text-cyan-400">
        🎓 Certificates
      </h1>
      <p className="text-center text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
        Earn certificates by completing quizzes with a passing score.  
        Each certificate is verified and downloadable as a PDF. 🚀
      </p>

      <div className="bg-[#1a1d2456] border border-gray-700 rounded-2xl p-6 mb-6 shadow-sm hover:shadow-cyan-900/40 transition">
        <h2 className="text-lg font-semibold text-cyan-400 mb-3">
          📘 How to Earn a Certificate?
        </h2>
        <ul className="space-y-3 text-gray-300 text-md">
          <li>✅ Attempt a quiz from any category.</li>
          <li>
            ✅ Score at least{" "}
            <strong className="text-cyan-300">70% or above</strong> to pass.
          </li>
          <li>✅ Your certificate will be generated instantly.</li>
          <li>✅ Download your certificate as a PDF from this page.</li>
        </ul>
      </div>

      <div className="bg-[#1a1d2456] border border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-cyan-900/40 transition">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
          🏅 Sample Certificate
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-40 justify-center">
          {/* Certificate Preview */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border">
            <img
              src="/img/demoCertificate.png"
              alt="Sample Certificate"
              className="w-96 h-auto"
            />
          </div>

          <div className="">
            <p className="mb-3">
              <strong className="text-cyan-300">Score :</strong> 89%
            </p>
            <p className="mb-3">
              <strong className="text-cyan-300">Issued To :</strong> Satpal singh
            </p>
            <p className="mb-3">
              <strong className="text-cyan-300">Issued Date :</strong> 03 Oct 2025
            </p>
            <p className="mb-3">
              <strong className="text-cyan-300">Issued By :</strong> SkillUpU platform
            </p>
            <p className="mb-3">
              <strong className="text-cyan-300">Approved Signature</strong> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
