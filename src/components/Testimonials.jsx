import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Leadership Feedback",
    role: "Technobase IT Solutions Pvt. Ltd",
    quote:
      "Recognized for consistent ownership and contribution quality, leading to Employee of the Month nomination during full-time delivery cycles.",
  },
  {
    name: "Engineering Team Feedback",
    role: "NexoraX Technologies Pvt Ltd",
    quote:
      "Bhaskar contributed across web and mobile applications while also supporting AI-oriented implementation work with strong collaboration and execution.",
  },
  {
    name: "Project Mentor",
    role: "Arohi Softwares",
    quote:
      "Bhaskar took ownership as a frontend team lead, guided implementation quality, and consistently delivered polished, user-focused outcomes.",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 relative" id="testimonials">
      <div className="pointer-events-none absolute -top-16 left-0 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-rose-400/20 blur-3xl" />

      <Reveal width="100%">
        <div className="mb-10 text-center relative z-10">
          <p className="inline-flex text-xs md:text-sm uppercase tracking-[0.22em] rounded-full px-4 py-1.5 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-rose-500/15 text-cyan-700 dark:text-cyan-300">
            Feedback
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">
            People I Worked With
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-[760px] mx-auto text-base md:text-lg">
            Endorsements based on execution quality, ownership, and cross-functional collaboration.
          </p>
        </div>
      </Reveal>

      <div className="relative z-10 grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name + item.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group runner-reverse-hover relative overflow-hidden rounded-2xl border border-slate-300/70 dark:border-slate-700/60 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <div className="pointer-events-none absolute inset-0 opacity-75">
              <span className="runner-x absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-y absolute top-0 right-0 w-[2px] h-1/3 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/3 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/3 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
            </div>

            <FaQuoteLeft className="relative text-rose-500 mb-4" size={24} />
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              {item.quote}
            </p>
            <div className="relative">
              <p className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                {item.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{item.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
