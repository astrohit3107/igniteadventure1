import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Users, Award, BookOpen, MapPin, CheckCircle, Phone } from "lucide-react"

export default function InternationalExposurePage() {
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

  const benefits = [
    "Global cultural exchange and immersive learning",
    "International networking opportunities with peers worldwide",
    "Internationally recognized certifications and credentials",
    "Language and cultural skill development",
    "Professional accommodation and meal arrangements",
    "24/7 supervision by trained international coordinators",
    "Comprehensive safety protocols and medical support",
    "Educational curriculum integration with international standards",
    "Photography and documentation services",
    "Certificate of international participation",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-amber-700 text-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">International Exposure Programs</h1>
            <p className="text-xl leading-relaxed mb-8">
              Expand horizons with global adventure and cultural exchange programs designed to build global perspective,
              leadership skills, and international understanding. Our curated international programs deliver
              exceptional, professionally facilitated experiences with world-class educational value.
            </p>
            <Button size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200">
              <Phone className="w-5 h-5 mr-2" />
              Explore Global Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Choose International Exposure?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-800">Global Cultural Exchange</p>
                    <p className="text-slate-600 text-sm">Immersive learning experiences with international peers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-800">International Networking</p>
                    <p className="text-slate-600 text-sm">Build connections and friendships with students worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-800">International Certifications</p>
                    <p className="text-slate-600 text-sm">Recognized credentials that enhance academic profiles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-800">Language & Cultural Skills</p>
                    <p className="text-slate-600 text-sm">Develop communication skills in multicultural settings</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-700 to-amber-600 text-stone-100">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-100">Program Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-amber-100 mb-2">Group Size</p>
                  <p className="text-lg font-bold">20-100+ students per group</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-100 mb-2">Duration</p>
                  <p className="text-lg font-bold">7-21 days international programs</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-100 mb-2">Instructor Ratio</p>
                  <p className="text-lg font-bold">20:1 child-to-instructor ratio</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-100 mb-2">Destinations</p>
                  <p className="text-lg font-bold">Southeast Asia, East Asia, Oceania</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Featured International Destinations</h2>
            <p className="text-xl text-slate-600">Carefully curated programs in world-class destinations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {internationalPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 text-stone-100">
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 font-medium mb-1">Duration</p>
                    <p className="text-slate-800 font-semibold">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium mb-2">Highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <Badge className="bg-amber-100 text-amber-800">{program.focus}</Badge>
                  </div>
                  <Button className="w-full mt-4 bg-slate-800 hover:bg-slate-700 text-stone-100">
                    <MapPin className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
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
            <p className="text-xl text-slate-600">Comprehensive global learning experience</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore the World?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take your students on a transformative international adventure and cultural exchange experience that expands
            their horizons.
          </p>
          <Button size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200">
            <Phone className="w-5 h-5 mr-2" />
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  )
}
