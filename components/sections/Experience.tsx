"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Krish Technolabs",
      period: "Sep 2023 – Present",
      responsibilities: [
        "Integrating graphql and creating user-friendly and reusable components in PWA studio using react.",
        "Creating custom hooks to encapsulate reusable logic, improve component efficiency.",
        "Working with redux for global state managements.",
        "Working with magneto B2B features like requisition list, company accounts, etc.",
      ],
    },
    {
      title: "Trainee Software Developer",
      company: "Krish Technolabs",
      period: "Jan 2023 – Aug 2023",
      responsibilities: [
        "Training in react, node, magento2, mysql, php and developing a capstone project based on it.",
        "Created the capstone project using react, redux, mysql, node and express that has login, add to cart, PDP, PLP like features and protected routes to manage the authorizations.",
        "Creating the CRUD functionality using express, node, mysql, react and redux.",
      ],
    },
  ]

  return (
    <section id="experience" className="container py-12 md:py-24 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-6 w-6" />
          <h2 className="text-3xl font-bold tracking-tighter">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l"
            >
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2" />
              <div className="mb-2">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-muted-foreground">
                  {exp.company} | {exp.period}
                </p>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-muted-foreground">
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
