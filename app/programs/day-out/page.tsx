import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mountain, MapPin, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"

export default function DayOutPage() {
  const activities = [
    { title: "Alpha Cross" },
    { title: "Burma Bridge" },
    { title: "Commando Bridge" },
    { title: "Commando Crawl" },
    { title: "Commando Net" },
    { title: "Double Rope Bridge" },
    { title: "Diagonal Rope Ladder" },
    { title: "Body Zorb" },
    { title: "Rope Ladder Climbing" },
    { title: "Sport Climbing" },
    { title: "Three Tyre Hurdle" },
    { title: "Tyre Swing" },
    { title: "Zipline" },
    { title: "Laser Beam" },
    { title: "Minefield" },
    { title: "Running Bungee" },
    { title: "Trampoline" },
    { title: "Bouncy" },
    { title: "Zorb Roller" },
    { title: "Tug of War" },
    { title: "Dart Game" },
  ]

  const locations = [
    {
      name: "Jaipur",
      distance: "Local destination",
      highlights: ["Urban adventure parks", "Rock climbing", "Team building activities"],
      bestFor: "City-based students and team bonding",
    },
    {
      name: "Delhi NCR",
      distance: "Local to nearby areas",
      highlights: ["Outdoor adventure zones", "Adventure sports", "Nature exploration"],
      bestFor: "Delhi region schools and outdoor enthusiasts",
    },
  ]

  const benefits = [
    "Single day program - no overnight stay required",
    "Professional safety equipment and certified instructors",
    "Educational component integrated with adventure activities",
    "Age-appropriate activities for different grade levels",
    "Transportation can be arranged from school",
    "Flexible timing to accommodate school schedules",
    "Photo and video documentation of the experience",
    "Certificate of participation for all students",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-amber-700 text-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mountain className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Day-Out Adventure Camps</h1>
            <p className="text-xl leading-relaxed mb-8">
              Experience the thrill of outdoor adventures with our carefully planned single-day programs at stunning
              natural locations near your city. Perfect for schools seeking memorable experiences without overnight
              commitments.
            </p>
            <Button size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/gallery/5.jpg"
                alt="Day-out adventure activity"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <Image
                src="/gallery/15.jpg"
                alt="Outdoor adventure"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Choose Day-Out Adventure Camps?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="bg-amber-700 text-stone-100">
                  <CardTitle>Perfect For Your School</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-600 font-medium">GROUP SIZE</p>
                      <p className="text-2xl font-bold text-slate-800">25-700</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium">DURATION</p>
                      <p className="text-2xl font-bold text-slate-800">9:00 A.M - 4:00 P.M</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium">BEST FOR</p>
                      <p className="text-2xl font-bold text-slate-800">Grade-1 to Grade-12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section - Duplicated from In-School page */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">20+ Activities</h2>
            <p className="text-xl text-slate-600">
              Carefully curated adventure activities designed for different age groups and learning objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-slate-800">{activity.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Locations Section - Replaced with Jaipur and Delhi NCR only */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Featured Locations</h2>
            <p className="text-xl text-slate-600">Carefully selected destinations near major cities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-700" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 font-medium">Distance</p>
                    <p className="text-slate-800">{location.distance}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium mb-2">Highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {location.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-amber-100 text-amber-800">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">Best For</p>
                    <p className="text-slate-800">{location.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-800 to-amber-700 text-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to plan the perfect day-out adventure for your students.
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
