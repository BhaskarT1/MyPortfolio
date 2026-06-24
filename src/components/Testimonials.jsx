import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Project Lead",
    role: "Arohi Software",
    quote:
      "Bhaskar consistently shipped polished features, communicated clearly, and improved delivery speed for the whole team.",
  },
  {
    name: "Mentor",
    role: "Zidio Development",
    quote:
      "He balances frontend craft with backend problem-solving, and quickly turns feedback into production-quality results.",
  },
  {
    name: "Training Supervisor",
    role: "Xenosis IT Solution",
    quote:
      "Strong ownership mindset and attention to detail. Bhaskar adapts quickly and keeps learning momentum high.",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-[1150px] mx-auto px-6 py-20" id="testimonials">
      <Reveal width="100%">
        <div className="mb-10 text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-rose-700 dark:text-rose-300">
            Feedback
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900 dark:text-white">
            People I Worked With
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name + item.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-slate-300/70 dark:border-slate-700/60 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6"
          >
            <FaQuoteLeft className="text-rose-500 mb-4" size={24} />
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              {item.quote}
            </p>
            <div>
              <p className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                {item.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
