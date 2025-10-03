
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState([]);

  const [percentage, setPercentage] = useState(null);
  const [grade, setGrade] = useState("");


  const domain = localStorage.getItem("selectedDomain") || "javascript";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Login required to start quiz");

    fetch(`https://skillupu-quiz-s.onrender.com/api/questions?domain=${domain}`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject("Failed")))
      .then(setQuestions)
      .catch(() => setQuestions([]));
  }, [domain]);

  const submitAnswer = () => {
    const correct =
      questions[index].answer &&
      questions[index].options[selected] === questions[index].answer;

    if (correct) setScore((s) => s + 1);

    const next = index + 1;
    if (next >= questions.length) {
      const finalScore = score + (correct ? 1 : 0);
      const per = ((finalScore / questions.length) * 100).toFixed(2);

      let g = "";
      if (per >= 90) g = "A+";
      else if (per >= 75) g = "A";
      else if (per >= 60) g = "B";
      else if (per >= 40) g = "C";
      else g = "F";

      const passed = per >= 75;

      setPercentage(per);
      setGrade(g);

      const token = localStorage.getItem("token");
      fetch("https://skillupu-quiz-s.onrender.com/api/user/score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          domain,
          score: finalScore,
          total: questions.length,
          percentage: per,
          grade: g,
          passed,
          level: "Beginner",
        }),
      }).catch(() => { });

      setFinished(true);
    } else {
      setIndex(next);
      setSelected(null); 
    }
  };

  if (!questions.length)
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-[#25222f] text-white">
        <div className="p-6 bg-[#2a2a2d4f] rounded-lg shadow-md">
          Loading questions...
        </div>
      </div>
    );

  if (finished)
    return (
      <div className="flex items-center justify-center min-h-[86vh] bg-[#25222f] px-4">
        <div className="m-8 bg-[#2a2a2d5a] shadow-lg rounded-2xl p-8 md:p-12 text-center w-full max-w-2xl border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            Quiz Completed 🎯
          </h2>

          <p className="text-lg md:text-xl mb-6 text-cyan-100 font-semibold">
            Your Score:{" "}
            <span className="text-cyan-100 text-xl md:text-2xl font-semibold">
              {score} / {questions.length} ({percentage}%)
            </span>
          </p>

          <div className="mt-6">
            {percentage >= 70 ? (
              // ✅ Case 1: certificate
              <div className="hover:bg-[#1f1f223e] hover:border hover:border-gray-700 rounded-2xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.03]">
                <div className="text-green-400 text-6xl mb-4 animate-bounce">🎉</div>
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  Congratulations!
                </h2>
                <p className="text-gray-300 text-md md:text-lg mb-6">
                  You successfully passed the{" "}
                  <span className="font-semibold">{domain}</span> quiz with{" "}
                  <span className="text-green-400 font-bold">{percentage}%</span>.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      `/certificate.html?name=${localStorage.getItem("userName")}&domain=${domain}&score=${score}&grade=${grade}&percentage=${percentage}`,
                      "_blank"
                    )
                  }
                  className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all w-full md:w-auto"
                >
                  📥 Download Certificate
                </button>
              </div>
            ) : percentage >= 40 ? (
              // ⚠️ Case 2: Pass (but no certificate)
              <div className="hover:bg-[#1f1f223e] hover:border hover:border-gray-700 rounded-2xl p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.03]">
                <div className="text-yellow-400 text-6xl mb-4 animate-pulse">⚠️</div>
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  Good Job!
                </h2>
                <p className="text-gray-300 text-md md:text-lg mb-6">
                  You passed the quiz with{" "}
                  <span className="text-yellow-400 font-bold">{percentage}%</span>. <br />
                  But you need at least{" "}
                  <span className="font-semibold text-green-400">75%</span> to earn a
                  certificate.
                  <br />
                  Sorry, you are not eligible for this certificate.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-600 hover:from-yellow-500 hover:to-orange-700 transition w-full md:w-auto"
                >
                  🔄 Try Again & Improve
                </button>
              </div>
            ) : (
              // ❌ Case 3: Fail (below 40%)
              <div className="hover:bg-[#1f1f223e] hover:border hover:border-gray-700 rounded-2xl p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.03]">
                <div className="text-red-400 text-6xl mb-4 animate-pulse">❌</div>
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  Oops!
                </h2>
                <p className="text-gray-300 text-md md:text-lg mb-6">
                  Sorry, you scored only{" "}
                  <span className="text-red-400 font-bold">{percentage}%</span>. <br />
                  You did not pass the quiz exam.
                </p>
                <p className="text-gray-400 text-sm mt-2 md:text-base">
                  Don't worry, practice makes perfect! <br /> Try again and score better 🚀
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-400 to-pink-600 hover:from-red-500 hover:to-pink-700 transition w-full md:w-auto"
                >
                  🔄 Try Again
                </button>
              </div>
            )}
          </div>

          <p className="text-gray-400 text-sm mt-6 md:text-base">
            💡 Tip: Review the questions you missed and try again to improve your
            score!
          </p>
        </div>
      </div>
    );

  const q = questions[index];

  return (
    <div className="flex flex-col md:flex-row min-h-[410px] bg-[#25222f] text-white">
      <div className="flex-1 p-5 border-b md:border-b-0 md:border-r border-gray-200">
        <h2 className="text-xl font-bold mb-2">{domain.toUpperCase()} - MCQ</h2>
        <p className="text-base leading-relaxed">{q.question}</p>
      </div>

      <div className="flex-1 p-5 flex flex-col gap-6">
        <h4 className="text-lg font-semibold">Select the correct option:</h4>

        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => (
            <label
              key={i}
              className={`p-3.5 rounded-md border flex items-center gap-2 cursor-pointer transition ${selected === i
                ? "bg-[#1f3b5a] border-blue-600"
                : "bg-[#1a1d24d8] border-gray-700 hover:bg-[#2a2f3a]"
                }`}
            >
              <input
                type="radio"
                name={`question-${index}`}   
                checked={selected === i}
                onChange={() => setSelected(i)}  
                className="accent-blue-600"
              />
              {opt}
            </label>
          ))}
        </div>



        <div className="flex justify-end">
          <button
            onClick={submitAnswer}
            className="px-6 py-2 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            {index + 1 === questions.length ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
