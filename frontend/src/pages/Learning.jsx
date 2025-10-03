import React, { useEffect, useState } from "react";

export default function LearningResources() {
  const [data, setData] = useState(null);

  const resources = [
    {
      name: "React Basics",
      type: "react Official Docs",
      desc: "Learn the fundamentals of React components, props, and state.",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      name: "JavaScript ES6",
      type: "W3Schools Tutorial",
      desc: "Understand ES6 features like arrow functions, promises, and modules.",
      link: "https://www.w3schools.com/js/js_es6.asp",
    },
    {
      name: "Data Structures",
      type: "GFG Article",
      desc: "Detailed explanations of arrays, stacks, queues, and trees.",
      link: "https://www.geeksforgeeks.org/data-structures/",
    },
    {
      name: "Algorithms Practice",
      type: "LeetCode",
      desc: "Solve challenges and improve problem-solving skills.",
      link: "https://leetcode.com/problemset/all/",
    },
    {
      name: "Quiz Strategies",
      type: "Growth Article",
      desc: "The Art of Quiz Design: 20 Tips for Engaging Questions.",
      link: "https://www.growthengineering.co.uk/learning-quizzes/",
    },
    {
      name: "UI/UX Design Tips",
      type: "Tips",
      desc: "30 Practical Tips for Effective User Interface Design.",
      link: "https://uxplanet.org/30-practical-tips-for-effective-user-interface-design-59e1e46ac370",
    },
  ];



  return (
    <section className="mx-auto p-6 bg-[#25222f] text-white shadow-lg min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400">
        📘 Learning Resources
      </h2>
      <p className="text-gray-400 mb-6">
        Explore this resources to increase your knowledge and prepare for
        quizzes.
      </p> 
   
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {resources.map((res, i) => (
          <div
            key={i}
            className="bg-[#1a1d2456] hover:bg-[#1f293786] transition transform hover:-translate-y-1 p-5 rounded-xl shadow-md border border-gray-700 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">
                {res.name}
              </h3>
              <p className="text-gray-400 text-sm font-medium mb-2">
                {res.type}
              </p>
              <p className="text-gray-300 text-sm mb-4">{res.desc}</p>
            </div>
            <a
              href={res.link}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-block px-4 py-2 rounded-md text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all text-sm font-medium text-center"
            >
              Access
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-[#11182724] rounded-xl shadow-sm border border-gray-700">
        <h3 className="text-cyan-400 mb-3 font-semibold text-lg">
          🔗 Extra Learning Resources
        </h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li>
            📺 Watch tutorials on{" "}
            <a
              href="https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=DaXAv6Sa_PjKweC_"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-500 hover:underline"
            >
              Code With Harry
            </a>
          </li>
          <li>
            📖 Read notes on{" "}
            <a
              href="https://developer.mozilla.org/en-US/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-500 hover:underline"
            >
              MDN Web Docs
            </a>
          </li>
          <li>
            📝 Practice coding [DSA] on{" "}
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-500 hover:underline"
            >
              LeetCode
            </a>
          </li>
          <li>
            📚 Learn concepts from{" "}
            <a
              href="https://www.geeksforgeeks.org/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-500 hover:underline"
            >
              GeeksForGeeks
            </a>
          </li>
          <li>
            ⚡ Practice web development on{" "}
            <a
              href="https://www.codechef.com/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-500 hover:underline"
            >
              CodeChef
            </a>
          </li>
          <li>
            🌐 Learn basics from{" "}
            <a
              href="https://www.w3schools.com/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-500 hover:underline"
            >
              W3Schools
            </a>
          </li> 
          <li>
            💡 Tip: Revise notes daily & attempt small quizzes for better
            understanding.
          </li>
        </ul>
      </div>
    </section>
  );
}
