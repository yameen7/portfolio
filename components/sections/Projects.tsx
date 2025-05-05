"use client"

import { motion } from "framer-motion"
import { Code, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Money Tracker",
      description:
        "Developed features that allows user to track your daily expenses and suggest the daily spend limit based on users revenue cycle.",
      tools: "Reactjs, nodejs, mongodb, shadcn(UI library)",
      link : "https://moneytracker-sigma.vercel.app"
    },
    {
      title: "Spectrom",
      description:
        "Displays information about all events such as rules, fees, place, and type of participation (group or single) and allows the user to register for the events.",
      tools: "PHP, Javascript, Jquery, Mysql and bootstrap.",
    },
    {
      title: "Time Logger",
      description:
        "Keka Time Logger is a smart Chrome extension that gives you clear and detailed insights into your daily logs and time usage. It helps you understand how your time is spent across workdays — empowering you to track productivity effortlessly.",
      link: "https://chromewebstore.google.com/detail/keka-time-logger/dpdfhijiikhcbpkeciiknfffnapajcid/reviews?hl=en",
    },
  ]

  return (
    <section id="projects" className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-8">
          <Code className="h-6 w-6" />
          <h2 className="text-3xl font-bold tracking-tighter">Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.link && <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={project.link} target="_blank"><ExternalLink className="h-4 w-4"></ExternalLink></Link>
                  </Button>}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {project.tools && <div className="flex items-center text-sm text-muted-foreground">
                  <span className="font-medium">Tech Stack:</span>
                  <span className="ml-2">{project.tools}</span>
                </div>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
