"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const slides = [
  {
    src: "/gallery/1.jpg",
    alt: "Adventure group activity in mountains",
    title: "MOUNTAIN ADVENTURES",
    tagline: "DISCOVER THE THRILL OF HIGH ALTITUDE EXPERIENCES",
    location: "Himalayan Ranges",
  },
  {
    src: "/gallery/5.jpg",
    alt: "Students engaged in outdoor adventure activities",
    title: "TEAM BUILDING",
    tagline: "BUILD CONFIDENCE THROUGH ADVENTURE CHALLENGES",
    location: "Adventure Camps",
  },
  {
    src: "/gallery/10.jpg",
    alt: "Outdoor adventure and nature exploration",
    title: "NATURE EXPLORATION",
    tagline: "CONNECT WITH NATURE THROUGH GUIDED ADVENTURES",
    location: "National Parks",
  },
  {
    src: "/gallery/15.jpg",
    alt: "Adventure sports and outdoor activities",
    title: "ADVENTURE SPORTS",
    tagline: "EXPERIENCE ADRENALINE-PUMPING OUTDOOR ACTIVITIES",
    location: "Adventure Destinations",
  },
]

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={slide.src || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover z-0"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-10 flex flex-col items-center justify-center text-center text-white p-4">
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl font-body mb-2 opacity-90 tracking-wide">IGNITE ADVENTURE</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 drop-shadow-2xl leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl font-body mb-2 drop-shadow-lg opacity-95">
                      {slide.tagline}
                    </p>
                    <p className="text-lg md:text-xl font-body mb-8 opacity-80 tracking-wide">{slide.location}</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-amber-700 text-white hover:bg-amber-600 font-body shadow-lg"
                      >
                        <Link href="tel:+919650485880">
                          <Phone className="w-5 h-5 mr-2" />
                          Call Us Now
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-slate-800 bg-transparent font-body shadow-lg"
                      >
                        <Link href="mailto:info.igniteadventure@gmail.com">
                          <Mail className="w-5 h-5 mr-2" />
                          Get Quote
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-slate-800 hover:bg-white border-0 shadow-lg" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 text-slate-800 hover:bg-white border-0 shadow-lg" />
      </Carousel>
    </section>
  )
}
