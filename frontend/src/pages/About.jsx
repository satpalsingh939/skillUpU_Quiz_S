import React from "react";

export default function About() {
  return (
    <div className="bg-[#25222f] text-white min-h-screen px-6 py-16 font-['Segoe_UI',sans-serif]">
     
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About SkillUpU</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          SkillUpU 🚀 is a modern quiz platform where learning meets fun!  
          We make knowledge accessible, interactive, and engaging for learners worldwide.
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-6 mb-16">
        <div className="bg-[#3341552c] shadow-md shadow-[#4e6891] p-6 rounded-xl w-72 text-center hover:-translate-y-2 transition">
          <h3 className="text-xl font-semibold mb-3 text-[#0056b3]">Our Vision</h3>
          <p className="text-gray-300">
            To empower learners through interactive quizzes, gamified learning, 
            and a supportive global community of curious minds.
          </p>
        </div>
        <div className="bg-[#3341552c] shadow-md shadow-[#4e6891] p-6 rounded-xl w-72 text-center hover:-translate-y-2 transition">
          <h3 className="text-xl font-semibold mb-3 text-[#0056b3]">Our Mission</h3>
          <p className="text-gray-300">
            To make learning easy, fun, and rewarding by providing high-quality 
            quizzes, certificates, and leaderboards that boost confidence and skills.
          </p>
        </div>
      </section>

      <section className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0056b3] mb-6">What Makes SkillUpU Special?</h2>
        <ul className="space-y-4 text-lg text-gray-300">
          <li>✅ <span className="font-semibold">Domain Based Quizzes</span> – Quizzes tailored for different fields like Tech, Science, Aptitude, and more.</li>
          <li>✅ <span className="font-semibold">Leaderboard & Certificates</span> – Compete, earn certificates, and grow your skills.</li>
          <li>✅ <span className="font-semibold">Engaging UI</span> – Simple, responsive, and user-friendly design with gamified experience.</li>
        </ul>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-8 max-w-5xl mx-auto mb-16">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Founder"
          className="w-40 h-40 rounded-full border-4 border-[#0056b3] shadow-lg"
        />
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4 text-[#0056b3]">Meet the Founder</h2>
          <p className="text-gray-300 mb-3">
            Hi 👋, I’m <strong>Satpal Singh Jadhav</strong>, currently pursuing 
            <strong> B.Tech in Computer Science Engineering</strong> at 
            <strong> Sushila Devi Bansal College of Technology, Indore</strong>.
          </p>
          <p className="text-gray-300 mb-3">
            I started this platform with a vision to make quizzes more engaging 
            and to help learners improve their knowledge while enjoying the process.
          </p>
          <p className="text-gray-300">
            🚀 My goal: Build a platform that inspires students, professionals, 
            and knowledge-seekers to challenge themselves and grow.
          </p>
        </div> 
      </section>

      <section className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0056b3] mb-6">Technology Stack</h2>
        <p className="text-gray-300 text-lg mb-4">
          SkillUpU is built on the powerful <strong>MERN Stack</strong>:
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <span className="bg-[#3341552c] px-6 py-3 rounded-lg shadow-md shadow-[#4e6891]">MongoDB</span>
          <span className="bg-[#3341552c] px-6 py-3 rounded-lg shadow-md shadow-[#4e6891]">Express.js</span>
          <span className="bg-[#3341552c] px-6 py-3 rounded-lg shadow-md shadow-[#4e6891]">React.js</span>
          <span className="bg-[#3341552c] px-6 py-3 rounded-lg shadow-md shadow-[#4e6891]">Node.js</span>
        </div>
      </section>

    </div>
  );
}
