"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"

export default function Skills() {
  const skills = [
    "JavaScript",
    "C",
    "PHP",
    "React",
    "jQuery",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Next.js",
    "Magento",
    "Redux",
    "GraphQL",
  ]

  return (
    <section id="skills" className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-8">
          <Code className="h-6 w-6" />
          <h2 className="text-3xl font-bold tracking-tighter">Technologies</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
