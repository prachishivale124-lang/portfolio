"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Code2, Layers3 } from "lucide-react"

const stats = [
  { value: "10+", label: "Projects Built", icon: <Layers3 className="w-5 h-5 text-gold" /> },
  { value: "3+", label: "AI Frameworks", icon: <BrainCircuit className="w-5 h-5 text-gold" /> },
  { value: "5+", label: "Languages Known", icon: <Code2 className="w-5 h-5 text-gold" /> },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Section Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[400px] bg-gradient-to-r from-navy-800/20 to-transparent rounded-r-full blur-[80px]" />
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
          <span className="section-badge mb-5 inline-flex">About</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Who <span className="text-gradient-gold">I Am</span>
          </h2>
          <div className="gold-line w-16 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto items-start">
          {/* Quote Card — spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="premium-card p-8 md:p-10 relative overflow-hidden h-full">
              {/* Top gold border accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              {/* Decorative quote mark */}
              <div className="absolute top-6 right-8 text-gold/10 font-playfair font-bold text-[120px] leading-none pointer-events-none select-none">
                "
              </div>

              <div className="relative z-10">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans font-light mb-6">
                  I am a{" "}
                  <span className="text-white font-semibold">Computer Engineering</span>{" "}
                  student passionate about{" "}
                  <span className="text-gold font-medium">Artificial Intelligence</span>,{" "}
                  <span className="text-gold font-medium">Agentic AI</span>, and software development.
                </p>
                <p className="text-base md:text-lg text-white/60 leading-relaxed font-sans font-light">
                  I enjoy creating practical AI-based solutions and continuously improving my technical skills — transforming complex problems into elegant, intelligent systems.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                  {["Agentic AI", "LangChain", "Python", "OpenAI API", "RAG Systems"].map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Column — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="premium-card p-6 flex items-center gap-5 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold text-white font-playfair leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/50 font-sans">{stat.label}</p>
                </div>
              </motion.div>
            ))}

            {/* Location / Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="premium-card p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400">Open to Work</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Based in <span className="text-white/80">Pune, India</span>. Available for internships, freelance projects, and full-time AI developer roles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
