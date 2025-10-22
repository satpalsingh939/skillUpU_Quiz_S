
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Register({ setUser }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("https://skillupu-quiz-s.onrender.com/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userName", data.user.name);
//         setUser(data.user);
//         navigate("/home");
//       } else {
//         setMsg(data.msg || "Register failed");
//       }
//     } catch (err) {
//       setMsg("Server error");
//     }
//   };

//   return (
//     <section className="flex flex-col h-full md:flex-row lg:h-[90vh] lg:w-full text-white">
//   <div className="flex-1 flex justify-center items-center bg-[#25222f] pt-10 pb-12">
//     <div className="bg-[#1e1b29d2] rounded-2xl p-8 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] shadow-[0_1px_1px_1px_rgba(30,58,138,0.5)]  transition-transform duration-300 ease-in-out hover:translate-y-4 hover:scale-105">
//       <h2 className="text-2xl font-semibold text-center mb-6">
//         Sign-UP
//       </h2>
//       {msg && <div className="text-red-400 text-center mb-4">{msg}</div>}
//       <form onSubmit={submit} className="flex flex-col gap-4">
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Full Name"
//           required
//           className="p-3 rounded-lg text-black focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90"
//         />
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//           className="p-3 rounded-lg text-black focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//           className="p-3 rounded-lg text-black focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90"
//         />
//         <button
//           type="submit"
//           className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold hover:from-cyan-500 hover:to-blue-700 transition-all"
//         >
//           Register
//         </button>
//       </form>
//       <p className="text-sm text-center mt-4">
//         Already have an account?{" "}
//         <Link
//           to="/login"
//           className="text-cyan-400 font-semibold hover:underline"
//         >
//           Login here
//         </Link>
//       </p>
//     </div>
//   </div>

//   <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-800 to-cyan-500 text-center md:text-left">
//     <h1 className="text-3xl md:text-4xl font-bold mb-4">
//       Join Our Quiz Platform - <strong>SkillUpU</strong>🎓
//     </h1>
//     <p className="text-base md:text-lg text-gray-200 mb-6 max-w-md">
//       Create your free account and start practicing quizzes across multiple
//       domains. Track your progress, earn certificates, and boost your
//       learning journey 🚀 
//     </p>
//     <img
//       src="/img/image (15).png"
//       alt="Quiz Illustration"
//       className="w-3/4 md:w-2/3 lg:w-2/3 rounded-xl shadow-[0_2px_0px_0px_rgba(30,58,138,0.5)]  transition-transform duration-300 ease-in-out hover:rotate-3 hover:scale-105"
//     />
//   </div>
// </section>

//   );
// }

// -------------------------

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // ✅ Send OTP to email
  const sendOtp = async () => {
    try {
      // const res = await fetch("http://localhost:5000/api/auth/send-otp", {

      const res = await fetch("https://skillupu-quiz-s.onrender.com/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setOtpSent(true);
        // setMsg("OTP sent successfully! Check your email 📧");
        alert("OTP sent successfully! Please check your email.");
      } else
        // setMsg(data.msg || "Failed to send OTP"); 
        alert(data.msg || "Failed to send OTP");
    } catch (err) {
      // setMsg("Server error");
      alert("Server error. Please try again later.");
    }
  };

  // ✅ Verify OTP and Register
  const submit = async (e) => {
    e.preventDefault();
    try {
      // const res = await fetch("http://localhost:5000/api/auth/register-with-otp", {

      const res = await fetch("https://skillupu-quiz-s.onrender.com/api/auth/register-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);
        setUser(data.user);
        navigate("/home");
      } else setMsg(data.msg || "Registration failed");
    } catch (err) {
      setMsg("Server error");
    }
  };

  return (
    <section className="flex flex-col h-full md:flex-row lg:h-[90vh] lg:w-full text-white">
      <div className="flex-1 flex justify-center items-center bg-[#25222f] pt-10 pb-12">
        <div className="bg-[#1e1b29d2] rounded-2xl p-8 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] shadow-[0_1px_1px_1px_rgba(30,58,138,0.5)] transition-transform duration-300 ease-in-out hover:translate-y-4 hover:scale-105">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign-Up</h2>
          {msg && <div className="text-red-400 text-center mb-4">{msg}</div>}

          <form onSubmit={submit} className="flex flex-col gap-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="p-3 rounded-lg text-black focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="p-3 rounded-lg text-black focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="p-3 rounded-lg text-black focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90"
            />

            {!otpSent ? (
              <button
                type="button"
                onClick={sendOtp}
                className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold hover:from-cyan-500 hover:to-blue-700 transition-all"
              >
                Send OTP
              </button>
            ) : (
              <>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                  className="p-3 rounded-lg text-black focus:ring-2 focus:ring-cyan-400 outline-none bg-white/90"
                />
                <button
                  type="submit"
                  className="w-full p-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-600 text-white font-semibold hover:from-green-500 hover:to-blue-700 transition-all"
                >
                  Verify & Register
                </button>
              </>
            )}
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-800 to-cyan-500 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Quiz Platform - <strong>SkillUpU</strong> 🎓
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-md">
          Create your free account and start practicing quizzes across multiple
          domains. Track your progress, earn certificates, and boost your learning journey 🚀
        </p>
        <img
          src="/img/image (15).png"
          alt="Quiz Illustration"
          className="w-3/4 md:w-2/3 lg:w-2/3 rounded-xl shadow-[0_2px_0px_0px_rgba(30,58,138,0.5)] transition-transform duration-300 ease-in-out hover:rotate-3 hover:scale-105"
        />
      </div>
    </section>
  );
}
