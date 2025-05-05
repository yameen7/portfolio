"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="container py-12 md:py-24 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-8">
          <User className="h-6 w-6" />
          <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
        </div>
        <p className="max-w-3xl text-lg text-muted-foreground">
          A Junior Software Developer with expertise in React, JavaScript, and modern front-end development,
          specializing in building dynamic and responsive user interfaces. Skilled in developing scalable web
          applications, integrating APIs, and optimizing performance for seamless user experiences. Proficient in
          backend technologies like Node.js, express, MongoDB, and PHP, with experience in e-commerce solutions and
          Magento customization. Passionate about continuous learning and staying up to date with emerging technologies
          to deliver high-quality, efficient solutions.
        </p>
      </motion.div>
    </section>
  )
}
