import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";


import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiGithubBadge,
  DiPython,
  DiJava,
  DiDocker,
  DiPostgresql,
  DiFirebase,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  const stack = [
    { Icon: DiHtml5, color: "text-orange-600" },
    { Icon: DiCss3, color: "text-blue-600" },
    { Icon: DiJavascript1, color: "text-yellow-500" },
    { Icon: DiReact, color: "text-blue-500" },
    { Icon: DiNodejsSmall, color: "text-green-500" },
    { Icon: DiMongodb, color: "text-green-600" },
    { Icon: DiGithubBadge, color: "text-slate-700 dark:text-gray-400" },
    { Icon: DiPython, color: "text-yellow-600" },
    { Icon: DiJava, color: "text-red-600" },
    { Icon: DiDocker, color: "text-blue-600" },
    { Icon: DiPostgresql, color: "text-blue-700" },
    { Icon: DiFirebase, color: "text-yellow-400" },
    { Icon: SiTailwindcss, color: "text-blue-400" },
    { Icon: SiRedux, color: "text-purple-600" },
    { Icon: SiExpress, color: "text-slate-700 dark:text-gray-400" },
    { Icon: SiVite, color: "text-purple-400" },
    { Icon: SiWebpack, color: "text-blue-500" },
  ];

  return (
    <section className="pt-28 md:pt-36 pb-14 max-w-[1200px] mx-auto px-6 relative" id="home">
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="inline-flex text-xs md:text-sm uppercase tracking-[0.2em] rounded-full px-3 py-1 mb-5 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
            Open For Roles
          </p>

          <TypeAnimation
            sequence={[
              "Full stack developer",
              1000,
              "React developer",
              1000,
              "Java developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-semibold text-slate-500 dark:text-slate-400 text-lg md:text-3xl mb-4"
          />

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-slate-900 dark:text-gray-100 md:text-7xl text-5xl tracking-tight mb-4 font-bold"
          >
            Bhaskar Tikale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-700 dark:text-slate-300 max-w-[560px] text-base md:text-xl mb-6"
          >
            I build modern web products that are fast, usable, and visually sharp.
            I enjoy turning ideas into production-ready experiences with React,
            Node.js, and thoughtful UI systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 my-4"
          >
            <button
              className="z-10 cursor-pointer font-semibold text-white md:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1YFowX1RuK_f2Zg6f5KsB7sHmmAfOKDsn/view?usp=sharing"
                )
              }
            >
              Download CV
              <AiOutlineArrowRight />
            </button>

            <div className="flex gap-4 flex-row text-3xl text-blue-600 dark:text-blue-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/BhaskarT18"
                className="h-11 w-11 rounded-lg grid place-items-center border border-slate-300 dark:border-slate-700"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/bhaskartikale/"
                className="h-11 w-11 rounded-lg grid place-items-center border border-slate-300 dark:border-slate-700"
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-3 gap-3 mt-8 max-w-[420px]"
          >
            {["10+ Projects", "3 Internships", "MERN + Java"].map((item) => (
              <div key={item} className="rounded-lg bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 px-3 py-3 text-center text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-rose-500/20 blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-4">
            <img src={profilepic} className="w-[260px] md:w-[380px] rounded-2xl" />
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="flex flex-col px-4 md:px-0 w-full justify-center items-center py-20"
      >
        <p className="text-slate-900 dark:text-gray-200 text-2xl md:text-4xl font-semibold mb-6">
          My Tech Stack
        </p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-1">
          {stack.map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              className={`mx-1 md:mx-2 ${color} text-5xl md:text-6xl h-16 w-16 rounded-xl grid place-items-center bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800`}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.4,
                delay: index * 0.05,
                ease: "easeInOut",
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </section>
  );
};

export default Hero;
