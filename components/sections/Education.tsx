"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar, TrendingUp } from "lucide-react"

const educationData = [
  {
    year: "2023 – 2026",
    degree: "Diploma in Computer Engineering",
    institution: "K.E. Society's Rajarambapu Institute of Technology Polytechnic, Pune",
    performance: [
      { label: "Third Semester", value: "86.82%", width: 87 },
      { label: "Second Semester", value: "80.82%", width: 81 },
      { label: "First Semester", value: "77.53%", width: 78 },
    ],
  },
]

const certifications = [
  { name: "TCS iON Telephone Etiquette", issuer: "TCS iON" },
  { name: "TCS iON Email Etiquette", issuer: "TCS iON" },
  { name: "TCS iON Presentation Skills", issuer: "TCS iON" },
]

export default function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-1/2 h-[400px] bg-gradient-to-tr from-navy-800/15 to-transparent blur-[80px]" />
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
          <span className="section-badge mb-5 inline-flex">Background</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Education &{" "}
            <span className="text-gradient-gold">Certifications</span>
          </h2>
          <div className="gold-line w-16 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Education Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white font-poppins">Academic Journey</h3>
                <p className="text-white/40 text-xs">Diploma in Computer Engineering</p>
              </div>
            </motion.div>

            <div className="relative border-l-2 border-gold/20 ml-5 space-y-8 pb-4">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="pl-8 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.6)] border-2 border-navy-950" />

                  <div className="premium-card p-7">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/60 via-gold/30 to-transparent rounded-t-[14px]" />

                    <div className="flex items-center gap-2 text-gold text-xs font-semibold mb-3 tracking-wide">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.year}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1 font-poppins">{edu.degree}</h4>
                    <p className="text-white/45 text-sm mb-6 leading-relaxed">{edu.institution}</p>

                    {/* Performance Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
                        <TrendingUp className="h-3.5 w-3.5 text-gold" />
                        Academic Performance
                      </div>
                      {edu.performance.map((perf, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-white/60">{perf.label}</span>
                            <span className="text-white font-semibold">{perf.value}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${perf.width}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: i * 0.15 + 0.3, ease: "easeOut" }}
                              className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                            />
                          </div>
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
                <Award className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white font-poppins">Certifications</h3>
                <p className="text-white/40 text-xs">Professional development credentials</p>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className="group"
                >
                  <div className="premium-card p-5 flex items-center gap-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/50 via-gold/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[14px]" />

                    <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all duration-300">
                      <Award className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white group-hover:text-gold transition-colors duration-200 font-poppins">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-white/40 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Extra card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="premium-card p-6 border-dashed border-gold/20 text-center">
                  <p className="text-white/30 text-sm font-sans">More certifications in progress...</p>
                  <div className="mt-3 h-1 w-16 mx-auto bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
