"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Filter } from 'lucide-react'
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
    // Previously added images
    {
      id: 13,
      src: "/gallery/10.jpg",
      alt: "Students enjoying a zorb roller activity on a grassy field",
      title: "Zorb Roller Fun",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 14,
      src: "/gallery/4.jpg",
      alt: "A student crossing a Barma Bridge obstacle course",
      title: "Barma Bridge Challenge",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 15,
      src: "/gallery/3.jpg",
      alt: "An instructor giving a morning briefing to a group of students",
      title: "Morning Briefing",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 16,
      src: "/gallery/9.jpg",
      alt: "A student balancing on a Tyre Bridge obstacle",
      title: "Tyre Bridge Adventure",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 17,
      src: "/gallery/1.jpg",
      alt: "A student performing a commando crawl through a net tunnel",
      title: "Commando Crawl",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 18,
      src: "/gallery/6.jpg",
      alt: "Students watching another student cross a Burma Bridge",
      title: "Burma Bridge Activity",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 19,
      src: "/gallery/2.jpg",
      alt: "Students posing with a zip line activity in the background",
      title: "Zip Line Thrill",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 20,
      src: "/gallery/5.jpg",
      alt: "A student playing hopscotch on outdoor markers",
      title: "Hopscotch Fun",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 21,
      src: "/gallery/8.jpg",
      alt: "A student standing on a hopscotch marker during an activity",
      title: "Hopscotch Activity",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 22,
      src: "/gallery/7.jpg",
      alt: "A hot air balloon being prepared on a field with students observing",
      title: "Hot Air Balloon Experience",
      category: "day-out",
      location: "Outdoor Site",
    },
    // More previously added images
    {
      id: 23,
      src: "/gallery/18.jpg",
      alt: "An instructor helping a young child on a tire swing",
      title: "Tyre Swing",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 24,
      src: "/gallery/16.jpg",
      alt: "A girl on a zipline in front of a historic building",
      title: "Zipline Adventure",
      category: "day-out",
      location: "Historic Site",
    },
    {
      id: 25,
      src: "/gallery/14.jpg",
      alt: "A student rock climbing on an artificial wall, with other students watching",
      title: "Sports Climbing",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 26,
      src: "/gallery/11.jpg",
      alt: "Students inside a large blue fabric 'hamster wheel' being guided by instructors",
      title: "Hamster Wheel",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 27,
      src: "/gallery/15.jpg",
      alt: "A student climbing a rope ladder attached to a tree",
      title: "Rope Ladder Climbing",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 28,
      src: "/gallery/13.jpg",
      alt: "Students lying on the grass, forming a 'King Line' with their bodies",
      title: "King Line Team Building",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 29,
      src: "/gallery/17.jpg",
      alt: "A young boy climbing a rope ladder, with an instructor assisting from below",
      title: "Rope Ladder Climb",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 30,
      src: "/gallery/12.jpg",
      alt: "A girl climbing a yellow commando net obstacle",
      title: "Commando Net",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 31,
      src: "/gallery/21.jpg",
      alt: "A girl in a harness climbing a rock wall",
      title: "Rock Wall Climbing",
      category: "in-school",
      location: "Campus",
    },
    {
      id: 32,
      src: "/gallery/20.jpg",
      alt: "Students observing through telescopes, guided by an adult",
      title: "Telescope Observation Session",
      category: "astronomy",
      location: "Outdoor Site",
    },
    // New images added below
    {
      id: 33,
      src: "/gallery/27.jpg",
      alt: "Children and adults enjoying a water park with slides",
      title: "Water Park Fun",
      category: "day-out",
      location: "Water Park",
    },
    {
      id: 34,
      src: "/gallery/31.jpg",
      alt: "Group of young people in a raft on a river",
      title: "River Rafting Adventure",
      category: "residential",
      location: "Manali",
    },
    {
      id: 35,
      src: "/gallery/30.jpg",
      alt: "People gathered around a large bonfire at night",
      title: "Bonfire Night",
      category: "residential",
      location: "Campsite",
    },
    {
      id: 36,
      src: "/gallery/29.jpg",
      alt: "Students holding an 'Ignite Residential Programme' banner",
      title: "Residential Program Group",
      category: "residential",
      location: "Outdoor Camp",
    },
    {
      id: 37,
      src: "/gallery/28.jpg",
      alt: "Students posing in front of Atal Tunnel, Rohtang",
      title: "Atal Tunnel Expedition",
      category: "residential",
      location: "Rohtang",
    },
    {
      id: 38,
      src: "/gallery/22.jpg",
      alt: "Group of people posing excitedly in front of a waterfall",
      title: "Waterfall Visit",
      category: "day-out",
      location: "Nature Site",
    },
    {
      id: 39,
      src: "/gallery/26.jpg",
      alt: "Person rappelling down a waterfall",
      title: "Waterfall Rappelling",
      category: "day-out",
      location: "Nature Site",
    },
    {
      id: 40,
      src: "/gallery/24.jpg",
      alt: "Boys with a snowman and children on a caterpillar ride",
      title: "Winter Fun & Rides",
      category: "in-school",
      location: "Campus/Park",
    },
    {
      id: 41,
      src: "/gallery/23.jpg",
      alt: "Students in snowy landscape and on a rope course",
      title: "Snow Adventure & Ropes",
      category: "residential",
      location: "Mountain Camp",
    },
    {
      id: 42,
      src: "/gallery/25.jpg",
      alt: "Hikers walking through a field of pink flowers in mountains",
      title: "Mountain Trek through Flowers",
      category: "residential",
      location: "Himalayas",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-orbitron">Adventure Gallery</h1>
            <p className="text-xl leading-relaxed font-exo-2">
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
                className={`mb-2 font-exo-2 ${
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
                    <h3 className="text-lg font-orbitron font-bold mb-2">{image.title}</h3>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-stone-100/20 text-stone-100 font-exo-2">
                        {image.location}
                      </Badge>
                      <Badge variant="outline" className="border-stone-100 text-stone-100 font-exo-2">
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
              <h3 className="text-xl font-orbitron font-semibold text-slate-600 mb-2">No photos found</h3>
              <p className="text-slate-500 font-exo-2">Try selecting a different category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-slate-800">Captured Memories</h2>
            <p className="text-xl font-exo-2 text-slate-600">Every photo tells a story of adventure, learning, and growth</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-amber-700 mb-2">1000+</div>
              <div className="text-slate-700 font-exo-2">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-amber-700 mb-2">15+</div>
              <div className="text-slate-700 font-exo-2">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-amber-700 mb-2">500+</div>
              <div className="text-slate-700 font-exo-2">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-amber-700 mb-2">25K+</div>
              <div className="text-slate-700 font-exo-2">Happy Students</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
