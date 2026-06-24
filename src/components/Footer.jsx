import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaEnvelope,
  FaRegCopyright,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500 bg-clip-text text-transparent">
            Bhaskar.dev
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            Fullstack developer building modern, reliable, and high-performance experiences.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500 bg-clip-text text-transparent">Quick Links</h4>
          <div className="flex flex-col items-center gap-2 text-sm md:text-base text-slate-600 dark:text-slate-300">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-300">
              Home
            </Link>
            <Link
              to="services"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-300"
            >
              Services
            </Link>
            <Link
              to="experience"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-300"
            >
              Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500 bg-clip-text text-transparent">Social</h4>
          <div className="flex items-center justify-center gap-3 text-2xl">
            <a
             href="https://github.com/BhaskarT1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/bhaskartikale/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[#0a66c2] hover:text-[#0d7de6] transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/BTikale"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="text-slate-900 dark:text-slate-100 hover:text-cyan-500 transition-colors"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://www.instagram.com/vishaltikale_18/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-pink-500 hover:text-rose-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/bhaskar.tikale/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-[#1877f2] hover:text-[#2a88ff] transition-colors"
            >
              <FaFacebookSquare />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500 bg-clip-text text-transparent">Contact Info</h4>
          <div className="flex flex-col items-center gap-3 text-sm md:text-base text-slate-600 dark:text-slate-300">
            <a
              href="mailto:bhaskartikale@gmail.com"
              className="inline-flex items-center justify-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
            >
              <FaEnvelope className="text-cyan-600 dark:text-cyan-300" />
              bhaskartikale@gmail.com
            </a>
            <p className="inline-flex items-center justify-center gap-2">
              <FiMapPin className="text-cyan-600 dark:text-cyan-300" />
              Nagpur, Maharashtra, India
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 pb-8">
        <p className="text-xs md:text-sm text-center inline-flex items-center justify-center w-full gap-2 text-slate-600 dark:text-slate-300">
          <FaRegCopyright className="text-cyan-500" />
          <span>{new Date().getFullYear()} Bhaskar Tikale</span>
          <HiSparkles className="text-rose-500" />
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500 bg-clip-text text-transparent font-medium">
            All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;