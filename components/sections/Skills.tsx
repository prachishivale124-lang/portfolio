"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C", "C++"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "AI Development",
      skills: ["Generative AI", "Agentic AI", "Prompt Engineering", "AI Agents", "LLM Applications"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Computer Science",
      skills: ["Data Structures", "Object Oriented Programming", "Computer Graphics"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Database & Tools",
      skills: ["SQL", "Git", "VS Code", "Canva", "UI/UX Design"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    }
  ]

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-8 bg-gradient-to-br ${category.color} border ${category.borderColor} hover:scale-[1.02] transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-black/40 text-gray-200 text-sm font-medium border border-white/10 backdrop-blur-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
