"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Ceramic Dinner Set",
    price: 89.99,
    category: "Kitchen",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    price: 59.99,
    originalPrice: 79.99,
    category: "Men",
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    isSale: true,
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    price: 45.99,
    category: "Girls",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Luxury Bedding Set",
    price: 129.99,
    originalPrice: 159.99,
    category: "Bedroom",
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    isSale: true,
  },
]

export function FeaturedProducts() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <div className="relative h-[300px] overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {(product.isNew || product.isSale) && (
              <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
                {product.isNew && <Badge className="bg-pink-500 hover:bg-pink-600">New</Badge>}
                {product.isSale && <Badge className="bg-purple-500 hover:bg-purple-600">Sale</Badge>}
              </div>
            )}
            <motion.div
              className="absolute inset-0 bg-black/0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button size="icon" variant="secondary" className="rounded-full h-10 w-10">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button
                size="icon"
                className="rounded-full h-10 w-10 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </Button>
            </motion.div>
          </div>
          <div className="p-4">
            <div className="text-sm text-muted-foreground">{product.category}</div>
            <h3 className="font-medium mt-1">{product.name}</h3>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-bold text-lg">${product.price}</span>
              {product.originalPrice && (
                <span className="text-muted-foreground line-through text-sm">${product.originalPrice}</span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
