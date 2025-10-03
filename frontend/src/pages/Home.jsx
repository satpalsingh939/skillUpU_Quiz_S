
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  // const domains = ["Frontend", "Backend", "Database", "General Knowledge"];

  const [domains, setDomains] = useState([]);
  const [activeDomain, setActiveDomain] = useState(null);
  const [quizzes, setQuizzes] = useState({});


  useEffect(() => {
    fetch("http://localhost:5000/api/questions/domains")
      .then((res) => res.json())
      .then((data) => {
        setDomains(data);
        const grouped = {};
        data.forEach((d) => {
          const cat =
            ["html", "css", "javascript", "reactjs"].includes(d)
              ? "Frontend"
              : ["nodejs", "expressjs"].includes(d)
                ? "Backend"
              :  ["mongodb", "mysql"].includes(d)
                ? "Database"

                : "Other";
          if (!grouped[cat]) grouped[cat] = [];
          grouped[cat].push(d);
        });
        setQuizzes(grouped);
      })
      .catch(() => setDomains([]));
  }, []);

  const openCard = (domain) => setActiveDomain(domain);
  const closeCard = () => setActiveDomain(null);

  const selectQuiz = (quiz) => {
    localStorage.setItem("selectedDomain", quiz.toLowerCase());
    navigate("/quiz");
  };

  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        // setStatus("✅ Message sent successfully!");
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        // setStatus("❌ " + data.error);
        alert("❌ " + data.error);
      }
    } catch (err) {
      setStatus("❌ Something went wrong!");
    }
  };

  return (
    <div className="bg-[#25222f] text-white font-poppins">

      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">

        <div className="md:w-1/2 text-center mb-8 md:mb-0">
          <img
            src="/img/image (12).png"
            alt="Quiz Preview"
            className="max-w-xs md:max-w-md mx-auto rounded-xl transition-transform duration-300 ease-in-out hover:translate-y-3"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Learn & Test Your Skills 🎓
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Welcome to <b>SkillUpU</b> – the easy and fun way to learn! <br />
            Practice quizzes, track your progress, earn certificates, and get
            ready for exams & interviews.
          </p>
          <button
            onClick={() => navigate("/quiz")}
            className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-700 hover:from-cyan-500 hover:to-blue-800"
          >
            Start Quiz
          </button>
        </div>
      </section>


      {/* ---------- */}
      <section className="px-8 md:px-28 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose SkillUpU?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            SkillUpU is built to make your learning journey simple and
            effective. From <b>interactive quizzes</b> to <b>certificates</b> and{" "}
            <b>resources</b>, everything is designed to help you learn faster
            and better.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col gap-5">
            {[
              {
                title: "💡 Practice Quizzes",
                desc: "Test yourself with quizzes from multiple subjects and topics.",
              },
              {
                title: "📘 Learning Resources",
                desc: "Access study materials for understanding your concepts.",
              },
              {
                title: "🏆 Earn Certificates",
                desc: "Share your achievements and earn certificates after completing quizzes.",
              },
              {
                title: "🛠️ Help Provider",
                desc: "Get instant help from our team and continue learning without interruptions.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-[#33415540] p-5 rounded-lg shadow-md hover:scale-105 transition"
              >
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex-1 text-center">
            <img
              src="/img/image (15).png"
              alt="Features"
              className="w-3/4 md:w-2/3 lg:w-2/3 rounded-xl shadow-[0_2px_0px_0px_rgba(30,58,138,0.5)]  transition-transform duration-300 ease-in-out hover:rotate-3 hover:scale-105 max-w-md mx-auto "
            />
          </div>
        </div>
      </section>

      {/* <section className="px-8 md:px-16 py-16 text-center">
  
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    📚 Choose Your Field
  </h2>

 
  <p className="text-gray-300 text-sm md:text-base mb-8 max-w-xl mx-auto">
    Click on a domain below to see quizzes related to that field. <br/>
    Select a quiz, boost your skills, and track and increase your score & growth! 🚀
  </p>


  <div className="flex justify-center flex-wrap gap-6">
    {domains.map((d) => (
      <div
        key={d}
        onClick={() => openCard(d)}
        className="bg-[#33415540] px-6 py-5 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
      >
        <h3 className="font-semibold">{d}</h3>
      </div>
    ))}
  </div>

  
  {activeDomain && (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={closeCard}
    >
      <div
        className="bg-[#1e1b29] p-8 rounded-xl shadow-lg w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">
          {activeDomain} Quizzes
        </h2>
        <div className="flex flex-col gap-3">
          {quizzes[activeDomain].map((q) => (
            <div
              key={q}
              onClick={() => selectQuiz(q)}
              className="bg-[#33415560] p-3 rounded-md cursor-pointer hover:bg-[#47556990] transition"
            >
              {q} Quiz →
            </div>
          ))}
        </div>
        <button
          onClick={closeCard}
          className="mt-5 w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-700 text-white rounded-md font-semibold hover:from-cyan-500 hover:to-blue-800"
        >
          Close ✖
        </button>
      </div>
    </div>
  )}
</section> */}


      {/* ------------------- */}
      <section className="px-8 md:px-16 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">📚 Choose Your Field</h2>
        <p className="text-gray-300 text-sm md:text-base mb-8 max-w-xl mx-auto">
          Click on a domain below to see quizzes related to that field. <br />
          Select a quiz, boost your skills, and track your growth! 🚀
        </p>

        <div className="flex justify-center flex-wrap gap-6">
          {Object.keys(quizzes).map((cat) => (
            <div
              key={cat}
              onClick={() => openCard(cat)}
              className="bg-[#33415540] px-6 py-5 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
            >
              <h3 className="font-semibold">{cat}</h3>
            </div>
          ))}
        </div>

        {activeDomain && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={closeCard}
          >
            <div
              className="bg-[#1e1b29] p-8 rounded-xl shadow-lg w-11/12 max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">{activeDomain} Quizzes</h2>
              <div className="flex flex-col gap-3">
                {quizzes[activeDomain].map((q) => (
                  <div
                    key={q}
                    onClick={() => selectQuiz(q)}
                    className="bg-[#33415560] p-3 rounded-md cursor-pointer hover:bg-[#47556990] transition"
                  >
                    {q.toUpperCase()} Quiz →
                  </div>
                ))}
              </div>
              <button
                onClick={closeCard}
                className="mt-5 w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-700 text-white rounded-md font-semibold hover:from-cyan-500 hover:to-blue-800"
              >
                Close ✖
              </button>
            </div>
          </div>
        )}
      </section>




      {/* -------------- */}
      <section className="px-8 md:px-16 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          📘 Want to Learn More?
        </h2>
        <p className="text-gray-300 mb-6">
          Visit our learning section to access guides and resources before
          attempting quizzes.
        </p>
        <button
          onClick={() => navigate("/learning")}
          className="px-6 py-3 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-700 hover:text-white transition"
        >
          Go to Learning →
        </button>
      </section>

      {/* ------------ */}
      <section className="px-4 sm:px-6 md:px-16 py-8">
        <div className="bg-[#33415540] rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden max-w-4xl mx-auto md:h-[360px] lg:h-[370px]">

          <div className="md:w-1/2 sm:h-60 md:h-auto">
            <img
              src="/img/image (16).png"
              alt="Contact"
              className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            />
          </div>

          <div className="md:w-1/2 p-4 sm:p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">📩 Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-gray-300 text-black bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-gray-300 text-black bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-gray-300 text-black bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
            {/* {status && (
        <p className="mt-3 text-sm text-green-400 font-medium">{status}</p>
      )} */}
          </div>
        </div>
      </section>



    </div>
  );
}
