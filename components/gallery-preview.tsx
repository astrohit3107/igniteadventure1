import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const galleryImages = [
  {
    src: "/gallery/2.jpg",
    alt: "Adventure activity with students",
    title: "Team Adventures",
  },
  {
    src: "/gallery/3.jpg",
    alt: "Outdoor exploration and learning",
    title: "Nature Exploration",
  },
  {
    src: "/gallery/6.jpg",
    alt: "Group activities and team building",
    title: "Group Activities",
  },
  {
    src: "/gallery/8.jpg",
    alt: "Adventure sports and challenges",
    title: "Adventure Sports",
  },
  {
    src: "/gallery/12.jpg",
    alt: "Educational outdoor programs",
    title: "Educational Programs",
  },
  {
    src: "/gallery/18.jpg",
    alt: "Mountain and hiking adventures",
    title: "Mountain Adventures",
  },
  {
    src: "/gallery/22.jpg",
    alt: "Cultural and heritage exploration",
    title: "Cultural Experiences",
  },
  {
    src: "/gallery/25.jpg",
    alt: "Scenic outdoor adventures",
    title: "Scenic Adventures",
  },
]

export default function GalleryPreview() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">Adventure Gallery</h2>
          <p className="text-xl text-slate-600 font-body max-w-2xl mx-auto">
            Discover the excitement and joy of our adventure programs through these memorable moments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm font-body">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-700 font-body">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
