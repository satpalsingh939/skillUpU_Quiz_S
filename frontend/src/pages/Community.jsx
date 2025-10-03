import React from "react";

const categories = [
  { name: "General Discussion", desc: "Talk about quizzes, tips and strategies" },
  { name: "Resources", desc: "Share useful study materials & guides" },
  { name: "Announcements", desc: "Official news and updates from QuizMaster" },
];

const reviews = [
  { name: "Satpal Singh (Creator)", text: "I built this platform to make quiz practice fun and skill-focused 🚀", rating: 5 },
  { name: "Harpal (First User)", text: "Being the first user, I felt the design and speed are awesome!", rating: 5 },
  { name: "Angel Developer (Tester)", text: "Tested features and found the UI smooth and bug-free. Recommended 👌", rating: 4 },
];

export default function Community() {
  return (
    <div className="bg-[#25222f] min-h-screen px-6 py-12 font-['Segoe_UI',sans-serif] text-white">

      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-cyan-400">Community</h1>
        <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
          Discuss, share resources, and connect with other learners...
        </p>
     
      <div className=" flex flex-wrap justify-center gap-6 mb-6">
          {categories.map((c, i) => (
            <div
              key={i}
              className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 transition w-72 p-6 rounded-2xl shadow-lg hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">{c.name}</h3>
              <p className="text-gray-400">{c.desc}</p>
            </div>
          ))}
        </div>

  <button className=" text-white px-6 py-3 rounded-xl text-lg bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all ">
          + Add This Feature Soon...
        </button>

      </section>


      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-10">What User's Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#1a1d2456] hover:bg-[#1f293786] border border-gray-700 transition w-80 p-6 rounded-2xl shadow-lg text-center hover:-translate-y-2"
            >
              <p className="text-gray-400 italic mb-3">“{r.text}”</p>
              <div className="flex justify-center mb-2">
                {Array(r.rating).fill("⭐").map((star, idx) => (
                  <span key={idx} className="text-yellow-500">{star}</span>
                ))}
              </div>
              <h3 className="font-semibold text-cyan-400">{r.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
