import React from "react";

const featuredQuizzes = [
  {
    name: "React Basics",
    description: "Test your knowledge of components, props, and hooks.",
    level: "Beginner",
  },
  {
    name: "JavaScript ES6",
    description: "Challenge yourself with modern JS features like promises & async.",
    level: "Intermediate",
  },
  {
    name: "Data Structures",
    description: "Arrays, stacks, queues, trees, and graphs.",
    level: "Advanced",
  },
];

const otherPlatforms = [
  {
    name: "GeeksForGeeks",
    link: "https://www.geeksforgeeks.org/quizzes/",
    desc: "Topic-wise quizzes for CS fundamentals.",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/explore/learn/",
    desc: "Algorithm and coding challenges.",
  },
  {
    name: "W3Schools",
    link: "https://www.w3schools.com/quiztest/default.asp",
    desc: "Simple quizzes for web technologies.",
  },
  {
    name: "Khan Academy",
    link: "https://www.khanacademy.org/",
    desc: "Maths, science and more interactive exercises.",
  },
];

export default function Quizzes() {
  return (
    <div className="min-h-screen bg-[#25222f] px-6 py-12 text-center text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-cyan-400">🎯 Practice Quizzes</h1>
      <p className="text-gray-400 text-base md:text-lg mb-10">
        Try your best for our platforms, quizzes or explore other trusted platforms to boost your skills.
      </p>

      <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
        🚀 Featured Quizzes
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {featuredQuizzes.map((quiz, i) => (
          <div
            key={i}
            className="bg-[#1a1d2456] p-6 rounded-xl shadow-md border border-gray-700 hover:bg-[#1f293786] transition transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                {quiz.name}
              </h3>
              <p className="text-gray-300 text-sm mb-3">{quiz.description}</p>
              <span className="text-sm text-cyan-500 font-medium">
                Level: {quiz.level}
              </span>
            </div>
            <button className="mt-4 px-5 py-2 rounded-lg text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all font-semibold">
              Start Quiz
            </button>
          </div>
        ))}
      </div>

      {/* Other Quiz*/}
      <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
        🌍 Other Quiz Platforms
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherPlatforms.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="bg-[#11182766] p-5 rounded-xl shadow-sm border border-gray-700 hover:bg-[#1f2937aa] transition block text-left"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-1">{p.name}</h3>
            <p className="text-gray-300 text-sm">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
