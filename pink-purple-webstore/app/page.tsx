import Image from "next/image"

import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import { CategoryGrid } from "@/components/category-grid"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shop by Category</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Explore our wide range of products across different categories
            </p>
          </div>
        </div>
        <CategoryGrid />
      </section>

      <section className="container px-4 py-12 md:py-24 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">Discover our most popular items</p>
          </div>
        </div>
        <FeaturedProducts />
      </section>

      <section className="container px-4 py-12 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Community</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Subscribe to our newsletter for exclusive deals, new arrivals, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Newsletter illustration"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
