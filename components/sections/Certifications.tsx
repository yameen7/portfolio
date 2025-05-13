"use client"

import { motion } from "framer-motion"
import { ExternalLink, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Certifications() {
  const certificates = [
    {
      title: "Reactjs (HackerRank)",
      link : "https://www.hackerrank.com/certificates/421adb855074"
    },
    {
      title: "Professional - Adobe Commerce Developer",
      link: "https://certification.adobe.com/credential/verify/552b1af1-ea91-426c-a580-57389aebd016",
    },
  ]

  return (
    <section id="certifications" className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-8">
          <ShieldCheck className="h-6 w-6" />
          <h2 className="text-3xl font-bold tracking-tighter">Certifications</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{certificate.title}</h3>
                  {certificate.link && <Button variant="ghost" size="icon" className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <Link href={certificate.link} target="_blank"><ExternalLink className="h-4 w-4"></ExternalLink></Link>
                  </Button>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
