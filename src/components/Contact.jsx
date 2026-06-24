import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section className="px-6 max-w-[1150px] mx-auto py-20" id="contact">
      <Reveal width="100%">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl border border-slate-300/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/70 p-6 md:p-8">
            <div className="text-slate-700 dark:text-gray-300 my-3">
              <h3 className="text-3xl md:text-4xl font-semibold mb-5 text-slate-900 dark:text-slate-100">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 text-base md:text-lg">
                Hi, I'm Bhaskar Vijay Tikale, a passionate web developer. I am a
                full-stack developer with experience in building web
                applications using modern technologies like React, Node.js,
                Express.js, and MongoDB. I am a quick learner and always eager
                to learn new technologies. I am always looking
                for new opportunities to grow and improve my skills.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 p-3 text-center">
                <p className="text-xl md:text-2xl font-bold text-cyan-700 dark:text-cyan-300">10+</p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Projects</p>
              </div>
              <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 p-3 text-center">
                <p className="text-xl md:text-2xl font-bold text-rose-700 dark:text-rose-300">3</p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Internships</p>
              </div>
              <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-center">
                <p className="text-xl md:text-2xl font-bold text-amber-700 dark:text-amber-300">2026</p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Available</p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/amddomqb"
            method="POST"
            className="rounded-2xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/70 p-5 md:p-8"
            id="form"
          >
            <p className="text-slate-900 dark:text-gray-100 font-bold text-2xl mb-2">
              Let´s connect!
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
              Send a message and I will get back as soon as possible.
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-3 w-full rounded-lg border text-slate-900 dark:text-black border-purple-500/70 py-3 px-3 bg-white dark:bg-slate-100"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-3 w-full rounded-lg border text-slate-900 dark:text-black border-purple-500/70 py-3 px-3 bg-white dark:bg-slate-100"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-3 w-full rounded-lg border text-slate-900 dark:text-black border-purple-500/70 py-3 px-3 bg-white dark:bg-slate-100"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold text-base md:text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
