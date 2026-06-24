import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
    { to: "home", label: "Home" },
    { to: "skills", label: "Skills" },
    { to: "services", label: "Services" },
    { to: "experience", label: "Work" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        document.body.style.overflow = nav ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [nav]);

    const toggleNav = () => {
        setNav((prev) => !prev);
    };

    const closeNav = () => {
        setNav(false);
    };

    const drawerVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 220,
                damping: 24,
                when: "beforeChildren",
                staggerChildren: 0.06,
            },
        },
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 220,
                damping: 24,
                when: "afterChildren",
                staggerChildren: 0.04,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.24 },
        },
        closed: {
            opacity: 0,
            y: 18,
            transition: { duration: 0.18 },
        },
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="absolute inset-0 bg-white/65 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/80" />
            <nav className="relative max-w-[1300px] mx-auto h-20 px-4 sm:px-6 md:px-10 flex items-center justify-between gap-4 text-slate-800 dark:text-slate-200">
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-84}
                    duration={500}
                    className="group cursor-pointer"
                >
                    <motion.div
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-rose-500 bg-clip-text text-transparent">
                            Bhaskar.dev
                        </span>
                        <span className="h-2 w-2 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform" />
                    </motion.div>
                </Link>

                <ul className="hidden md:flex items-center gap-2 lg:gap-3 text-sm lg:text-[15px] font-medium">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-84}
                                    duration={500}
                                    activeClass="nav-active"
                                    className="nav-link"
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2 sm:gap-3">
                    <motion.button
                        type="button"
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleTheme}
                        className="nav-icon-btn"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <BsSunFill size={18} /> : <BsMoonStarsFill size={18} />}
                    </motion.button>

                    <motion.button
                        type="button"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleNav}
                        className="md:hidden nav-icon-btn"
                        aria-label="Toggle navigation menu"
                        aria-expanded={nav}
                        aria-controls="mobile-menu"
                    >
                        {nav ? <AiOutlineClose size={21} /> : <AiOutlineMenu size={21} />}
                    </motion.button>
                </div>
            </nav>

            <AnimatePresence>
                {nav && (
                    <>
                        <motion.button
                            type="button"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeNav}
                            className="md:hidden fixed inset-0 bg-slate-900/45 backdrop-blur-[2px] z-40"
                            aria-label="Close navigation menu backdrop"
                        />

                        <motion.aside
                            id="mobile-menu"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={drawerVariants}
                            className="md:hidden fixed top-0 right-0 h-screen w-[82%] max-w-sm bg-white/95 dark:bg-slate-950/95 border-l border-slate-200 dark:border-slate-800 z-50 px-7 pt-24"
                        >
                            <div className="absolute top-6 left-7 right-7 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-500/80 to-rose-400/0" />

                            <ul className="space-y-3">
                                {navItems.map((item) => (
                                    <motion.li key={item.to} variants={itemVariants}>
                                        <Link
                                            to={item.to}
                                            onClick={closeNav}
                                            spy={true}
                                            smooth={true}
                                            offset={-84}
                                            duration={500}
                                            activeClass="nav-active-mobile"
                                            className="nav-link-mobile"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;