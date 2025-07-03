import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPreview() {
  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Students rock climbing during adventure program",
      title: "Rock Climbing Adventure",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Group photo at Manali residential trip",
      title: "Manali Residential Trip",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Astronomy program stargazing session",
      title: "Astronomy Program",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Team building activities on school campus",
      title: "In-School Team Building",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Nature walk and exploration",
      title: "Nature Exploration",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Adventure sports and activities",
      title: "Adventure Sports",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Adventure Gallery</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Capture the excitement and joy of our adventure programs through these memorable moments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-stone-100 text-center">
                  <Camera className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-700">
            <Link href="/gallery">
              <Camera className="w-5 h-5 mr-2" />
              View Full Gallery
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
