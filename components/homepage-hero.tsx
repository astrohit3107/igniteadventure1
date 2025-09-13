"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroSlides = [
  {
    src: "/hero-slider/JAISALMER.jpg",
    alt: "Desert adventure in Jaisalmer with golden sand dunes",
    title: "JAISALMER",
    subtitle: "Desert Adventure",
    description: "Experience the golden sands and rich culture of Rajasthan's desert jewel",
  },
  {
    src: "/hero-slider/JIM CORBETT.jpg",
    alt: "Wildlife safari experience in Jim Corbett National Park",
    title: "JIM CORBETT",
    subtitle: "Wildlife Safari",
    description: "Discover India's oldest national park and encounter majestic wildlife",
  },
  {
    src: "/hero-slider/KERELA.jpg",
    alt: "Backwater cruise through Kerala's serene waterways",
    title: "KERALA",
    subtitle: "Backwater Bliss",
    description: "Navigate through tranquil backwaters and lush green landscapes",
  },
  {
    src: "/hero-slider/CHAKRATA.jpg",
    alt: "Mountain adventure in Chakrata with scenic valleys",
    title: "CHAKRATA",
    subtitle: "Mountain Retreat",
    description: "Explore pristine valleys and breathtaking Himalayan views",
  },
  {
    src: "/hero-slider/AMRITSAR.jpg",
    alt: "Cultural exploration of Amritsar's Golden Temple",
    title: "AMRITSAR",
    subtitle: "Cultural Heritage",
    description: "Walk through sacred streets and experience Sikh culture",
  },
  {
    src: "/hero-slider/JAIPUR.jpg",
    alt: "Royal palaces and forts of the Pink City Jaipur",
    title: "JAIPUR",
    subtitle: "Royal Heritage",
    description: "Step into the royal past of Rajasthan's Pink City",
  },
]

export default function HomepageHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-body mb-2 opacity-90 tracking-wider">IGNITE ADVENTURE</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 drop-shadow-2xl leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-body mb-4 drop-shadow-lg text-amber-300">
            {heroSlides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-body mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-amber-700 text-white hover:bg-amber-600 font-body shadow-xl px-8 py-3"
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
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 bg-transparent font-body shadow-xl px-8 py-3"
            >
              <Link href="mailto:info.igniteadventure@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
