import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Users, MapPin, Phone, Mail, Globe, Award } from "lucide-react"
import Link from "next/link"
import TestimonialsSlider from "@/components/testimonials-slider"
import GalleryPreview from "@/components/gallery-preview"
import HomepageHero from "@/components/homepage-hero"

export default function HomePage() {
  const services = [
    {
      title: "In-School Adventure Camps",
      description:
        "Bring adventure directly to your school with our engaging on-campus programs designed to build teamwork and confidence.",
      features: [
        "15+ Team Building Activities",
        "Leadership Development Programs",
        "Problem Solving Challenges",
        "20:1 Child-Instructor Ratio",
      ],
      icon: Users,
      href: "/programs/in-school",
      color: "bg-amber-700",
    },
    {
      title: "Day-Out Adventure Camps",
      description: "Exciting single-day adventure experiences at carefully selected locations near your school.",
      features: ["Rock Climbing", "Rappelling", "Nature Walks", "Adventure Games"],
      icon: Mountain,
      href: "/programs/day-out",
      color: "bg-slate-800",
    },
    {
      title: "Residential Adventure Trips",
      description:
        "Multi-day educational adventures across India and international destinations with astronomy programs.",
      features: ["India Destinations", "International Trips", "Astronomy Programs", "Cultural Experiences"],
      icon: MapPin,
      href: "/programs/residential",
      color: "bg-amber-700",
    },
    {
      title: "International Exposure",
      description: "Global adventure experiences combining travel, cultural immersion, and skill development.",
      features: ["International Destinations", "Cross-cultural Learning", "Global Perspectives", "Adventure Sports"],
      icon: Globe,
      href: "/programs/international-exposure",
      color: "bg-slate-700",
    },
    {
      title: "IAYP & CAS Programs",
      description:
        "Award-focused programs aligned with International Awards for Young People and Creativity, Action, Service.",
      features: ["Award Development", "Skill Building", "Leadership Tracks", "Certification"],
      icon: Award,
      href: "/programs/iayp-cas",
      color: "bg-amber-600",
    },
  ]

  const indianLocations = [
    "Mussoorie",
    "Corbett",
    "Nainital",
    "Barot",
    "Manali",
    "Shimla",
    "Amritsar",
    "Jaipur",
    "Kerala",
    "Udaipur-Kumbhalgarh",
    "Jaisalmer",
    "Agra",
    "Delhi",
    "Ooty",
    "Darjeeling",
    "Mumbai-Lonavla",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - New Homepage Hero */}
      <HomepageHero />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">Our Adventure Programs</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-body">
              We offer five distinct types of adventure programs, each designed to provide unique learning experiences
              and unforgettable memories for students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-stone-100" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-slate-800 font-heading">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600 font-body">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                          <span className="text-sm text-slate-700 font-body">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-slate-800 hover:bg-slate-700 font-body">
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">
              Our Destinations in India
            </h2>
            <p className="text-xl text-slate-600 font-body">
              Explore breathtaking locations across India with our residential school trip programs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {indianLocations.map((location, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-lg py-2 px-4 bg-amber-100 text-amber-800 hover:bg-amber-200 font-body"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {location}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">
              What Schools Say About Us
            </h2>
            <p className="text-xl text-slate-600 font-body">
              Hear from educators and students who have experienced our adventure programs
            </p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-800 to-amber-700 text-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Ignite Adventure in Your School?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Contact us today to discuss how we can create an unforgettable adventure experience tailored to your
            school's needs and curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200 font-body">
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
                Send Inquiry
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
