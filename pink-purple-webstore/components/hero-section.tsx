"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-white py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              New Summer Collection
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Discover Your Style, Elevate Your Space
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore our curated collection of fashion and home decor items that blend style, comfort, and quality.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                Shop Now
              </Button>
              <Button variant="outline" className="border-pink-200 hover:bg-pink-50">
                Explore Categories
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-[400px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Hero image"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
              <motion.div
                className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                  <div>
                    <div className="text-sm font-medium">Summer Sale</div>
                    <div className="text-xs text-gray-500">Up to 50% off</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-6 -right-6 rounded-xl bg-white p-4 shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                  <div>
                    <div className="text-sm font-medium">Free Shipping</div>
                    <div className="text-xs text-gray-500">On orders over $50</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-pink-300 opacity-20 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-purple-300 opacity-20 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </section>
  )
}
