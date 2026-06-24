import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import { AiOutlineGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Hospital Management System",
      description: "It's web application SaaS model that help for patient registration, appointment scheduling, and clinical data management for both OPD and IPD. Built the front-end using React.js and Tailwind CSS, and the back-end with Node.js, Express.js, and PostgreSQL. Deployed the system on AWS and optimized using Docker for scalability.",
      links: {
        // site: "#",
        github: "#",
      },
    },
    {
      img: project2,
      title: "Job Listing Portal",
      description: "Developed a Job Listing Portal where recruiters can post and manage jobs, and job seekers can search and filter opportunities. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) for a seamless and dynamic user experience. Implemented features for user authentication, job posting management, and advanced search filters.",
      links: {
        // site: "#",
        github: "https://github.com/BhaskarT18/Job-Listing-Portal",
      },
    },
    {
      img: project3,
      title: "BIT-Connect: Student Collaboration Platform",
      description: "BIT-Connect, a Student Collaboration Platform for seamless interaction and collaboration among students. Built using EJS for dynamic templating, Bootstrap for responsive design, and jQuery for enhanced user interactions. The back-end is powered by Express.js and Node.js, with PostgreSQL for data management, and deployed on AWS for scalability and performance.",
      links: {
        site: "https://bitballarpur.co.in/",
        github: "#",
      },
    },
    {
      img: project4,
      title: "GreenYard",
      description: "a website providing information about trees with options to upload images and descriptions. Built using Node.js and Express.js for API integration and handling user data. The website also allows downloading tree images and descriptions in PDF format, with the frontend built using HTML, CSS, and JavaScript.",
      links: {
        site: "https://greenyard-21a8213e25bd.herokuapp.com/",
        github: "https://github.com/BhaskarT18/GreenYard",
      },
    },

  ]

  const Portfolio = () => {
    return (
      <section className="max-w-[1150px] mx-auto px-6 py-20" id="portfolio">
        <Reveal width="100%">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">Selected Projects</h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-[760px] mx-auto">
              Case-study style builds focused on product quality, speed, and usability.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl overflow-hidden border border-slate-300/70 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-shadow"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-gray-200 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-slate-700 dark:text-gray-300 mb-5">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  {index >= 2 && (
                    <a
                      href={project.links.site}
                      className="px-4 py-2 bg-slate-700 dark:bg-slate-600 text-gray-100 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition duration-300 text-sm"
                    >
                      View Site
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    className="px-4 py-2 bg-slate-700 dark:bg-slate-600 text-gray-100 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition duration-300 inline-flex items-center gap-2 text-sm"
                  >
                    <AiOutlineGithub />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  
