"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Code2, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const highlights = [
    { icon: <Brain className="h-8 w-8 text-blue-400" />, title: "Problem Solver" },
    { icon: <Zap className="h-8 w-8 text-yellow-400" />, title: "Fast Learner" },
    { icon: <Rocket className="h-8 w-8 text-purple-400" />, title: "AI Enthusiast" },
    { icon: <Code2 className="h-8 w-8 text-green-400" />, title: "Future Software Engineer" },
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto glass-card p-8 leading-relaxed">
            I am a Computer Engineering student currently exploring Artificial Intelligence, Agentic AI, and software development. 
            I enjoy building practical projects that solve real-world problems and continuously improving my technical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card border-none bg-white/5 hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center justify-center py-8 h-full">
                <CardContent className="p-0 flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl text-white">{item.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
