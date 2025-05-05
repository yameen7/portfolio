"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "B. Tech CE",
      institution: "RK University (Rajkot)",
      period: "2020 – 2023",
      gpa: "7.9/10",
    },
    {
      degree: "Diploma CE",
      institution: "Om Institute of Technology (Junagadh)",
      period: "2018 – 2020",
      gpa: "9.11/10",
    },
  ]

  return (
    <section id="education" className="container py-12 md:py-24 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="h-6 w-6" />
          <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l"
            >
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2" />
              <div>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-muted-foreground">
                  {edu.institution} | {edu.period}
                </p>
                <p className="text-muted-foreground">GPA: {edu.gpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
