
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://skillupu-quiz-s.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);
        setUser(data.user);
        navigate("/home");
      } else {
        setMsg(data.msg || "Login failed");
      }
    } catch (err) {
      setMsg("Server error");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[90vh] w-full text-white">
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-800 to-cyan-500">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Welcome Back - <strong>SkillUpU</strong>👋</h1>
        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-md text-center">
          Login to continue your quiz journey and track your progress.
        </p>
        <img
          src="/img/image (8).png"
          alt="quiz-illustration"
          className="w-3/4 md:w-2/3 lg:w-2/2  transition-transform duration-300 ease-in-out hover:-rotate-3 hover:scale-105"
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-[#25222f] pt-8 pb-12">
        <div className="bg-[#1e1b29d2] rounded-2xl p-8 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%]  shadow-[0_1px_1px_1px_rgba(30,58,138,0.5)]  transition-transform duration-300 ease-in-out hover:translate-y-4 hover:scale-105">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign-IN</h2>
          {msg && <div className="text-red-400 text-center mb-4">{msg}</div>}
          <form onSubmit={submit} className="flex flex-col gap-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              required
              className="p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
            />
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold hover:from-cyan-500 hover:to-blue-700 transition-all"
            >
              Login
            </button>
            <p className="text-sm text-center mt-2">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-cyan-400 font-semibold cursor-pointer hover:underline"
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

