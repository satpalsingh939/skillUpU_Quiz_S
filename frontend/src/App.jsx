import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./index.css"

import FirstPage from "./pages/firstPage";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Quiz from "./pages/Quiz";
import Profile from "./pages/Profile";
import Learning from "./pages/Learning";
import Footer from "./components/Footer";

import About from "./pages/About";
import Quizzes from "./pages/Quizzes";
import Privacy from "./pages/Privacy";
import Help from "./pages/Help";
import Cookies from "./pages/Cookies";
import Community from "./pages/Community";
import Certificates from "./pages/Certificates";
import Term from "./pages/Terms";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Nav user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/quiz" element={<Quiz user={user} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learning" element={<Learning />} />

        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certificates />} />
        <Route path="/community" element={<Community />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/quizz" element={<Quizzes />} />
        <Route path="/term" element={<Term />} />

      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
