import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, CheckCircle, Phone, Telescope, Globe } from "lucide-react"
import Image from "next/image"

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
  ]

  const internationalPrograms = [
    {
      name: "Singapore Educational Tour",
      duration: "5-7 days",
      highlights: ["Science museums", "Cultural diversity", "Modern architecture", "Educational parks"],
      focus: "STEM and multicultural learning",
    },
    {
      name: "Japan Cultural Exchange",
      duration: "7-10 days",
      highlights: ["Traditional culture", "Technology centers", "Educational institutions", "Cultural immersion"],
      focus: "Technology and tradition blend",
    },
    {
      name: "Australia Adventure Program",
      duration: "10-14 days",
      highlights: ["Wildlife encounters", "Adventure activities", "Educational tours", "Cultural exchange"],
      focus: "Wildlife and adventure learning",
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
    "Cultural and environmental awareness programs",
    "Adventure activities with certified instructors",
    "Astronomy programs with professional equipment",
    "International exposure and global perspective",
    "Detailed itineraries and pre-trip orientations",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-amber-700 text-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <MapPin className="h-12 w-12" />
              <Telescope className="h-12 w-12" />
              <Globe className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Residential School Trips</h1>
            <p className="text-xl leading-relaxed mb-8">
              Embark on transformative multi-day educational adventures across India and international destinations.
              Experience diverse cultures, stunning landscapes, and cutting-edge astronomy programs that expand horizons
              and create lifelong memories.
            </p>
            <Button size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200">
              <Phone className="w-5 h-5 mr-2" />
              Plan Your Trip
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Beyond Boundaries Learning</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our residential school trips are carefully designed educational journeys that take students beyond their
                familiar environment to explore new cultures, landscapes, and learning opportunities across India and
                around the world.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Each trip combines adventure, education, and cultural immersion with our signature astronomy programs,
                providing students with a holistic learning experience that broadens their perspective and builds
                confidence.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-700">150+</div>
                  <div className="text-sm text-slate-600">Trips Organized</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-800">12,000+</div>
                  <div className="text-sm text-slate-600">Students Traveled</div>
                </div>
                <div className="text-center p-4 bg-stone-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-700">15+</div>
                  <div className="text-sm text-slate-600">Destinations</div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Students on residential trip adventure"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Indian Destinations */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">India Destinations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore India's diverse landscapes and rich cultural heritage through our carefully curated destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianDestinations.map((destination, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center text-slate-800">
                    <MapPin className="w-5 h-5 mr-2 text-amber-700" />
                    {destination.name}
                  </CardTitle>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {destination.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-slate-800">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-amber-200 text-amber-800">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-slate-600">
                      <strong>Best Season:</strong> {destination.bestSeason}
                    </div>
                    <div className="text-amber-700 font-medium">✨ {destination.specialFeature}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Programs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">International Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expand global perspectives with our international educational tours and cultural exchange programs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {internationalPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center text-slate-800">
                    <Globe className="w-5 h-5 mr-2 text-amber-700" />
                    {program.name}
                  </CardTitle>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {program.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-slate-800">Program Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>Focus Area:</strong> {program.focus}
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
            <Telescope className="h-16 w-16 mx-auto mb-6 text-amber-700" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Astronomy Adventure Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the wonders of the universe with our specialized astronomy programs featuring professional
              equipment and expert guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {astronomyPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{program.title}</CardTitle>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {program.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{program.description}</p>
                  <div className="text-sm text-slate-600">
                    <strong>Equipment:</strong> {program.equipment}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Program Benefits</h2>
              <p className="text-xl text-slate-600">Comprehensive advantages of our residential school trip programs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-700 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Sample 5-Day Itinerary</h2>
              <p className="text-xl text-slate-600">
                Example schedule for a Manali residential trip with astronomy program
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="flex items-center text-slate-800">
                    <Badge className="mr-3 bg-amber-700 text-stone-100">Day 1</Badge>
                    Journey & Arrival
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-slate-700">
                    <li>• Early morning departure from school</li>
                    <li>• Scenic journey with educational stops</li>
                    <li>• Arrival and check-in at accommodation</li>
                    <li>• Welcome dinner and orientation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="bg-slate-50">
                  <CardTitle className="flex items-center text-slate-800">
                    <Badge className="mr-3 bg-slate-800 text-stone-100">Day 2</Badge>
                    Adventure Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-slate-700">
                    <li>• Morning trek to scenic viewpoints</li>
                    <li>• Adventure sports (rock climbing, rappelling)</li>
                    <li>• Cultural interaction with local communities</li>
                    <li>• Evening astronomy session preparation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="flex items-center text-slate-800">
                    <Badge className="mr-3 bg-amber-700 text-stone-100">Day 3</Badge>
                    Astronomy Night
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-slate-700">
                    <li>• Morning nature exploration and photography</li>
                    <li>• Afternoon astronomy theory sessions</li>
                    <li>• Professional stargazing with telescopes</li>
                    <li>• Astrophotography workshop</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="bg-slate-50">
                  <CardTitle className="flex items-center text-slate-800">
                    <Badge className="mr-3 bg-slate-800 text-stone-100">Day 4</Badge>
                    Cultural Immersion
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-slate-700">
                    <li>• Visit to local temples and heritage sites</li>
                    <li>• Traditional craft workshops</li>
                    <li>• Local cuisine experience</li>
                    <li>• Cultural performance and bonfire</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="flex items-center text-slate-800">
                    <Badge className="mr-3 bg-amber-700 text-stone-100">Day 5</Badge>
                    Reflection & Return
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-slate-700">
                    <li>• Morning reflection and sharing session</li>
                    <li>• Certificate distribution ceremony</li>
                    <li>• Departure and journey back to school</li>
                    <li>• Evening arrival with memories to cherish</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-800 to-amber-700 text-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore the World?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give your students the opportunity to explore new horizons, cultures, and the wonders of the universe.
            Contact us to plan an unforgettable residential trip experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200">
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-slate-800 bg-transparent"
            >
              <Telescope className="w-5 h-5 mr-2" />
              Astronomy Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
