"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Ambient decorative rings */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Central soft glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-navy-800/60 to-transparent blur-[80px]" />

        {/* Decorative outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-gold/8 pointer-events-none"
          style={{ 
            background: "conic-gradient(from 0deg, transparent 0%, rgba(212,175,55,0.04) 25%, transparent 50%)"
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-gold/10 pointer-events-none"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/4 pointer-events-none" />

        {/* Subtle top light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[200px] bg-gradient-to-b from-gold/30 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        >
          {/* Section Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name — Primary Headline */}
          <motion.div variants={itemVariants} className="mb-5">
            <h1 className="font-playfair font-bold leading-tight text-center">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight">
                Prachi Mahendra
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-shimmer-gold tracking-tight mt-1">
                Shivale
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="mb-7 flex items-center gap-4 w-full max-w-md justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-poppins font-light text-white/70 mb-4 tracking-wide"
          >
            <span className="text-white/90 font-medium">AI Developer</span>
            <span className="mx-3 text-gold">|</span>
            <span className="text-white/90 font-medium">Python Engineer</span>
            <span className="mx-3 text-gold">|</span>
            <span className="text-white/90 font-medium">Building Intelligent Solutions</span>
          </motion.p>

          {/* Sub-description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/45 mb-12 max-w-xl mx-auto leading-relaxed font-sans"
          >
            Crafting AI-powered applications, agentic systems, and elegant software experiences that push the boundaries of what&apos;s possible.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#projects"
              className="group relative flex items-center gap-2 px-8 py-4 bg-gold text-navy-900 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)] hover:scale-105 font-poppins text-sm tracking-wide w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/20 hover:border-gold/50 hover:bg-gold/8 hover:text-gold transition-all duration-300 hover:scale-105 font-poppins text-sm tracking-wide w-full sm:w-auto justify-center"
            >
              <Mail className="h-4 w-4 group-hover:text-gold transition-colors duration-200" />
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase">Scroll</span>
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </motion.div>
    </section>
  )
}
