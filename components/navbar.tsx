"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const programs = [
    {
      title: "In-School Adventure Camps",
      description: "On-campus adventure activities and team building",
      href: "/programs/in-school",
    },
    {
      title: "Day-Out Adventure Camps",
      description: "Single-day adventure experiences",
      href: "/programs/day-out",
    },
    {
      title: "Residential Adventure Trips",
      description: "Multi-day educational adventures",
      href: "/programs/residential",
    },
    {
      title: "International Exposure",
      description: "Global adventure and cultural exchange programs",
      href: "/programs/international-exposure",
    },
    {
      title: "IAYP & CAS Programs",
      description: "Award and certification focused programs",
      href: "/programs/iayp-cas",
    },
  ]

  return (
    <header className="w-full border-b border-amber-200 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Ignite Adventure Logo" className="h-12 w-auto" />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-stone-100 transition-colors font-body">
              Home
            </Link>

            <Link href="/about" className="text-sm font-medium text-stone-100 transition-colors font-body">
              About
            </Link>

            <div className="relative group">
              <button className="text-sm font-medium text-stone-100 transition-colors flex items-center space-x-1 font-body">
                <span>Programs</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-xl border border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-50">
                {/* Hover bridge - invisible element to prevent menu from disappearing */}
                <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>

                <div className="p-2">
                  {programs.map((program, index) => (
                    <Link
                      key={index}
                      href={program.href}
                      className="group/item flex flex-col p-4 rounded-md hover:bg-stone-50 transition-colors duration-200"
                    >
                      <div className="text-sm font-medium text-slate-800 group-hover/item:text-amber-700 transition-colors font-heading">
                        {program.title}
                      </div>
                      <div className="text-sm text-slate-600 mt-1 leading-snug font-body">{program.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/gallery" className="text-sm font-medium text-stone-100 transition-colors font-body">
              Gallery
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="bg-amber-700 text-stone-100 hover:bg-amber-600 font-body">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className="border-amber-700 text-stone-100 hover:bg-amber-700 bg-transparent"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-slate-800 transition-colors font-body"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <div className="text-lg font-medium text-slate-800 font-heading">Programs</div>
                  {programs.map((program, index) => (
                    <Link
                      key={index}
                      href={program.href}
                      className="block pl-4 text-sm text-slate-600 transition-colors font-body"
                      onClick={() => setIsOpen(false)}
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/gallery"
                  className="text-lg font-medium text-slate-800 transition-colors font-body"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>

                <Link
                  href="/about"
                  className="text-lg font-medium text-slate-800 transition-colors font-body"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <Button asChild className="mt-4 bg-amber-700 text-stone-100 hover:bg-amber-600 font-body">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
