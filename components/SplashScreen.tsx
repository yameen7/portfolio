"use client"

import { motion } from "framer-motion"

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-primary z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl font-bold text-primary-foreground mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Mo Yameen Macchhar
        </motion.h1>
        <motion.p
          className="text-xl text-primary-foreground/80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Software Developer
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
