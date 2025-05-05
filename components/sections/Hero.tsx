"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="relative w-24 h-24 mb-6 overflow-hidden rounded-full bg-muted">
          <img
            src="/placeholder.svg?height=96&width=96"
            alt="Mo Yameen Macchhar"
            className="object-cover"
            width={96}
            height={96}
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">Mo Yameen Macchhar</h1>
        <p className="text-xl text-muted-foreground mb-6">Junior Software Developer</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            <span>Ahmedabad, India</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-1 h-4 w-4" />
            <span>myameen033@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-1 h-4 w-4" />
            <span>+91-7878438184</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="mr-1 h-4 w-4" />
            <span>linkedin/yameen-macchhar</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
