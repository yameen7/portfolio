"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import SplashScreen from "@/components/SplashScreen"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Education from "@/components/sections/Education"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {loading ? (
          <SplashScreen />
        ) : (
          <main>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            {/* <Footer /> */}
          </main>
        )}
      </AnimatePresence>
    </div>
  )
}
