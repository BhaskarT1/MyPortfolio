import React, { useEffect, useState } from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import SparkleField from "./SparkleField";


import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";
import {
  DiCss3,
  DiAndroid,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiGithubBadge,
  DiJava,
  DiPostgresql,
  DiFirebase,
} from "react-icons/di";
import {
  SiAngular,
  SiDocker,
  SiElectron,
  SiGit,
  SiJira,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPython,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiVite,
  SiVuedotjs,
  SiWebpack,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import { HashLoader } from "react-spinners";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showImageLoader, setShowImageLoader] = useState(true);

  useEffect(() => {
    if (!isImageLoaded) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setShowImageLoader(false);
    }, 450);

    return () => clearTimeout(timeoutId);
  }, [isImageLoaded]);

  const containerVariants = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.14,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stack = [
    { label: "HTML5", Icon: DiHtml5, color: "text-orange-600" },
    { label: "CSS3", Icon: DiCss3, color: "text-blue-600" },
    { label: "JavaScript", Icon: DiJavascript1, color: "text-yellow-500" },
    { label: "React", Icon: DiReact, color: "text-cyan-500" },
    { label: "Node.js", Icon: DiNodejsSmall, color: "text-green-500" },
    { label: "Express", Icon: SiExpress, color: "text-slate-700 dark:text-gray-400" },
    { label: "MongoDB", Icon: DiMongodb, color: "text-green-600" },
    { label: "Angular", Icon: SiAngular, color: "text-red-600" },
    { label: "Vue", Icon: SiVuedotjs, color: "text-emerald-500" },
    { label: "Next.js", Icon: SiNextdotjs, color: "text-slate-900 dark:text-gray-100" },
    { label: "MySQL", Icon: SiMysql, color: "text-blue-600" },
    { label: "PostgreSQL", Icon: DiPostgresql, color: "text-blue-700" },
    { label: "Java", Icon: DiJava, color: "text-red-600" },
    { label: "Python", Icon: SiPython, color: "text-yellow-500" },
    { label: "Docker", Icon: SiDocker, color: "text-blue-500" },
    { label: "AWS", Icon: FaAws, color: "text-amber-500" },
    { label: "Linux", Icon: SiLinux, color: "text-slate-800 dark:text-gray-200" },
    { label: "Jira", Icon: SiJira, color: "text-blue-600" },
    { label: "Git", Icon: SiGit, color: "text-orange-600" },
    { label: "GitHub", Icon: DiGithubBadge, color: "text-slate-700 dark:text-gray-400" },
    { label: "Electron", Icon: SiElectron, color: "text-cyan-500" },
    { label: "Android", Icon: DiAndroid, color: "text-green-500" },
    { label: "GenAI", Icon: SiOpenai, color: "text-violet-500" },
    { label: "Tailwind", Icon: SiTailwindcss, color: "text-sky-400" },
    { label: "Redux", Icon: SiRedux, color: "text-purple-600" },
    { label: "Vite", Icon: SiVite, color: "text-purple-400" },
    { label: "Webpack", Icon: SiWebpack, color: "text-blue-500" },
    { label: "Firebase", Icon: DiFirebase, color: "text-yellow-400" },
  ];

  return (
    <section className="pt-28 md:pt-36 pb-14 max-w-[1200px] mx-auto px-4 sm:px-6 relative" id="home">
      <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 opacity-100 dark:opacity-95">
          <SparkleField />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/10 dark:from-slate-950/0 dark:via-slate-950/6 dark:to-slate-950/14" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-14">
        <motion.div
          variants={containerVariants}
          initial="show"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-5">
            <p className="inline-flex items-center text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.22em] rounded-full px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-rose-500/20 text-cyan-800 dark:text-cyan-200 border border-cyan-500/30 shadow-sm shadow-cyan-500/10">
              Building Impactful Digital Experiences
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="min-h-[42px] sm:min-h-[48px] md:min-h-[56px]">
            <TypeAnimation
              sequence={[
                "SDE-I || Full Stack Developer",
                1000,
                "Mobile App Developer",
                1000,
                "MERN/MEAN/MEVN Stack Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-semibold text-slate-600 dark:text-slate-300 text-lg sm:text-xl md:text-3xl"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-bold leading-[1.02] bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent"
          >
            Bhaskar Tikale
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-slate-700 dark:text-slate-300 max-w-[620px] lg:max-w-[560px] mx-auto lg:mx-0 text-base md:text-lg lg:text-xl"
          >
            I build modern digital products across mobile, web, and desktop
            applications, including AI-powered tools with API integrations.
            I enjoy turning ideas into production-ready experiences that are
            visually sharp, practical, and user-focused.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <button
              className="group runner-reverse-hover relative overflow-hidden z-10 cursor-pointer font-semibold text-white px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 hover:brightness-110 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1m_UvhX2m9K_EdZ1r17VFslxE8CdCA_Uc/view?usp=sharing",
                  "_blank"
                )
              }
            >
              <div className="pointer-events-none absolute inset-0 opacity-80">
                <span className="runner-x absolute top-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-white/90 via-cyan-200 to-white/90" />
                <span className="runner-y absolute top-0 right-0 w-[2px] h-1/2 bg-gradient-to-b from-white/90 via-cyan-200 to-white/90" />
                <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/2 bg-gradient-to-l from-white/90 via-cyan-200 to-white/90" />
                <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/2 bg-gradient-to-t from-white/90 via-cyan-200 to-white/90" />
              </div>
              <span className="relative z-10">Download CV</span>
              <AiOutlineArrowRight className="relative z-10" />
            </button>

            <div className="flex gap-3 sm:gap-4 text-2xl sm:text-3xl text-blue-600 dark:text-blue-300 z-20">
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/BhaskarT1"
                className="group runner-reverse-hover relative overflow-hidden h-11 w-11 sm:h-12 sm:w-12 rounded-xl grid place-items-center border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/65 hover:border-cyan-400/70"
              >
                <div className="pointer-events-none absolute inset-0 opacity-75">
                  <span className="runner-x absolute top-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
                  <span className="runner-y absolute top-0 right-0 w-[2px] h-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
                  <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/2 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
                  <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/2 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
                </div>
                <AiOutlineGithub className="relative z-10" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="https://www.linkedin.com/in/bhaskartikale/"
                className="group runner-reverse-hover relative overflow-hidden h-11 w-11 sm:h-12 sm:w-12 rounded-xl grid place-items-center border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/65 hover:border-cyan-400/70"
              >
                <div className="pointer-events-none absolute inset-0 opacity-75">
                  <span className="runner-x absolute top-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
                  <span className="runner-y absolute top-0 right-0 w-[2px] h-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
                  <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/2 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
                  <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/2 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
                </div>
                <AiOutlineLinkedin className="relative z-10" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 w-full max-w-[520px] lg:max-w-[460px] mx-auto lg:mx-0"
          >
            {["10+ Projects", "End-to-End Delivery", "User-First Mindset"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white/75 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 px-3 py-3 text-center text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, x: 0, scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute -inset-2 sm:-inset-3 rounded-[2rem] bg-gradient-to-r from-cyan-500/25 via-blue-500/15 to-rose-500/25 blur-2xl" />
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "125% 0%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "220% 220%" }}
            className="relative rounded-[2.1rem] p-[2px] bg-[repeating-linear-gradient(-45deg,#06b6d4_0_9px,#3b82f6_9px_18px,#fb7185_18px_27px,#06b6d4_27px_36px)] shadow-[0_0_0_1px_rgba(6,182,212,0.25)]"
          >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/65 backdrop-blur p-3 sm:p-4"
          >
            {showImageLoader && (
              <div className="absolute inset-3 sm:inset-4 rounded-[1.3rem] overflow-hidden bg-slate-200/80 dark:bg-slate-800/70">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/55 to-transparent dark:via-slate-600/45 animate-[pulse_1.5s_ease-in-out_infinite]" />
                <div className="absolute inset-0 grid place-items-center">
                  <HashLoader
                    color="#06b6d4"
                    size={42}
                    speedMultiplier={0.9}
                    aria-label="Loading profile image"
                  />
                </div>
              </div>
            )}
            <img
              src={profilepic}
              alt="Bhaskar Tikale portrait"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              onLoad={() => setIsImageLoaded(true)}
              onError={() => {
                setIsImageLoaded(true);
                setShowImageLoader(false);
              }}
              className={`w-[280px] sm:w-[330px] md:w-[380px] rounded-[1.3rem] object-cover transition-opacity duration-500 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full mt-14 md:mt-16 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-rose-500/10 dark:from-cyan-400/10 dark:via-blue-400/5 dark:to-rose-400/10 px-4 sm:px-6 md:px-8 py-10 md:py-12"
        style={{ contentVisibility: "auto", containIntrinsicSize: "650px" }}
      >
        <p className="flex w-fit mx-auto text-xs md:text-sm uppercase tracking-[0.22em] rounded-full px-4 py-1.5 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-rose-500/15 text-cyan-700 dark:text-cyan-300 mb-4">
          Technologies
        </p>
        <p className="text-2xl md:text-4xl font-semibold text-center mb-7 bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">
          My Tech Stack
        </p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3">
          {stack.map(({ label, Icon, color }, index) => (
            <motion.div
              key={label}
              title={label}
              aria-label={label}
              className={`group runner-reverse-hover relative overflow-hidden ${color} text-4xl sm:text-5xl md:text-6xl h-14 w-14 sm:h-16 sm:w-16 rounded-xl grid place-items-center bg-white/75 dark:bg-slate-900/65 border border-slate-200 dark:border-slate-800`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.24, delay: index * 0.015, ease: "easeOut" }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <span className="runner-x absolute top-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
                <span className="runner-y absolute top-0 right-0 w-[2px] h-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
                <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/2 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
                <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/2 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
              </div>
              <Icon className="relative z-10" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden lg:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </section>
  );
};

export default Hero;
