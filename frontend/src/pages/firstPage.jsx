
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const quizFields = [
    {
      field: "Frontend Development",
      quizzes: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      field: "Backend Development",
      quizzes: ["Node.js", "Express.js"],
    },
    {
      field: "Programming Languages",
      quizzes: ["C", "C++", "Java", "Python"],
    },
    {
      field: "Databases",
      quizzes: ["MongoDB", "MySQL"],
    },
    {
      field: "Computer Science & Coding",
      quizzes: ["Data Structures", "Algorithms", "Operating System"],
    },
    {
      field: "Aptitude & General Knowledge",
      quizzes: ["General Knowledge", "History", "Sports"],
    },
  ];

  return (
    <div className="bg-[#25222f] text-white font-poppins">
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16">

        <div className="flex-1 text-center mb-10 md:mb-0">
          <img
            src="/img/image (12).png"
            alt="Quiz Preview"
            className="max-w-xs md:max-w-md mx-auto rounded-xl transition-transform duration-300 ease-in-out hover:translate-y-3"
          />
        </div>

        {/* ---------- */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            A New Way To Learn With <strong>SkillUpU</strong>
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
            Our Quiz Platform helps you to <b>enhance your skills</b>, expand your knowledge. <br />
            Take quizzes, improve step by step, and earn certificates to show your growth 🎓.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-gradient-to-r from-cyan-400 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:from-cyan-500 hover:to-blue-700 transition"
          >
            Get Started →
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-cyan-400 cursor-pointer font-semibold hover:underline"
            >
              Sign in
            </span>
          </p>
        </div>
      </section>

      {/*---------*/}
      <section className="px-6 md:px-16 lg:px-24 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          ✨ Why Choose SkillUpU?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#3341552c] shadow-md p-6 rounded-lg transition-transform duration-300 ease-in-out hover:translate-y-3 hover:bg-[#4755693a] ">
            <h3 className="text-xl font-semibold mb-3">💡 Practice Quizzes</h3>
            <p className="text-gray-300 text-sm">
              Test yourself with quizzes from multiple subjects and topics.
            </p>
          </div>
          <div className="bg-[#3341552c] shadow-md p-6 rounded-lg transition-transform duration-300 ease-in-out hover:translate-y-3 hover:bg-[#4755693a]">
            <h3 className="text-xl font-semibold mb-3">🏆 Earn Certificates</h3>
            <p className="text-gray-300 text-sm">
              Share your achievements and earn certificates after completing
              quizzes.
            </p>
          </div>
          <div className="bg-[#3341552c] shadow-md p-6 rounded-lg transition-transform duration-300 ease-in-out hover:translate-y-3 hover:bg-[#4755693a] ">
            <h3 className="text-xl font-semibold mb-3">🤝 Community Support</h3>
            <p className="text-gray-300 text-sm">
              Discuss with developers, share knowledge, and grow together.
            </p>
          </div>
          <div className="bg-[#3341552c] shadow-md p-6 rounded-lg transition-transform duration-300 ease-in-out hover:translate-y-3 hover:bg-[#4755693a]">
            <h3 className="text-xl font-semibold mb-3">📘 Learning Resources</h3>
            <p className="text-gray-300 text-sm">
              Access study materials to understand your concepts better.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- */}
      <section className="px-6 md:px-16 lg:px-24 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          📚 Choose Your Field & Start Practicing
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizFields.map((f, i) => (
            <div
              key={i}
              onClick={() => {
                localStorage.setItem("selectedField", f.field.toLowerCase());
                navigate("/login");
              }}
              className="cursor-pointer bg-[#3341552c] shadow-md p-6 rounded-lg hover:bg-[#33415557] hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{f.field}</h3>
              <p className="text-gray-300 text-sm">
                Includes quizzes like {f.quizzes.slice(0, 2).join(", ")}
                {f.quizzes.length > 3 ? " and more..." : ""}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------- */}
      <section className="px-6 md:px-16 lg:px-24 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          📘 Want to Learn More?
        </h2>
        <p className="text-gray-300 mb-6">
          Access our <b>Learning Resources</b> to improve your understanding and
          study the concepts in detail before attempting the quiz.
        </p>
        <button
          onClick={() => navigate("/learning")}
          className="border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-700 hover:text-white transition"
        >
          Go to Learning Section →
        </button>
      </section>
    </div>
  );
}
