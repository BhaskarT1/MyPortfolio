import React from "react";
import { motion } from "framer-motion";
import { FiLayers, FiCode, FiServer, FiTrendingUp } from "react-icons/fi";
import Reveal from "./Reveal";

const services = [
  {
    title: "Product UI Engineering",
    description:
      "Clean interfaces with strong hierarchy, smooth interactions, and responsive behavior across devices.",
    icon: FiLayers,
    accent: "from-cyan-500 via-blue-500 to-rose-500",
  },
  {
    title: "Frontend Development",
    description:
      "React-powered frontends with reusable components, scalable state patterns, and performance-first delivery.",
    icon: FiCode,
    accent: "from-blue-500 via-indigo-500 to-cyan-500",
  },
  {
    title: "Backend APIs",
    description:
      "Node.js and Express services with secure auth flows, clear API contracts, and reliable integrations.",
    icon: FiServer,
    accent: "from-emerald-500 via-cyan-500 to-blue-500",
  },
  {
    title: "Deployment & Growth",
    description:
      "Cloud deployment, Docker-based workflows, and practical optimization for speed, SEO, and conversions.",
    icon: FiTrendingUp,
    accent: "from-amber-500 via-rose-500 to-fuchsia-500",
  },
];

const Services = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 relative" id="services">
      <div className="pointer-events-none absolute -top-16 left-0 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-rose-400/20 blur-3xl" />

      <Reveal width="100%">
        <div className="mb-10 text-center relative z-10">
          <p className="inline-flex text-xs md:text-sm uppercase tracking-[0.22em] rounded-full px-4 py-1.5 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-rose-500/15 text-cyan-700 dark:text-cyan-300">
            What I Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">
            Services That Build Momentum
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-[760px] mx-auto text-base md:text-lg">
            End-to-end product delivery with strong design systems, scalable engineering, and measurable business outcomes.
          </p>
        </div>
      </Reveal>

      <div className="relative z-10 grid sm:grid-cols-2 gap-5 lg:gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group runner-reverse-hover relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/70 backdrop-blur p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="pointer-events-none absolute inset-0 opacity-75">
                <span className={`runner-x absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r ${service.accent}`} />
                <span className={`runner-y absolute top-0 right-0 w-[2px] h-1/3 bg-gradient-to-b ${service.accent}`} />
                <span className={`runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/3 bg-gradient-to-l ${service.accent}`} />
                <span className={`runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/3 bg-gradient-to-t ${service.accent}`} />
              </div>

              <div className="absolute -inset-x-8 -top-16 h-32 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-rose-500/0 blur-2xl opacity-70" />

              <div className={`relative h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-br ${service.accent} text-white mb-4 shadow-lg shadow-cyan-500/20`}>
                <Icon size={22} />
              </div>

              <h3 className="relative text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {service.title}
              </h3>

              <p className="relative text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
