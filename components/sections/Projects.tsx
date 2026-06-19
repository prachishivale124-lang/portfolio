"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Travel Planner AI Agent",
      description: "An AI-powered travel assistant that creates personalized travel plans using tools like weather and attraction information.",
      tech: ["Python", "Agentic AI", "APIs"],
    },
    {
      title: "Safe Q&A AI Agent",
      description: "An AI assistant with response validation and safety guardrails to provide reliable answers.",
      tech: ["Python", "LLM", "Guardrails AI"],
    },
    {
      title: "Multi Tool AI Assistant",
      description: "An intelligent assistant that selects the correct tool for solving user queries.",
      tech: ["LangChain", "OpenAI API"],
    },
    {
      title: "Personal Notes Assistant",
      description: "A document-based AI assistant using embeddings and vector search.",
      tech: ["RAG", "FAISS", "Python"],
    },
    {
      title: "3D Animation",
      description: "Created a computer graphics based animation project focusing on visual rendering.",
      tech: ["Computer Graphics", "C/C++"],
    },
    {
      title: "Employee Management System",
      description: "Java based employee record management application with intuitive interface.",
      tech: ["Java", "OOP"],
    }
  ]

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full flex flex-col hover:bg-white/10 transition-all duration-300 group border-white/5">
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 w-full pt-4 border-t border-white/10">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm">
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm">
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
