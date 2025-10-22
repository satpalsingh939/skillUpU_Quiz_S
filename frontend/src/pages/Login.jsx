
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login({ setUser }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("https://skillupu-quiz-s.onrender.com/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userName", data.user.name);
//         setUser(data.user);
//         navigate("/home");
//       } else {
//         setMsg(data.msg || "Login failed");
//       }
//     } catch (err) {
//       setMsg("Server error");
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-[90vh] w-full text-white">
//       <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-800 to-cyan-500">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Welcome Back - <strong>SkillUpU</strong>👋</h1>
//         <p className="text-base md:text-lg text-gray-200 mb-6 max-w-md text-center">
//           Login to continue your quiz journey and track your progress.
//         </p>
//         <img
//           src="/img/image (8).png"
//           alt="quiz-illustration"
//           className="w-3/4 md:w-2/3 lg:w-2/2  transition-transform duration-300 ease-in-out hover:-rotate-3 hover:scale-105"
//         />
//       </div>

//       <div className="flex-1 flex justify-center items-center bg-[#25222f] pt-8 pb-12">
//         <div className="bg-[#1e1b29d2] rounded-2xl p-8 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%]  shadow-[0_1px_1px_1px_rgba(30,58,138,0.5)]  transition-transform duration-300 ease-in-out hover:translate-y-4 hover:scale-105">
//           <h2 className="text-2xl font-semibold text-center mb-6">Sign-IN</h2>
//           {msg && <div className="text-red-400 text-center mb-4">{msg}</div>}
//           <form onSubmit={submit} className="flex flex-col gap-4">
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               type="email"
//               required
//               className="p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//               className="p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
//             />
//             <button
//               type="submit"
//               className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold hover:from-cyan-500 hover:to-blue-700 transition-all"
//             >
//               Login
//             </button>
//             <p className="text-sm text-center mt-2">
//               Don’t have an account?{" "}
//               <span
//                 onClick={() => navigate("/register")}
//                 className="text-cyan-400 font-semibold cursor-pointer hover:underline"
//               >
//                 Register
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// -------------------


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [fpEmail, setFpEmail] = useState("");
  const [fpNewPassword, setFpNewPassword] = useState("");
  const [fpStep, setFpStep] = useState(1); // 1=email, 2=new password
  const [fpMsg, setFpMsg] = useState("");
  const navigate = useNavigate();

  // Login submit
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://skillupu-quiz-s.onrender.com/api/auth/login", {
      // const res = await fetch("http://localhost:5000/api/auth/login", {
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

  // Step 1: Check email
  const sendFpEmail = async () => {
    try {
      const res = await fetch("https://skillupu-quiz-s.onrender.com/api/auth/forgot-password", {
      // const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: fpEmail }),
      });
      const data = await res.json();
      setFpMsg(data.msg);
      if (res.ok) setFpStep(2);
    } catch (err) {
      setFpMsg("Server error");
    }
  };

  // Step 2: Reset password
  const resetFpPassword = async () => {
    try {
      const res = await fetch("https://skillupu-quiz-s.onrender.com/api/auth/reset-password", {
      // const res = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: fpEmail, newPassword: fpNewPassword }),
      });
      const data = await res.json();
      setFpMsg(data.msg);
      if (res.ok) {
        setShowForgot(false);
        setFpStep(1);
        setFpEmail("");
        setFpNewPassword("");
      }
    } catch (err) {
      setFpMsg("Server error");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[90vh] w-full text-white">
      {/* Left Illustration */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-800 to-cyan-500">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Welcome Back - <strong>SkillUpU</strong>👋
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-md text-center">
          Login to continue your quiz journey and track your progress.
        </p>
        <img
          src="/img/image (8).png"
          alt="quiz-illustration"
          className="w-3/4 md:w-2/3 lg:w-2/2 transition-transform duration-300 ease-in-out hover:-rotate-3 hover:scale-105"
        />
      </div>

      {/* Right Login Form */}
      <div className="flex-1 flex justify-center items-center bg-[#25222f] pt-8 pb-12 relative">
        <div className="bg-[#1e1b29d2] rounded-2xl p-8 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] shadow-[0_1px_1px_1px_rgba(30,58,138,0.5)] transition-transform duration-300 ease-in-out hover:translate-y-4 hover:scale-105">
          
          <h2 className="text-2xl font-semibold text-center mb-6">Sign-IN</h2>
          {msg && <div className="text-red-400 text-center mb-4">{msg}</div>}

          {/* Login Form */}
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

          {/* Forgot Password Link */}
          <p className="text-sm text-center mt-2">
            <span
              className="text-cyan-400 font-semibold cursor-pointer hover:underline"
              onClick={() => setShowForgot(true)}
            >
              Forgot Password?
            </span>
          </p>

        </div>

        {/* Center Modal for Forgot Password */}
        {showForgot && (
          <div className="absolute inset-0 flex justify-center items-center bg-[#25222f] bg-opacity-100 z-50">
            <div className="bg-[#1e1b29d2] rounded-2xl p-8 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] relative">
              <button
                className="absolute top-2 right-2 text-white font-bold"
                onClick={() => setShowForgot(false)}
              >
                X
              </button>
              {fpMsg && <div className="text-red-400 mb-4 text-center">{fpMsg}</div>}
              
              {fpStep === 1 && (
                <>
                  <input
                    value={fpEmail}
                    onChange={(e) => setFpEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full p-3 mb-3 rounded-lg text-black"
                  />
                  <button
                    onClick={sendFpEmail}
                    className="w-full p-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600"
                  >
                    Continue
                  </button>
                </>
              )}

              {fpStep === 2 && (
                <>
                  <input
                    value={fpNewPassword}
                    onChange={(e) => setFpNewPassword(e.target.value)}
                    type="password"
                    placeholder="Enter new password"
                    className="w-full p-3 mb-3 rounded-lg text-black"
                  />
                  <button
                    onClick={resetFpPassword}
                    className="w-full p-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600"
                  >
                    Update Password
                  </button>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
