"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Linkedin } from "lucide-react"
import prodileImage from '@/app/opengraph-image.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="relative w-[15rem] h-[15rem] mb-6 overflow-hidden rounded-full bg-muted">
          <Image
            src={prodileImage}
            alt="Mo Yameen Macchhar"
            className="object-cover"
            height={300}
            width={300}
            priority
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
            <a href="mailto:myameen033@gmail.com">myameen033@gmail.com</a>
          </div>
          <div className="flex items-center">
            <Phone className="mr-1 h-4 w-4" />
            <a href="tel:+917878438184">+91-7878438184</a>
          </div>
          <div className="flex items-center">
            <Linkedin className="mr-1 h-4 w-4" />
            <a href="https://linkedin.com/in/yameen-macchhar"
                target="_blank">linkedin/yameen-macchhar</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
