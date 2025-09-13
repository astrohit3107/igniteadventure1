"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    src: "/hero-slider/JAISALMER.jpg",
    alt: "Ignite Camp Jaisalmer - Desert adventure with camels",
    title: "JAISALMER",
    tagline: "THE SKILL OF LIVING IN A DESERT",
  },
  {
    src: "/hero-slider/JIM CORBETT.jpg",
    alt: "Ignite Camp Jim Corbett - Wildlife experience with a tiger",
    title: "JIM CORBETT",
    tagline: "EXPERIENCE THE WILD HEART OF NATURE",
  },
  {
    src: "/hero-slider/KERELA.jpg",
    alt: "Ignite Camp Kerela - Backwaters with houseboats at sunset",
    title: "KERELA",
    tagline: "LEARN FROM THE LAND OF BACKWATERS AND WISDOM",
  },
  {
    src: "/hero-slider/CHAKRATA.jpg",
    alt: "Ignite Camp Chakrata - Himalayan mountains and waterfalls",
    title: "CHAKRATA",
    tagline: "TOUCH THE SKY, WALK THE ROOF OF THE HILLS",
  },
  {
    src: "/hero-slider/AMRITSAR.jpg",
    alt: "Ignite Camp Amritsar - Sacred streets with Golden Temple",
    title: "AMRITSAR",
    tagline: "WALK THE SACRED STREETS OF AMRITSAR",
  },
  {
    src: "/hero-slider/JAIPUR.jpg",
    alt: "Ignite Camp Jaipur - Royal palaces and forts",
    title: "JAIPUR",
    tagline: "STEP INTO THE ROYAL PAST",
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
                <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center text-stone-100 p-4">
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl font-body mb-2 text-shadow">IGNITE CAMP</p>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-shadow-lg">{slide.title}</h1>
                    <p className="text-xl md:text-2xl font-body text-shadow mb-8">{slide.tagline}</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="bg-amber-700 text-stone-100 hover:bg-amber-600 font-body">
                        <Link href="tel:+919650485880">
                          <Phone className="w-5 h-5 mr-2" />
                          Call Us Now
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-slate-800 bg-transparent font-body"
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
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-stone-100/90 text-slate-800 hover:bg-stone-100 border-0" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-stone-100/90 text-slate-800 hover:bg-stone-100 border-0" />
      </Carousel>
    </section>
  )
}
