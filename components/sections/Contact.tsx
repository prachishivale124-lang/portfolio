"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send, Globe2 } from "lucide-react"

export default function Contact() {
  const languages = ["English", "Hindi", "Marathi"]

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info & Languages */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a question, want to collaborate on a project, or just want to say hi, my inbox is always open. Let's build something amazing together!
              </p>
              
              <div className="flex gap-4 mb-10">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/20 transition-all text-white hover:text-primary">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/20 transition-all text-white hover:text-blue-500">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:prachishivale124@gmail.com" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/20 transition-all text-white hover:text-red-500">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Globe2 className="h-6 w-6 text-primary" /> Languages
              </h3>
              <div className="flex gap-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="glass-card px-6 py-3 rounded-xl border border-white/10 text-white font-medium hover:border-primary/50 transition-colors">
                    {lang}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-black/50 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <Textarea id="message" placeholder="How can I help you?" className="bg-black/50 border-white/10 min-h-[150px]" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-12 text-lg">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
