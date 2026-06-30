"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative group flex items-center gap-1">
          <span className="text-xl font-bold tracking-tight text-white font-playfair">Prachi</span>
          <span className="text-xl font-bold text-gold font-playfair">.</span>
          <span className="text-sm font-semibold text-gold/80 font-poppins tracking-widest uppercase mt-0.5">AI</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gold to-transparent transition-all duration-400 group-hover:w-full" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
            >
              {link.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-4/5 rounded-full" />
            </Link>
          ))}
          <a
            href="mailto:prachishivale124@gmail.com"
            className="ml-4 px-5 py-2 rounded-full border border-gold/40 bg-gold/8 text-gold text-sm font-semibold hover:bg-gold hover:text-navy-900 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors rounded-lg hover:bg-white/5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 glass-nav border-t-0 py-6 px-6 flex flex-col gap-1 md:hidden shadow-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10">
              <a
                href="mailto:prachishivale124@gmail.com"
                className="flex items-center justify-center px-6 py-3 rounded-xl border border-gold/40 bg-gold/10 text-gold font-semibold hover:bg-gold hover:text-navy-900 transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
