
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav({ user, setUser }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-[#1e1b29] text-white shadow-md w-full z-50 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition"
        >
          SkillUpU
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {!user && <Link to="/" className="hover:text-teal-400">Home</Link>}
          {user && <Link to="/home" className="hover:text-teal-400">Home</Link>}

          <Link to="/learning" className="hover:text-teal-400">Learning</Link>

          {!user && <Link to="/login" className="hover:text-teal-400">Login</Link>}
          {!user && <Link to="/register" className="hover:text-teal-400">Register</Link>}
          {user && <Link to="/quiz" className="hover:text-teal-400">Quiz</Link>}
          {user && <Link to="/profile" className="hover:text-teal-400">Profile</Link>}
          {user && (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-[#00c6fb] to-[#005bea] text-white px-4 py-1.5 rounded-md font-medium hover:from-[#00c5fbc1] hover:to-[#005aeace] transition"
            >
              Logout
            </button>
          )}
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {/* Mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-[#1e1b29] px-6 py-4 border-t border-gray-700">
          {!user && <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>}
          {user && <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>}

          <Link to="/learning" onClick={() => setMenuOpen(false)}>Learning</Link>
          {!user && <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>}
          {!user && <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>}
          {user && <Link to="/quiz" onClick={() => setMenuOpen(false)}>Quiz</Link>}
          {user && <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>}
          {user && (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="bg-gradient-to-r from-[#00c6fb] to-[#005bea] text-white px-4 py-2 rounded-md font-medium hover:from-[#00c5fbc1] hover:to-[#005aeace] transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Nav;
