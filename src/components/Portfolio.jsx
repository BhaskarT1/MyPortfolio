import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const workSamples = [
  {
    img: project1,
    title: "Healthcare Operations Platform",
    summary:
      "Designed a robust workflow for registration, scheduling, and clinical data operations with a clean, low-friction interface for staff teams.",
    outcomes: ["Multi-role workflow clarity", "Faster intake operations", "Scalable cloud-ready architecture"],
  },
  {
    img: project2,
    title: "Talent Discovery Experience",
    summary:
      "Built a high-velocity search and management experience balancing recruiter workflows and candidate discoverability.",
    outcomes: ["Smarter filtering journey", "Reliable auth and session flow", "Reusable UI system for future modules"],
  },
  {
    img: project3,
    title: "Community Collaboration Hub",
    summary:
      "Delivered a collaboration-first platform focused on interactions, announcements, and smooth communication loops.",
    outcomes: ["Stronger user engagement", "Clear information architecture", "Production deployment pipeline"],
  },
  {
    img: project4,
    title: "Knowledge Utility Product",
    summary:
      "Shipped a utility-focused web experience that combines structured content, uploads, and exportable resources.",
    outcomes: ["Practical user toolset", "API-backed document generation", "Simple, accessible interface"],
  },
];

const Portfolio = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 relative" id="portfolio">
      <div className="pointer-events-none absolute -top-16 left-0 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-rose-400/20 blur-3xl" />

      <Reveal width="100%">
        <div className="text-center mb-10 relative z-10">
          <p className="inline-flex text-xs md:text-sm uppercase tracking-[0.22em] rounded-full px-4 py-1.5 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-rose-500/15 text-cyan-700 dark:text-cyan-300">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">
            Product Stories, Not Just Repositories
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-[820px] mx-auto mt-4">
            Curated case snapshots focused on outcomes, usability, and delivery quality. Detailed walkthroughs are available on request.
          </p>
        </div>
      </Reveal>

      <div className="relative z-10 grid md:grid-cols-2 gap-6">
        {workSamples.map((work, index) => (
          <motion.article
            key={work.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group runner-reverse-hover rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/70 backdrop-blur shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 relative"
          >
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <span className="runner-x absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-y absolute top-0 right-0 w-[2px] h-1/3 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/3 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/3 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
            </div>

            <img src={work.img} alt={work.title} className="w-full h-56 object-cover" />

            <div className="p-5">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-gray-200 mb-3">{work.title}</h3>
              <p className="text-sm md:text-base text-slate-700 dark:text-gray-300 mb-4">{work.summary}</p>

              <div className="flex flex-wrap gap-2.5 mb-5">
                {work.outcomes.map((item) => (
                  <span
                    key={item}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-rose-500/10 text-slate-700 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300/80 dark:border-slate-700/80 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/60">
                Detailed walkthrough available on request
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
  
