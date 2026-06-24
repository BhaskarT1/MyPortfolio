import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiClock } from "react-icons/fi";
import Reveal from "./Reveal";

const experiences = [
  {
    role: "Software Engineer",
    company: "NexoraX Technologies Pvt Ltd",
    employment: "Full-time",
    period: "Oct 2025 - May 2026",
    location: "Nagpur, Maharashtra, India",
    mode: "On-site",
    description:
      "Worked on production-grade software delivery, collaborated with cross-functional teams, and contributed to stable release cycles in an on-site engineering environment.",
  },
  {
    role: "Software Engineer",
    company: "Technobase IT Solutions Pvt. Ltd",
    employment: "Full-time",
    period: "Mar 2025 - Sep 2025",
    location: "Nagpur, Maharashtra, India",
    mode: "On-site",
    description:
      "Contributed to software engineering workflows with strong code versioning practices, database-backed features, and consistent delivery across modules.",
  },
  {
    role: "Full Stack Developer",
    company: "Arohi Softwares",
    employment: "Internship",
    period: "Sep 2024 - Dec 2024",
    location: "Shrigonda, Maharashtra, India",
    mode: "Remote",
    description:
      "Built SaaS-oriented features across frontend and backend, focusing on clean user experience, reliable integrations, and scalable architecture.",
  },
  {
    role: "Web Developer",
    company: "Zidio Development",
    employment: "Internship",
    period: "Jul 2024 - Oct 2024",
    location: "Bengaluru, Karnataka, India",
    mode: "Remote",
    description:
      "Developed responsive web interfaces and supported full development flow with performance-focused implementation and modern UI patterns.",
  },
  {
    role: "Java Developer",
    company: "Xenosis IT Solutions",
    employment: "Internship",
    period: "May 2024 - Jun 2024",
    location: "Nagpur, Maharashtra, India",
    mode: "Remote",
    description:
      "Strengthened core Java and problem-solving skills through practical exercises, applying concepts to real-world style development scenarios.",
  },
];

const Experience = () => {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-[1200px] mx-auto relative" id="experience">
      <div className="pointer-events-none absolute -top-16 left-0 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl" />

      <Reveal width="100%">
        <div className="text-center mb-12 relative z-10">
          <p className="inline-flex text-xs md:text-sm uppercase tracking-[0.22em] rounded-full px-4 py-1.5 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-rose-500/15 text-cyan-700 dark:text-cyan-300">
            Career Timeline
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-[760px] mx-auto text-base md:text-lg">
            Professional journey across full-time engineering roles and high-impact internships.
          </p>
        </div>
      </Reveal>

      <div className="relative max-w-[940px] mx-auto">
        <div className="absolute left-[15px] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/60 via-blue-500/45 to-rose-500/60" />

        <div className="space-y-7 relative z-10">
          {experiences.map((experience, index) => {
            const alignRight = index % 2 !== 0;

            return (
              <Reveal key={`${experience.company}-${experience.period}`} width="100%">
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -4, scale: 1.005 }}
                  className="group runner-reverse-hover relative"
                >
                  <div className="absolute left-[8px] sm:left-1/2 sm:-translate-x-1/2 top-10 h-4 w-4 rounded-full border-2 border-cyan-300 dark:border-cyan-700 bg-cyan-500 shadow-[0_0_0_5px_rgba(6,182,212,0.15)]" />

                  <div
                    className={`ml-10 sm:ml-0 sm:w-[calc(50%-26px)] ${
                      alignRight ? "sm:ml-auto" : "sm:mr-auto"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/70 backdrop-blur p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                      <div className="pointer-events-none absolute inset-0 opacity-75">
                        <span className="runner-x absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
                        <span className="runner-y absolute top-0 right-0 w-[2px] h-1/3 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
                        <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/3 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
                        <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/3 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
                      </div>

                      <div className="relative flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
                            {experience.role}
                          </h3>
                          <p className="text-slate-700 dark:text-slate-200 mt-1 inline-flex items-center gap-2">
                            <FiBriefcase className="text-cyan-600 dark:text-cyan-400" />
                            {experience.company}
                          </p>
                        </div>
                        <span className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-rose-500/10 text-slate-700 dark:text-slate-200">
                          {experience.employment}
                        </span>
                      </div>

                      <div className="relative mt-4 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                          <FiClock className="text-cyan-600 dark:text-cyan-400" />
                          {experience.period}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                          <FiMapPin className="text-cyan-600 dark:text-cyan-400" />
                          {experience.location} • {experience.mode}
                        </span>
                      </div>

                      <p className="relative mt-4 text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;