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
  },
  {
    title: "Frontend Development",
    description:
      "React-powered frontends with reusable components, scalable state patterns, and performance-first delivery.",
    icon: FiCode,
  },
  {
    title: "Backend APIs",
    description:
      "Node.js and Express services with secure auth flows, clear API contracts, and reliable integrations.",
    icon: FiServer,
  },
  {
    title: "Deployment & Growth",
    description:
      "Cloud deployment, Docker-based workflows, and practical optimization for speed, SEO, and conversions.",
    icon: FiTrendingUp,
  },
];

const Services = () => {
  return (
    <section className="max-w-[1150px] mx-auto px-6 py-20" id="services">
      <Reveal width="100%">
        <div className="mb-10 text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            What I Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900 dark:text-white">
            Services That Build Momentum
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-300/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/70 backdrop-blur p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {service.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
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
