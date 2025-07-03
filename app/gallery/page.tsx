"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Filter } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "in-school", label: "In-School Programs" },
    { id: "day-out", label: "Day-Out Adventures" },
    { id: "residential", label: "Residential Trips" },
    { id: "astronomy", label: "Astronomy Programs" },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students rock climbing during adventure program",
      title: "Rock Climbing Adventure",
      category: "day-out",
      location: "Corbett",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Group photo at Manali residential trip",
      title: "Manali Group Adventure",
      category: "residential",
      location: "Manali",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Astronomy program stargazing session",
      title: "Stargazing Session",
      category: "astronomy",
      location: "Nainital",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Team building activities on school campus",
      title: "Campus Team Building",
      category: "in-school",
      location: "Delhi",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Nature walk and exploration",
      title: "Nature Exploration",
      category: "day-out",
      location: "Mussoorie",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Adventure sports and activities",
      title: "Adventure Sports",
      category: "residential",
      location: "Shimla",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Students using telescopes",
      title: "Telescope Observation",
      category: "astronomy",
      location: "Barot",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Rappelling activity",
      title: "Rappelling Challenge",
      category: "day-out",
      location: "Corbett",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Indoor team activities",
      title: "Indoor Team Challenges",
      category: "in-school",
      location: "Mumbai",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mountain trekking",
      title: "Mountain Trek",
      category: "residential",
      location: "Manali",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Night sky photography",
      title: "Astrophotography Workshop",
      category: "astronomy",
      location: "Mussoorie",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      alt: "River crossing activity",
      title: "River Crossing",
      category: "day-out",
      location: "Nainital",
    },
  ]

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((image) => image.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-amber-700 text-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Camera className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Adventure Gallery</h1>
            <p className="text-xl leading-relaxed">
              Explore the excitement, joy, and transformative moments from our adventure programs across India's most
              beautiful destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`mb-2 ${
                  activeFilter === category.id
                    ? "bg-slate-800 text-stone-100 hover:bg-slate-700"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-stone-100">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-stone-100/20 text-stone-100">
                        {image.location}
                      </Badge>
                      <Badge variant="outline" className="border-stone-100 text-stone-100">
                        {categories.find((cat) => cat.id === image.category)?.label}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">No photos found</h3>
              <p className="text-slate-500">Try selecting a different category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Captured Memories</h2>
            <p className="text-xl text-slate-600">Every photo tells a story of adventure, learning, and growth</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">1000+</div>
              <div className="text-slate-700">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">15+</div>
              <div className="text-slate-700">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">500+</div>
              <div className="text-slate-700">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-700 mb-2">25K+</div>
              <div className="text-slate-700">Happy Students</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
