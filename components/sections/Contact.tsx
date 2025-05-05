"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {/* Left - Contact Details */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a href="mailto:myameen033@gmail.com" className="hover:text-primary">
                myameen033@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <a href="tel:+917878438184" className="hover:text-primary">
                +91-7878438184
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Linkedin className="h-5 w-5 text-muted-foreground" />
              <a
                href="https://linkedin.com/in/yameen-macchhar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                linkedin/yameen-macchhar
              </a>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 cursor-default"
          >
            Send Message
          </button>
        </div>
      </motion.div>
    </section>
  )
}
