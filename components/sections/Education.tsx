"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      year: "2026",
      degree: "Diploma in Computer Engineering",
      institution: "K.E. Society's Rajarambapu Institute of Technology Polytechnic, Pune",
      performance: [
        "Third Semester: 86.82%",
        "Second Semester: 80.82%",
        "First Semester: 77.53%"
      ]
    }
  ]

  const certifications = [
    "TCS iON Telephone Etiquette",
    "TCS iON Email Etiquette",
    "TCS iON Presentation Skills"
  ]

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education & <span className="text-gradient">Certifications</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-white">Academic Journey</h3>
            </div>
            
            <div className="relative border-l border-white/20 ml-4 space-y-8 pb-4">
              {educationData.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="pl-8 relative"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <Calendar className="h-4 w-4" /> {edu.year}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm mb-4">{edu.institution}</p>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-300">Academic Performance:</p>
                      {edu.performance.map((perf, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          {perf}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-5 flex items-center gap-4 hover:bg-white/10 transition-colors"
                >
                  <div className="p-3 rounded-full bg-yellow-400/10 text-yellow-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium text-white">{cert}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
