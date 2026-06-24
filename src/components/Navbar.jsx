import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'skills', label: 'Skills' },
    { to: 'services', label: 'Services' },
    { to: 'portfolio', label: 'Work' },
    { to: 'testimonials', label: 'Testimonials' },
    { to: 'contact', label: 'Contact' },
]

const Navbar = ({ theme, toggleTheme }) => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

  return (
    <div className='fixed top-0 left-0 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-md z-50 border-b border-slate-200/60 dark:border-slate-800/70'>
                <div className='max-w-[1300px] mx-auto flex justify-between text-slate-800 dark:text-gray-200 items-center px-6 md:px-12 h-20 gap-4'>

                        <Link to='home' smooth={true} duration={500} className='text-xl md:text-2xl font-bold cursor-pointer'>
                            Bhaskar.dev
                        </Link>

                        <ul className='hidden md:flex gap-7 z-10 cursor-pointer text-sm lg:text-base font-medium'>
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <Link to={item.to} smooth={true} offset={-70} duration={500} className='hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors'>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
            </ul>

                        <button
                            type='button'
                            onClick={toggleTheme}
                            className='hidden md:flex items-center justify-center p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-200/70 dark:hover:bg-slate-800/80 transition-colors'
                            aria-label='Toggle theme'
                        >
                            {theme === 'dark' ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
                        </button>

                        <div className='flex items-center gap-3 md:hidden z-50'>
                                <button
                                    type='button'
                                    onClick={toggleTheme}
                                    className='flex items-center justify-center p-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-gray-200'
                                    aria-label='Toggle theme'
                                >
                                    {theme === 'dark' ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
                                </button>

                                <div onClick={toggleNav} className='text-slate-800 dark:text-gray-200'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                                </div>
            </div>

            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
                        className='fixed left-0 top-0 w-full min-h-screen bg-white dark:bg-gray-900 text-slate-900 dark:text-gray-100 z-40'
            >
                                <ul className='font-semibold text-3xl space-y-8 mt-24 text-center'>
                                    {navItems.map((item) => (
                                        <li key={item.to}>
                                            <Link to={item.to} onClick={closeNav} smooth={true} offset={-70} duration={500}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                </ul>


            </motion.div>



        </div>
    </div>
  )
}

export default Navbar