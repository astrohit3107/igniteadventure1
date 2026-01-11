import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mountain, MapPin, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"

export default function DayOutPage() {
  const activities = [
    {
      title: "Rock Climbing",
      description: "Safe, supervised rock climbing experiences with professional equipment and certified instructors.",
      difficulty: "Beginner to Intermediate",
      duration: "2-3 hours",
    },
    {
      title: "Rappelling",
      description: "Thrilling descent experiences that build confidence and overcome fear of heights.",
      difficulty: "Beginner",
      duration: "1-2 hours",
    },
    {
      title: "Nature Walks & Trekking",
      description: "Educational nature walks focusing on local flora, fauna, and environmental awareness.",
      difficulty: "Easy to Moderate",
      duration: "2-4 hours",
    },
    {
      title: "Team Challenges",
      description: "Outdoor team building activities designed to improve collaboration and communication.",
      difficulty: "All Levels",
      duration: "2-3 hours",
    },
    {
      title: "Adventure Games",
      description: "Fun, engaging games that combine physical activity with problem-solving skills.",
      difficulty: "All Levels",
      duration: "1-2 hours",
    },
    {
      title: "Survival Skills",
      description: "Basic outdoor survival skills including shelter building and navigation techniques.",
      difficulty: "Intermediate",
      duration: "3-4 hours",
    },
  ]

  const locations = [
    {
      name: "Corbett National Park Area",
      distance: "240 km from Delhi",
      highlights: ["Wildlife spotting", "River activities", "Nature photography"],
      bestFor: "Nature lovers and wildlife enthusiasts",
    },
    {
      name: "Mussoorie Hills",
      distance: "280 km from Delhi",
      highlights: ["Mountain views", "Rock climbing", "Adventure sports"],
      bestFor: "Adventure seekers and mountain lovers",
    },
    {
      name: "Nainital Region",
      distance: "320 km from Delhi",
      highlights: ["Lake activities", "Hill station experience", "Scenic beauty"],
      bestFor: "Scenic beauty and water activities",
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
              Plan Your Day Out
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
                      <p className="text-2xl font-bold text-slate-800">Flexible</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium">DURATION</p>
                      <p className="text-2xl font-bold text-slate-800">Full Day</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium">BEST FOR</p>
                      <p className="text-2xl font-bold text-slate-800">All Age Groups</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Adventure Activities</h2>
            <p className="text-xl text-slate-600">Choose from our diverse range of outdoor experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">{activity.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      {activity.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {activity.duration}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Featured Locations</h2>
            <p className="text-xl text-slate-600">Carefully selected destinations near major cities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
