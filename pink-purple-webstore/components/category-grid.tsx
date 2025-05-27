"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  {
    name: "Kitchen",
    image: "/placeholder.svg?height=300&width=300",
    href: "/category/kitchen",
    description: "Modern kitchen essentials",
  },
  {
    name: "Boys",
    image: "/placeholder.svg?height=300&width=300",
    href: "/category/boys",
    description: "Stylish clothing for boys",
  },
  {
    name: "Men",
    image: "/placeholder.svg?height=300&width=300",
    href: "/category/men",
    description: "Contemporary men's fashion",
  },
  {
    name: "Girls",
    image: "/placeholder.svg?height=300&width=300",
    href: "/category/girls",
    description: "Trendy outfits for girls",
  },
  {
    name: "Bedroom",
    image: "/placeholder.svg?height=300&width=300",
    href: "/category/bedroom",
    description: "Cozy bedroom furnishings",
  },
  {
    name: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
    href: "/category/accessories",
    description: "Complete your look",
  },
]

export function CategoryGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {categories.map((category, index) => (
        <motion.div
          key={category.name}
          className="group relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <Link href={category.href} className="absolute inset-0 z-10">
            <span className="sr-only">View {category.name}</span>
          </Link>
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="mt-1 text-sm text-white/80">{category.description}</p>
              <motion.div
                className="mt-3 h-0.5 bg-white"
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? "100%" : "40px" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
