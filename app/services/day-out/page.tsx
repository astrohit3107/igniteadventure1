import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mountain, Clock, MapPin, CheckCircle, Phone, Camera } from "lucide-react"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Day-Out Adventure Programs</h1>
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

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Adventure Beyond Classroom Walls</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our day-out adventure programs take students to carefully selected natural locations where they can
                experience the excitement of outdoor activities while learning about nature, teamwork, and personal
                courage.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Each location is chosen for its safety, accessibility, and educational value, ensuring students have an
                enriching experience that complements their academic learning with real-world applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-700">200+</div>
                  <div className="text-sm text-slate-600">Day Trips Organized</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-800">8,000+</div>
                  <div className="text-sm text-slate-600">Students Participated</div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Students enjoying day-out adventure activities"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Adventure Activities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Exciting outdoor activities designed to challenge, educate, and inspire students in natural settings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{activity.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Badge variant="secondary" className="mr-2 bg-amber-100 text-amber-800">
                        {activity.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {activity.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Popular Destinations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Carefully selected locations that offer the perfect blend of adventure, safety, and natural beauty
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{location.name}</CardTitle>
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {location.distance}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-slate-800">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-amber-200 text-amber-800">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>Best for:</strong> {location.bestFor}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Why Choose Day-Out Programs?</h2>
              <p className="text-xl text-slate-600">Benefits that make our day-out adventures perfect for schools</p>
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Sample Day Itinerary</h2>
              <p className="text-xl text-slate-600">A typical day-out adventure program schedule</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg border border-stone-200">
                <div className="bg-amber-100 text-amber-700 rounded-full p-2 font-bold text-sm min-w-[60px] text-center">
                  7:00 AM
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Departure from School</h3>
                  <p className="text-slate-600">
                    Comfortable bus journey with safety briefing and activity introduction
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg border border-stone-200">
                <div className="bg-slate-100 text-slate-800 rounded-full p-2 font-bold text-sm min-w-[60px] text-center">
                  10:00 AM
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Arrival & Welcome</h3>
                  <p className="text-slate-600">Site orientation, safety briefing, and equipment distribution</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg border border-stone-200">
                <div className="bg-amber-100 text-amber-700 rounded-full p-2 font-bold text-sm min-w-[60px] text-center">
                  10:30 AM
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Adventure Activities Session 1</h3>
                  <p className="text-slate-600">Rock climbing, rappelling, or team challenges based on location</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg border border-stone-200">
                <div className="bg-slate-100 text-slate-800 rounded-full p-2 font-bold text-sm min-w-[60px] text-center">
                  1:00 PM
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Lunch Break</h3>
                  <p className="text-slate-600">Packed lunch in scenic outdoor setting with rest and relaxation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg border border-stone-200">
                <div className="bg-amber-100 text-amber-700 rounded-full p-2 font-bold text-sm min-w-[60px] text-center">
                  2:00 PM
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Adventure Activities Session 2</h3>
                  <p className="text-slate-600">Nature walks, survival skills, or adventure games</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg border border-stone-200">
                <div className="bg-slate-100 text-slate-800 rounded-full p-2 font-bold text-sm min-w-[60px] text-center">
                  4:30 PM
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Reflection & Departure</h3>
                  <p className="text-slate-600">
                    Group reflection, certificate distribution, and journey back to school
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg border border-stone-200">
                <div className="bg-amber-100 text-amber-700 rounded-full p-2 font-bold text-sm min-w-[60px] text-center">
                  7:00 PM
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">Return to School</h3>
                  <p className="text-slate-600">Safe arrival back at school with memories to last a lifetime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-800 to-amber-700 text-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Unforgettable Day Out?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give your students the gift of adventure and learning in nature's classroom. Contact us to plan the perfect
            day-out experience for your school.
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
              <Camera className="w-5 h-5 mr-2" />
              View Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
