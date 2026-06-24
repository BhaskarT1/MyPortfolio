import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section className="px-4 sm:px-6 max-w-[1200px] mx-auto py-20 relative" id="contact">
      <div className="pointer-events-none absolute -top-14 left-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 right-0 h-40 w-40 rounded-full bg-rose-400/20 blur-3xl" />

      <Reveal width="100%">
        <div className="mb-10 text-center relative z-10">
          <p className="inline-flex text-xs md:text-sm uppercase tracking-[0.22em] rounded-full px-4 py-1.5 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-rose-500/15 text-cyan-700 dark:text-cyan-300">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-[760px] mx-auto text-base md:text-lg">
            Open to opportunities, collaborations, and meaningful product conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch relative z-10">
          <div className="group runner-reverse-hover relative overflow-hidden rounded-2xl border border-slate-300/70 dark:border-slate-700/70 bg-white/75 dark:bg-slate-900/70 p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
            <div className="pointer-events-none absolute inset-0 opacity-75">
              <span className="runner-x absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-y absolute top-0 right-0 w-[2px] h-1/3 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/3 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/3 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
            </div>

            <div className="text-slate-700 dark:text-gray-300 my-3">
              <p className="inline-flex text-xs md:text-sm uppercase tracking-[0.22em] rounded-full px-4 py-1.5 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-rose-500/15 text-cyan-700 dark:text-cyan-300 mb-4">
                Profile Snapshot
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold mb-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">
                About Me
              </h3>
              <p className="text-justify leading-7 text-base md:text-lg text-slate-700 dark:text-slate-300">
                Hi, I&apos;m Bhaskar Vijay Tikale. I focus on building practical,
                user-centered digital products with clean experiences and
                reliable engineering execution. I enjoy turning product goals
                into production-ready outcomes and continuously improving how
                teams ship quality work.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/25 p-3 text-center">
                <p className="text-xl md:text-2xl font-bold text-cyan-700 dark:text-cyan-300">10+</p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Projects</p>
              </div>
              <div className="rounded-lg bg-rose-500/10 border border-rose-500/25 p-3 text-center">
                <p className="text-xl md:text-2xl font-bold text-rose-700 dark:text-rose-300">2+</p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Years Exp</p>
              </div>
              <div className="rounded-lg bg-amber-500/10 border border-amber-500/25 p-3 text-center">
                <p className="text-[11px] sm:text-sm md:text-lg font-bold leading-tight text-amber-700 dark:text-amber-300 break-words">
                  Gen + AgenticAI
                </p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Current Focus</p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/amddomqb"
            method="POST"
            className="group runner-reverse-hover relative overflow-hidden rounded-2xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/70 p-5 md:p-8 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            id="form"
          >
            <div className="pointer-events-none absolute inset-0 opacity-75">
              <span className="runner-x absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-y absolute top-0 right-0 w-[2px] h-1/3 bg-gradient-to-b from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/3 bg-gradient-to-l from-cyan-500 via-blue-500 to-rose-500" />
              <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/3 bg-gradient-to-t from-cyan-500 via-blue-500 to-rose-500" />
            </div>

            <p className="text-slate-900 dark:text-gray-100 font-bold text-2xl mb-2">
              Send a Message
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
              Send a message and I will get back as soon as possible.
            </p>
            <label
              htmlFor="name"
              className="block mb-1 text-[11px] md:text-xs uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={60}
              title="Please enter your name (2 to 60 characters)."
              className="mb-3 w-full rounded-lg border text-slate-900 dark:text-black border-cyan-500/50 py-3 px-3 bg-white dark:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />
            <label
              htmlFor="email"
              className="block mb-1 text-[11px] md:text-xs uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              name="email"
              autoComplete="email"
              required
              maxLength={120}
              title="Please enter a valid email address."
              className="mb-3 w-full rounded-lg border text-slate-900 dark:text-black border-cyan-500/50 py-3 px-3 bg-white dark:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />
            <label
              htmlFor="textarea"
              className="block mb-1 text-[11px] md:text-xs uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Tell me about your project"
              required
              minLength={12}
              maxLength={1200}
              title="Please enter at least 12 characters in your message."
              className="mb-3 w-full rounded-lg border text-slate-900 dark:text-black border-cyan-500/50 py-3 px-3 bg-white dark:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />
            <button
              type="submit"
              className="group runner-reverse-hover relative overflow-hidden w-full py-3 rounded-lg text-white font-semibold text-base md:text-lg bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 hover:brightness-110 transition-all duration-300"
            >
              <div className="pointer-events-none absolute inset-0 opacity-80">
                <span className="runner-x absolute top-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-white/90 via-cyan-200 to-white/90" />
                <span className="runner-y absolute top-0 right-0 w-[2px] h-1/2 bg-gradient-to-b from-white/90 via-cyan-200 to-white/90" />
                <span className="runner-x-rev absolute bottom-0 right-0 h-[2px] w-1/2 bg-gradient-to-l from-white/90 via-cyan-200 to-white/90" />
                <span className="runner-y-rev absolute bottom-0 left-0 w-[2px] h-1/2 bg-gradient-to-t from-white/90 via-cyan-200 to-white/90" />
              </div>
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
