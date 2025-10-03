import React, { useState } from "react";

export default function Help() {

  return (
    <div className="px-5 py-12 min-h-[80vh] bg-[#25222f] text-white font-sans mx-auto">
     
      <h1 className="text-4xl font-bold text-center mb-4 text-cyan-400">Help Center</h1>
      <p className="text-lg text-center text-gray-400 mb-10">
        Find answers of common questions or reach out to us directly.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-5 text-cyan-400">
          ❓ Frequently Asked Questions
        </h2>

        <details className="bg-[#1a1d2456] hover:bg-[#1f293786] transition transform hover:-translate-y-1 p-5 rounded-xl shadow-md border border-gray-700 cursor-pointer mb-3">
          <summary className="font-semibold text-cyan-400">
            How do I create an account?
          </summary>
          <p className="mt-2 text-gray-400 text-sm font-medium">
            Click on the <strong>Sign Up</strong> button and fill in your
            details. Once registered, you can start taking quizzes immediately.
          </p>
        </details>

        <details className="bg-[#1a1d2456] hover:bg-[#1f293786] transition transform hover:-translate-y-1 p-5 rounded-xl shadow-md border border-gray-700 cursor-pointer mb-3">
          <summary className="font-semibold text-cyan-400">
            Can I earn certificates?
          </summary>
          <p className="mt-2 text-gray-400 text-sm font-medium">
            Yes! Certificates are awarded after successfully completing specific
            quizzes with a passing score.
          </p>
        </details>

        <details className="bg-[#1a1d2456] hover:bg-[#1f293786] transition transform hover:-translate-y-1 p-5 rounded-xl shadow-md border border-gray-700 cursor-pointer mb-3">
          <summary className="font-semibold text-cyan-400">
            How do I reset my password?
          </summary>
          <p className="mt-2 text-gray-400 text-sm font-medium">
            Go to the login page and click on{" "}
            <strong>Forgot Password</strong>. You’ll receive a reset link via
            email.
          </p>
        </details>

        <details className="bg-[#1a1d2456] hover:bg-[#1f293786] transition transform hover:-translate-y-1 p-5 rounded-xl shadow-md border border-gray-700 cursor-pointer mb-3">
          <summary className="font-semibold text-cyan-400">
            How do I report an issue?
          </summary>
          <p className="mt-2 text-gray-400 text-sm font-medium">
            Use the contact form or email us at :{" "}
            <strong>satpalsinghjadhav5@gmail.com</strong>
          </p>
        </details>
      </div>

    </div>
  );
}
