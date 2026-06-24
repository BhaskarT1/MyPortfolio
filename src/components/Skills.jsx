import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiJava,
  DiAndroid,
  DiPostgresql,
  DiFirebase,
} from "react-icons/di";
import {
  SiAngular,
  SiDocker,
  SiElectron,
  SiExpress,
  SiGit,
  SiGithub,
  SiJira,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
  SiPostman,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    blurb: "Building polished interfaces across modern web stacks.",
    technologies: [
      { name: "HTML5", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <DiCss3 className="text-blue-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <DiReact className="text-cyan-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-slate-900 dark:text-slate-100" /> },
      { name: "Angular", icon: <SiAngular className="text-red-600" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-emerald-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Webpack", icon: <SiWebpack className="text-blue-500" /> },
    ],
  },
  {
    category: "Backend",
    blurb: "Designing scalable APIs, databases, and integrations.",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-700 dark:text-slate-300" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "PostgreSQL", icon: <DiPostgresql className="text-blue-700" /> },
      { name: "Firebase", icon: <DiFirebase className="text-yellow-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="text-amber-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
  {
    category: "Languages & Tools",
    blurb: "Shipping products with practical engineering workflows.",
    technologies: [
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      { name: "Python", icon: <SiPython className="text-yellow-500" /> },
      { name: "Linux", icon: <SiLinux className="text-slate-800 dark:text-slate-200" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-slate-700 dark:text-slate-300" /> },
      { name: "Jira", icon: <SiJira className="text-blue-600" /> },
      { name: "Electron", icon: <SiElectron className="text-cyan-500" /> },
      { name: "Android", icon: <DiAndroid className="text-green-600" /> },
      { name: "GenAI", icon: <SiOpenai className="text-violet-500" /> },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.12,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 text-slate-800 dark:text-slate-200"
      id="skills"
    >
      <Reveal width="100%">
        <p className="flex w-fit mx-auto text-xs md:text-sm uppercase tracking-[0.22em] rounded-full px-4 py-1.5 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-rose-500/15 text-cyan-700 dark:text-cyan-300 mb-4">
          Core Capabilities
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-center text-base md:text-lg text-slate-600 dark:text-slate-300 mb-11 max-w-[820px] mx-auto">
          I work across frontend, backend, and modern developer tooling to ship
          complete products. Explore my practical builds and code quality here{" "}
          <a
            href="https://github.com/BhaskarT18?tab=repositories"
            className="underline decoration-cyan-500 underline-offset-4 hover:text-cyan-600 dark:hover:text-cyan-300"
          >
            on GitHub
          </a>
          .
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              animate={{ y: [0, -2, 0] }}
              transition={{
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.25,
                },
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.015,
                rotateX: 4,
                rotateY: -5,
                transition: { type: "spring", stiffness: 220, damping: 18 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="group runner-reverse-hover relative [perspective:1200px] overflow-hidden border border-cyan-500/25 dark:border-cyan-400/20 p-5 sm:p-6 rounded-2xl bg-white/75 dark:bg-slate-900/55 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 w-full"
            >
              <div className="pointer-events-none absolute inset-0 opacity-85">
                <span className="runner-x absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
                <span className="runner-y absolute top-0 right-0 w-[2px] h-1/3 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
                <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/3 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
                <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/3 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
              </div>

              <div className="pointer-events-none absolute inset-x-0 -top-20 h-36 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-rose-500/10 blur-2xl" />
              <h3
                style={{ transform: "translateZ(26px)" }}
                className="relative text-xl font-bold mb-2 text-center text-slate-900 dark:text-slate-100"
              >
                {skill.category}
              </h3>
              <p
                style={{ transform: "translateZ(16px)" }}
                className="relative text-center text-sm text-slate-600 dark:text-slate-300 mb-5"
              >
                {skill.blurb}
              </p>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    animate={{ y: [0, -1, 0] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: techIndex * 0.07,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                      rotateX: -6,
                      rotateY: 6,
                      transition: { type: "spring", stiffness: 250, damping: 16 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
                    className="runner-reverse-hover relative overflow-hidden flex items-center gap-3 transition-transform duration-200 bg-white/80 dark:bg-slate-950/45 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 hover:border-cyan-400/60 dark:hover:border-cyan-400/50"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-80">
                      <span className="runner-x absolute top-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
                      <span className="runner-y absolute top-0 right-0 w-[2px] h-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
                      <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/2 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
                      <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/2 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
                    </div>

                    <span style={{ transform: "translateZ(18px)" }} className="text-2xl leading-none">
                      {tech.icon}
                    </span>
                    <span
                      style={{ transform: "translateZ(14px)" }}
                      className="text-sm md:text-[15px] font-medium text-slate-700 dark:text-slate-200"
                    >
                      {tech.name}
                    </span>
                  </motion.div>
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
