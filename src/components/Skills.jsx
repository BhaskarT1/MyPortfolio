import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiJava,
  DiPython,
  DiDocker,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Sass", icon: <DiSass className="text-pink-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
    ],
  },
  {
    category: "Backend / Fullstack",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-700 dark:text-gray-400" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "PostgreSQL", icon: <DiPostgresql className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-slate-700 dark:text-gray-400" /> },
    ],
  },
  {
    category: "Other Tools & Languages",
    technologies: [
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      { name: "Python", icon: <DiPython className="text-blue-600" /> },
      { name: "Docker", icon: <DiDocker className="text-blue-400" /> },
    ],
  },
];
const Skills = () => {
  return (
    <section
      className="max-w-[1150px] mx-auto px-6 py-20 text-slate-800 dark:text-gray-200"
      id="skills"
    >
      <Reveal width="100%">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-white">Skills</h2>
        <p className="text-center text-base md:text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-[800px] mx-auto">
          I worked on various frontend and fullstack projects. Check them{" "}
          <a
            href="https://github.com/BhaskarT18?tab=repositories"
            className="underline decoration-cyan-500 underline-offset-4"
          >
            there
          </a>
          .
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="border border-purple-400/40 dark:border-purple-900 p-6 rounded-2xl bg-purple-100/40 dark:bg-purple-900/20 shadow-lg w-full"
            >
              <h3 className="text-xl font-bold mb-4 text-center text-slate-900 dark:text-slate-100">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 transform transition-transform duration-200 hover:scale-105 bg-white/70 dark:bg-slate-900/50 rounded-lg px-2 py-2"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-sm md:text-base">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
