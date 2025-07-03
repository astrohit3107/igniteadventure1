import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"

export default function InSchoolPage() {
  const activities = [
    {
      title: "Team Building Challenges",
      description: "Interactive activities designed to improve communication and collaboration among students.",
      duration: "2-3 hours",
      participants: "20-40 students",
    },
    {
      title: "Leadership Development",
      description: "Activities focused on developing leadership skills and decision-making abilities.",
      duration: "3-4 hours",
      participants: "15-30 students",
    },
    {
      title: "Problem Solving Games",
      description: "Engaging puzzles and challenges that promote critical thinking and creativity.",
      duration: "2-3 hours",
      participants: "25-50 students",
    },
    {
      title: "Trust Building Exercises",
      description: "Activities designed to build trust and strengthen relationships within the group.",
      duration: "1-2 hours",
      participants: "20-35 students",
    },
    {
      title: "Communication Workshops",
      description: "Interactive sessions to improve verbal and non-verbal communication skills.",
      duration: "2-3 hours",
      participants: "20-40 students",
    },
    {
      title: "Adventure Simulations",
      description: "Indoor adventure scenarios that challenge students in a safe environment.",
      duration: "3-4 hours",
      participants: "15-25 students",
    },
  ]

  const benefits = [
    "No travel required - activities conducted on your school premises",
    "Flexible scheduling to fit your school timetable",
    "Age-appropriate activities for different grade levels",
    "Professional facilitators with educational background",
    "All equipment and materials provided",
    "Customizable programs based on your objectives",
    "Safe and supervised environment",
    "Immediate application of learning in familiar setting",
  ]

  const packages = [
    {
      name: "Half Day Program",
      duration: "4 hours",
      participants: "Up to 30 students",
      activities: "3-4 activities",
      price: "₹15,000",
      features: [
        "Team building activities",
        "Leadership challenges",
        "Problem solving games",
        "Professional facilitators",
        "All equipment included",
      ],
    },
    {
      name: "Full Day Program",
      duration: "8 hours",
      participants: "Up to 50 students",
      activities: "6-8 activities",
      price: "₹25,000",
      features: [
        "Complete adventure experience",
        "Multiple team challenges",
        "Leadership development",
        "Communication workshops",
        "Lunch break coordination",
        "Certificate of participation",
      ],
      popular: true,
    },
    {
      name: "Multi-Day Program",
      duration: "2-3 days",
      participants: "Up to 100 students",
      activities: "10+ activities",
      price: "₹40,000",
      features: [
        "Comprehensive skill development",
        "Progressive difficulty levels",
        "Individual & group assessments",
        "Teacher training component",
        "Detailed progress reports",
        "Follow-up sessions",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-amber-700 text-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">In-School Adventure Programs</h1>
            <p className="text-xl leading-relaxed mb-8 font-body">
              Bring the excitement of adventure learning directly to your school campus with our engaging, educational
              programs designed to build teamwork, leadership, and confidence.
            </p>
            <Button asChild size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200 font-body">
              <Link href="tel:+919650485880">
                <Phone className="w-5 h-5 mr-2" />
                Book Your Program
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-slate-800">
                Why Choose In-School Programs?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 font-body">
                Our in-school adventure programs are perfect for schools looking to provide students with transformative
                learning experiences without the logistics of travel. We bring professional-grade adventure activities
                directly to your campus.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 font-body">
                These programs are designed to complement your curriculum while developing essential life skills like
                teamwork, communication, problem-solving, and leadership in a fun, engaging environment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-700 font-heading">500+</div>
                  <div className="text-sm text-slate-600 font-body">Schools Served</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-800 font-heading">15,000+</div>
                  <div className="text-sm text-slate-600 font-body">Students Impacted</div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Students participating in in-school adventure activities"
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">Program Activities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-body">
              Our carefully designed activities focus on skill development while ensuring maximum engagement and fun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 font-heading">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 font-body">{activity.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-slate-500 font-body">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {activity.duration}
                    </div>
                    <div className="flex items-center text-sm text-slate-500 font-body">
                      <Users className="w-4 h-4 mr-2" />
                      Participants: {activity.participants}
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">Program Benefits</h2>
              <p className="text-xl text-slate-600 font-body">
                Advantages of choosing our in-school adventure programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-amber-700 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 font-body">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">Program Packages</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-body">
              Choose the perfect package that fits your school's needs and schedule
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-shadow bg-white relative ${
                  pkg.popular ? "ring-2 ring-amber-700" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-amber-700 text-stone-100 font-body">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-800 font-heading">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-amber-700 font-heading">{pkg.price}</div>
                  <div className="space-y-1 text-sm text-slate-600 font-body">
                    <div>Duration: {pkg.duration}</div>
                    <div>Participants: {pkg.participants}</div>
                    <div>Activities: {pkg.activities}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-slate-800 hover:bg-slate-700 font-body">
                    <Link href="tel:+919650485880">Book This Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-800 to-amber-700 text-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your School Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Bring adventure and learning directly to your campus. Contact us today to discuss how we can customize a
            program that fits your school's unique needs and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200 font-body">
              <Link href="tel:+919650485880">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 96504 85880
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-slate-800 bg-transparent font-body"
            >
              <Link href="mailto:info.igniteadventure@gmail.com">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
