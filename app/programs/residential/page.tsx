import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, CheckCircle, Phone, Telescope } from "lucide-react"

export default function ResidentialPage() {
  const indianDestinations = [
    {
      name: "Manali, Himachal Pradesh",
      duration: "4-6 days",
      highlights: ["Snow activities", "Adventure sports", "Cultural experiences", "Mountain trekking"],
      bestSeason: "March-June, Sept-Nov",
      specialFeature: "High altitude adventure",
    },
    {
      name: "Mussoorie, Uttarakhand",
      duration: "3-5 days",
      highlights: ["Hill station charm", "Nature walks", "Adventure activities", "Colonial heritage"],
      bestSeason: "March-June, Sept-Nov",
      specialFeature: "Queen of Hills experience",
    },
    {
      name: "Nainital, Uttarakhand",
      duration: "3-4 days",
      highlights: ["Lake activities", "Astronomy programs", "Nature exploration", "Boating"],
      bestSeason: "March-June, Sept-Nov",
      specialFeature: "Lake district adventure",
    },
    {
      name: "Corbett, Uttarakhand",
      duration: "3-4 days",
      highlights: ["Wildlife safari", "Nature photography", "River activities", "Conservation learning"],
      bestSeason: "Nov-June",
      specialFeature: "Wildlife conservation focus",
    },
    {
      name: "Shimla, Himachal Pradesh",
      duration: "4-5 days",
      highlights: ["Colonial architecture", "Toy train ride", "Adventure sports", "Cultural immersion"],
      bestSeason: "March-June, Sept-Nov",
      specialFeature: "Heritage and adventure blend",
    },
    {
      name: "Barot, Himachal Pradesh",
      duration: "3-4 days",
      highlights: ["Pristine nature", "Trout fishing", "Trekking", "Astronomy programs"],
      bestSeason: "April-June, Sept-Nov",
      specialFeature: "Dark sky astronomy",
    },
    {
      name: "Amritsar, Punjab",
      duration: "2-3 days",
      highlights: ["Golden Temple visits", "Cultural heritage", "Spiritual experiences", "Heritage walks"],
      bestSeason: "Oct-March",
      specialFeature: "Cultural and spiritual immersion",
    },
    {
      name: "Jaipur, Rajasthan",
      duration: "3-4 days",
      highlights: ["City palace tours", "Fort exploration", "Desert activities", "Traditional crafts"],
      bestSeason: "Oct-March",
      specialFeature: "Pink City adventure",
    },
    {
      name: "Kerala Backwaters",
      duration: "4-5 days",
      highlights: ["Houseboat cruises", "Backwater exploration", "Ayurveda wellness", "Coastal beauty"],
      bestSeason: "Sept-March",
      specialFeature: "Tropical paradise experience",
    },
    {
      name: "Udaipur-Kumbhalgarh, Rajasthan",
      duration: "3-4 days",
      highlights: ["Fort trekking", "Palace visits", "Lake activities", "Historical sites"],
      bestSeason: "Oct-March",
      specialFeature: "Rajasthani heritage exploration",
    },
    {
      name: "Jaisalmer, Rajasthan",
      duration: "3-4 days",
      highlights: ["Desert safari", "Fort exploration", "Camel trekking", "Dune camping"],
      bestSeason: "Oct-March",
      specialFeature: "Golden desert adventure",
    },
    {
      name: "Agra, Uttar Pradesh",
      duration: "2-3 days",
      highlights: ["Taj Mahal tour", "Historical monuments", "Photography sessions", "Cultural learning"],
      bestSeason: "Oct-March",
      specialFeature: "World heritage exploration",
    },
    {
      name: "Ooty, Tamil Nadu",
      duration: "3-4 days",
      highlights: ["Hill station trekking", "Tea garden tours", "Nature walks", "Mountain biking"],
      bestSeason: "April-June, Sept-Nov",
      specialFeature: "Nilgiri mountain adventure",
    },
    {
      name: "Darjeeling, West Bengal",
      duration: "4-5 days",
      highlights: ["Tea plantation tours", "Mountain trekking", "Sunrise views", "Local culture"],
      bestSeason: "March-May, Sept-Nov",
      specialFeature: "Himalayan tea garden experience",
    },
    {
      name: "Mumbai-Lonavla, Maharashtra",
      duration: "2-3 days",
      highlights: ["Rock climbing", "Fort trekking", "Waterfall exploration", "Adventure sports"],
      bestSeason: "June-Sept",
      specialFeature: "Western Ghats adventure",
    },
    {
      name: "Delhi Heritage",
      duration: "2-3 days",
      highlights: ["Historical monuments", "Museum tours", "Cultural immersion", "City exploration"],
      bestSeason: "Oct-March",
      specialFeature: "India's capital heritage",
    },
  ]

  const astronomyPrograms = [
    {
      title: "Stargazing Expeditions",
      description: "Professional telescope observations of planets, stars, and deep-sky objects",
      duration: "2-3 nights",
      equipment: "Professional telescopes and astronomy tools",
    },
    {
      title: "Astrophotography Workshops",
      description: "Learn to capture the beauty of the night sky with guided photography sessions",
      duration: "2-4 nights",
      equipment: "DSLR cameras and specialized lenses",
    },
    {
      title: "Space Science Education",
      description: "Interactive sessions on space exploration, planetary science, and astronomy",
      duration: "3-5 days",
      equipment: "Educational materials and planetarium shows",
    },
  ]

  const benefits = [
    "Multi-day immersive learning experiences",
    "Professional accommodation and meal arrangements",
    "24/7 supervision by trained staff and teachers",
    "Comprehensive safety protocols and medical support",
    "Educational curriculum integration",
    "Astronomy programs and night-time activities",
    "Cultural exchange opportunities",
    "Wildlife and nature conservation focus",
    "Photography and documentation services",
    "Certificate of participation",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-amber-700 text-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Residential Adventure Trips</h1>
            <p className="text-xl leading-relaxed mb-8">
              Experience multi-day educational adventures across India's most stunning destinations. Our residential
              trips combine adventure activities, cultural immersion, and astronomy programs for transformative learning
              experiences.
            </p>
            <Button size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200">
              <Phone className="w-5 h-5 mr-2" />
              Plan Your Trip
            </Button>
          </div>
        </div>
      </section>

      {/* India Destinations */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Featured Destinations in India</h2>
            <p className="text-xl text-slate-600">Explore the most beautiful locations across India</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianDestinations.map((destination, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-700 to-amber-600 text-stone-100">
                  <CardTitle className="text-xl">{destination.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 font-medium mb-1">Duration</p>
                    <p className="text-slate-800 font-semibold">{destination.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium mb-2">Highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium mb-1">Best Season</p>
                    <p className="text-slate-800">{destination.bestSeason}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <Badge className="bg-amber-100 text-amber-800">{destination.specialFeature}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Astronomy Programs */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Telescope className="h-16 w-16 mx-auto mb-4 text-amber-700" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Astronomy Programs</h2>
            <p className="text-xl text-slate-600">Discover the wonders of the night sky</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {astronomyPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader className="bg-slate-800 text-stone-100">
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-slate-700">{program.description}</p>
                  <div>
                    <p className="text-sm text-slate-600 font-medium mb-1">Duration</p>
                    <p className="text-slate-800">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium mb-1">Equipment</p>
                    <p className="text-slate-800">{program.equipment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Program Benefits</h2>
            <p className="text-xl text-slate-600">Comprehensive experience tailored for educational growth</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-800 to-amber-700 text-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Residential Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to customize a residential trip that perfectly aligns with your school's objectives and student
            interests.
          </p>
          <Button size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200">
            <Phone className="w-5 h-5 mr-2" />
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  )
}
