import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='border-t border-slate-200 dark:border-slate-800 mt-16'>
      <div className='max-w-[1300px] mx-auto px-6 md:px-12 py-10 grid md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2'>Bhaskar.dev</h3>
          <p className='text-slate-600 dark:text-slate-300 text-sm md:text-base'>
            Fullstack developer building modern, reliable, and high-performance web experiences.
          </p>
        </div>

        <div>
          <h4 className='font-semibold text-slate-900 dark:text-slate-100 mb-3'>Quick Links</h4>
          <div className='flex flex-col gap-2 text-sm md:text-base text-slate-600 dark:text-slate-300'>
            <Link to='home' smooth={true} duration={500} className='cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-300'>Home</Link>
            <Link to='services' smooth={true} offset={-70} duration={500} className='cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-300'>Services</Link>
            <Link to='portfolio' smooth={true} offset={-70} duration={500} className='cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-300'>Projects</Link>
            <Link to='contact' smooth={true} offset={-70} duration={500} className='cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-300'>Contact</Link>
          </div>
        </div>

        <div>
          <h4 className='font-semibold text-slate-900 dark:text-slate-100 mb-3'>Social</h4>
          <div className='flex items-center gap-3 text-2xl text-slate-700 dark:text-slate-200'>
            <a href='https://github.com/BhaskarT18' className='hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors'><FaGithubSquare /></a>
            <a href='https://www.linkedin.com/in/bhaskartikale/' className='hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors'><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className='max-w-[1300px] mx-auto px-6 md:px-12 pb-8'>
        <p className='text-slate-600 dark:text-slate-400 text-xs md:text-sm'>
          Copyright {new Date().getFullYear()} Bhaskar Tikale. Crafted with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer