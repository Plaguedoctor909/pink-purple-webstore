import type React from "react"
import { Navbar } from "@/components/navbar"
import "./globals.css"

export const metadata = {
  title: "StyleHaven - Fashion & Home Decor",
  description: "Discover your style, elevate your space with our curated collection of fashion and home decor items.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gradient-to-r from-pink-50 to-purple-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">StyleHaven</h3>
                <p className="text-muted-foreground">Your one-stop shop for fashion and home decor.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/category/kitchen" className="text-muted-foreground hover:text-pink-600">
                      Kitchen
                    </a>
                  </li>
                  <li>
                    <a href="/category/boys" className="text-muted-foreground hover:text-pink-600">
                      Boys
                    </a>
                  </li>
                  <li>
                    <a href="/category/men" className="text-muted-foreground hover:text-pink-600">
                      Men
                    </a>
                  </li>
                  <li>
                    <a href="/category/girls" className="text-muted-foreground hover:text-pink-600">
                      Girls
                    </a>
                  </li>
                  <li>
                    <a href="/category/bedroom" className="text-muted-foreground hover:text-pink-600">
                      Bedroom
                    </a>
                  </li>
                  <li>
                    <a href="/category/accessories" className="text-muted-foreground hover:text-pink-600">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Help</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-pink-600">
                      Customer Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-pink-600">
                      Track Order
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-pink-600">
                      Returns & Exchanges
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-pink-600">
                      Shipping Info
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">Email: info@stylehaven.com</li>
                  <li className="text-muted-foreground">Phone: (123) 456-7890</li>
                  <li className="text-muted-foreground">Address: 123 Fashion St, Style City</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t pt-6 text-center text-muted-foreground">
              © {new Date().getFullYear()} StyleHaven. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
