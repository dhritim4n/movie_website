"use client"

import { Movie_search } from "./Movie_search"
import { useState } from "react"
import Hamburger from "hamburger-react"
import Link  from "next/link"

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="hidden md:flex gap-6 bg-background border-b border-border text-foreground justify-between items-center px-6 py-3 sticky top-0 z-50 backdrop-blur"
      >
        <div className="text-xl font-semibold tracking-wide">
          🎬 Movies Hub
        </div>

        <div className="w-[50%]">
          <Movie_search />
        </div>

        <ul className="flex gap-8 text-muted-foreground">
          
          <li className="cursor-pointer hover:text-primary transition-colors">
           <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-primary transition-colors">
                <Link href="/browse">Browse</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className="md:hidden bg-background border-b border-border flex flex-col gap-4 px-5 py-3 sticky top-0 z-50"
      >
        <div className="flex items-center gap-3">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />

          <h1 className="text-2xl font-semibold tracking-wide">
            🎬 Movie Site
          </h1>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-4 bg-card border border-border rounded-lg p-4 animate-in fade-in slide-in-from-top-2">
            
            <Movie_search />

            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li className="cursor-pointer hover:text-primary transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-primary transition-colors">
                <Link href="/genre">Genre</Link>
              </li>
              <li className="cursor-pointer hover:text-primary transition-colors">
                Latest
              </li>
            </ul>

          </div>
        )}
      </nav>
    </>
  )
}