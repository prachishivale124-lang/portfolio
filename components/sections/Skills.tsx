"use client"

import { motion } from "framer-motion"
import {
  Terminal,
  Coffee,
  FileCode2,
  Database,
  Network,
  Box,
  Sparkles,
  Bot,
  Link as LinkIcon,
  Key,
  Zap,
  GitBranch,
} from "lucide-react"

const skillCategories = [
  {
    label: "Programming Languages",
    badge: "Core",
    skills: [
      { name: "Python", icon: <Terminal className="h-6 w-6" />, color: "text-blue-400" },
      { name: "Java", icon: <Coffee className="h-6 w-6" />, color: "text-orange-400" },
      { name: "C++", icon: <FileCode2 className="h-6 w-6" />, color: "text-indigo-400" },
      { name: "SQL", icon: <Database className="h-6 w-6" />, color: "text-slate-300" },
    ],
  },
  {
    label: "AI & Machine Learning",
    badge: "Specialty",
    skills: [
      { name: "Generative AI", icon: <Sparkles className="h-6 w-6" />, color: "text-purple-400" },
      { name: "Agentic AI", icon: <Bot className="h-6 w-6" />, color: "text-pink-400" },
      { name: "LangChain", icon: <LinkIcon className="h-6 w-6" />, color: "text-cyan-400" },
      { name: "OpenAI API", icon: <Key className="h-6 w-6" />, color: "text-emerald-400" },
    ],
  },
  {
    label: "Frameworks & Tools",
    badge: "Tooling",
    skills: [
      { name: "Data Structures", icon: <Network className="h-6 w-6" />, color: "text-green-400" },
      { name: "OOP", icon: <Box className="h-6 w-6" />, color: "text-yellow-400" },
      { name: "Next.js", icon: <Zap className="h-6 w-6" />, color: "text-white" },
      { name: "Git", icon: <GitBranch className="h-6 w-6" />, color: "text-orange-500" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] bg-gradient-to-l from-navy-800/25 to-transparent rounded-l-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-5 inline-flex">Skills</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Technical <span className="text-gradient-gold">Arsenal</span>
          </h2>
          <div className="gold-line w-16 mx-auto" />
          <p className="mt-5 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            A curated set of technologies I use to build intelligent, scalable solutions.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: catIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line-left" />
                <div className="flex items-center gap-3">
                  <span className="text-base font-semibold text-white/90 font-poppins">
                    {category.label}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-medium tracking-wide">
                    {category.badge}
                  </span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: catIdx * 0.08 + skillIdx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <div className="premium-card p-5 flex flex-col items-center gap-3 text-center cursor-default">
                      {/* Icon Container */}
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/8 group-hover:border-gold/30 group-hover:bg-gold/8 transition-all duration-300 ${skill.color} group-hover:text-gold`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 font-sans">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
