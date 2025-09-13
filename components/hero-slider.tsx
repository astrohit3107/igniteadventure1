"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const slides = [
  {
    src: "/gallery/31.jpg",
    alt: "Group of young people in a raft on a river",
    title: "RIVER RAFTING ADVENTURE",
    tagline: "EXPERIENCE THE THRILL OF WHITE WATER RAPIDS",
    location: "Manali",
  },
  {
    src: "/gallery/30.jpg",
    alt: "People gathered around a large bonfire at night",
    title: "BONFIRE NIGHTS",
    tagline: "CREATE MEMORIES UNDER THE STARLIT SKY",
    location: "Mountain Camps",
  },
  {
    src: "/gallery/25.jpg",
    alt: "Hikers walking through a field of pink flowers in mountains",
    title: "MOUNTAIN TREKKING",
    tagline: "DISCOVER THE BEAUTY OF HIMALAYAN TRAILS",
    location: "Himalayas",
  },
  {
    src: "/gallery/20.jpg",
    alt: "Students observing through telescopes, guided by an adult",
    title: "ASTRONOMY PROGRAMS",
    tagline: "EXPLORE THE WONDERS OF THE UNIVERSE",
    location: "Dark Sky Sites",
  },
]

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <Carousel className="w-full h-full">
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
                />
                <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-center text-stone-100 p-4">
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl font-body mb-2 opacity-90">IGNITE ADVENTURE</p>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
                    <p className="text-xl md:text-2xl font-body mb-2 drop-shadow-md">{slide.tagline}</p>
                    <p className="text-lg md:text-xl font-body mb-8 opacity-80">{slide.location}</p>

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
