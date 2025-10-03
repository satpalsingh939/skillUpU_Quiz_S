import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1e1b29] text-gray-300 py-10 px-6 md:px-20">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
    <div className="flex flex-col items-center md:items-start text-center md:text-left lg:ml-3">
      <h2 className="text-2xl font-bold text-teal-400 mb-3">
        SkillUpU
      </h2>
      <p className="text-gray-400 text-sm max-w-xs">
        Test your Knowledge.Practice quizzes, track your progress, earn certificates, and get
            ready for next level.🎓 <br/> 
            satpalsinghjadhav5@gmail.com <br/>
            7224925007 [Indore MP]
      </p>
    </div>

    {/* Links */}
    <div className="flex flex-col gap-6 md:col-span-2 sm:flex-row sm:gap-12 items-center md:items-start text-center md:text-left lg:ml-24">
      <div>
        <h4 className="text-lg font-semibold mb-3 text-gray-100">
          Platform
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/about" className="hover:text-teal-400">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/learning" className="hover:text-teal-400">
              Learning Resources
            </Link>
          </li>
          <li>
            <Link to="/help" className="hover:text-teal-400">
              Help Center
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3 text-gray-100">
          For Users
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/quizz" className="hover:text-teal-400">
              Practice Quizzes
            </Link>
          </li>
          <li>
            <Link to="/certificate" className="hover:text-teal-400">
              Certificates
            </Link>
          </li>
          <li>
            <Link to="/community" className="hover:text-teal-400">
              Community
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3 text-gray-100">
          Legal
        </h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/term" className="hover:text-teal-400">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-teal-400">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/cookies" className="hover:text-teal-400">
              Cookie Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
      <div className="flex flex-col gap-3 items-center md:items-start">
        <img
          src="/img/playicon.png"
          alt="Google Play"
          className="w-36 cursor-pointer rounded-2xl"
        />
        {/* <img
          src="/appstore.png"
          alt="App Store"
          className="w-36 cursor-pointer"
        /> */}
      </div>
      <div className="flex gap-4 text-lg mt-3 justify-center md:justify-start lg:ml-7 md:ml-8">
        <a href="https://github.com/satpalsingh939" className="hover:text-teal-400">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/satpal_singh_939?igsh=MTRkbnkzM2NvZ2poMA==" className="hover:text-teal-400">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/satpal-singh-jadhav-ab2875295r" className="hover:text-teal-400">
          <FaLinkedin />
        </a>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-400 text-xs mt-6">
    © {new Date().getFullYear()} SkillUpU . All Rights Reserved.
  </div>
</footer>

  );
}
