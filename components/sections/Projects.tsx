"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, BrainCircuit, Bot, Layers, FileSearch, Users, Monitor } from "lucide-react"

const projects = [
  {
    index: "01",
    title: "Travel Planner AI Agent",
    description:
      "An AI-powered travel assistant that creates personalized travel plans using tools like weather APIs and attraction information retrieval.",
    tech: ["Python", "Agentic AI", "APIs"],
    icon: <BrainCircuit className="w-5 h-5" />,
    accentColor: "from-purple-500/30 to-blue-500/30",
  },
  {
    index: "02",
    title: "Safe Q&A AI Agent",
    description:
      "An AI assistant with response validation and safety guardrails to provide reliable, fact-checked answers with minimal hallucination.",
    tech: ["Python", "LLM", "Guardrails AI"],
    icon: <Bot className="w-5 h-5" />,
    accentColor: "from-emerald-500/30 to-cyan-500/30",
  },
  {
    index: "03",
    title: "Multi Tool AI Assistant",
    description:
      "An intelligent assistant that autonomously selects the correct tool from a curated toolkit to solve complex multi-step user queries.",
    tech: ["LangChain", "OpenAI API", "Python"],
    icon: <Layers className="w-5 h-5" />,
    accentColor: "from-gold/30 to-yellow-500/30",
  },
  {
    index: "04",
    title: "Document Q&A Agent",
    description:
      "A document-based AI assistant leveraging embeddings and vector search (FAISS) for precise, context-aware information retrieval.",
    tech: ["RAG", "FAISS", "Python"],
    icon: <FileSearch className="w-5 h-5" />,
    accentColor: "from-blue-500/30 to-indigo-500/30",
  },
  {
    index: "05",
    title: "Employee Management System",
    description:
      "Enterprise Java-based employee record management application with full CRUD operations and an intuitive, data-driven interface.",
    tech: ["Java", "OOP", "SQL"],
    icon: <Users className="w-5 h-5" />,
    accentColor: "from-orange-500/30 to-red-500/30",
  },
  {
    index: "06",
    title: "3D Computer Graphics Project",
    description:
      "A computer graphics animation project focusing on high-performance visual rendering with real-time 3D transformations.",
    tech: ["Computer Graphics", "C", "C++"],
    icon: <Monitor className="w-5 h-5" />,
    accentColor: "from-pink-500/30 to-rose-500/30",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] bg-gradient-to-t from-navy-800/20 to-transparent blur-[80px]" />
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
          <span className="section-badge mb-5 inline-flex">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="gold-line w-16 mx-auto" />
          <p className="mt-5 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            A selection of AI-driven projects demonstrating my skills across different domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group h-full"
            >
              <div className="premium-card h-full flex flex-col relative overflow-hidden p-7">
                {/* Top gold gradient accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

                {/* Subtle background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Project Number + Icon */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <span className="text-4xl font-bold text-white/8 font-playfair leading-none select-none group-hover:text-gold/15 transition-colors duration-500">
                    {project.index}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy-900 transition-all duration-400">
                    {project.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors duration-300 mb-3 font-poppins relative z-10 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed flex-grow mb-5 relative z-10">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-5 pt-4 border-t border-white/8 group-hover:border-gold/20 transition-colors duration-500 relative z-10">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-gold transition-colors duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
