import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const galleryImages = [
  { src: "/gallery/1.jpg", alt: "Adventure group activity" },
  { src: "/gallery/2.jpg", alt: "Students in outdoor adventure" },
  { src: "/gallery/3.jpg", alt: "Nature exploration activity" },
  { src: "/gallery/4.jpg", alt: "Team building exercise" },
  { src: "/gallery/5.jpg", alt: "Outdoor learning experience" },
  { src: "/gallery/6.jpg", alt: "Group adventure activity" },
  { src: "/gallery/7.jpg", alt: "Adventure sports activity" },
  { src: "/gallery/8.jpg", alt: "Educational outdoor program" },
  { src: "/gallery/9.jpg", alt: "Mountain adventure experience" },
  { src: "/gallery/10.jpg", alt: "Nature exploration program" },
  { src: "/gallery/11.jpg", alt: "Team adventure challenge" },
  { src: "/gallery/12.jpg", alt: "Outdoor educational activity" },
  { src: "/gallery/13.jpg", alt: "Adventure learning experience" },
  { src: "/gallery/14.jpg", alt: "Group outdoor activity" },
  { src: "/gallery/15.jpg", alt: "Adventure sports program" },
  { src: "/gallery/16.jpg", alt: "Educational adventure trip" },
  { src: "/gallery/17.jpg", alt: "Outdoor team building" },
  { src: "/gallery/18.jpg", alt: "Mountain exploration activity" },
  { src: "/gallery/20.jpg", alt: "Adventure learning program" },
  { src: "/gallery/21.jpg", alt: "Outdoor educational experience" },
  { src: "/gallery/22.jpg", alt: "Cultural adventure activity" },
  { src: "/gallery/23.jpg", alt: "Nature adventure program" },
  { src: "/gallery/24.jpg", alt: "Team adventure experience" },
  { src: "/gallery/25.jpg", alt: "Scenic adventure activity" },
  { src: "/gallery/26.jpg", alt: "Outdoor adventure challenge" },
  { src: "/gallery/27.jpg", alt: "Educational outdoor trip" },
  { src: "/gallery/28.jpg", alt: "Adventure sports experience" },
  { src: "/gallery/29.jpg", alt: "Group adventure program" },
  { src: "/gallery/30.jpg", alt: "Outdoor learning activity" },
  { src: "/gallery/31.jpg", alt: "Adventure education program" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-slate-800 text-stone-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button asChild variant="ghost" className="text-stone-100 hover:bg-slate-700">
              <Link href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Adventure Gallery</h1>
          <p className="text-xl font-body max-w-2xl">
            Explore the memorable moments from our adventure programs across India. Each image tells a story of
            discovery, learning, and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-body">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-slate-800 to-amber-700 text-stone-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Create Your Own Adventure Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Join thousands of students who have experienced the thrill of adventure learning with Ignite Adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200 font-body">
              <Link href="tel:+919650485880">Call Us Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-slate-800 bg-transparent font-body"
            >
              <Link href="mailto:info.igniteadventure@gmail.com">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
