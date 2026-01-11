import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"

export default function InSchoolPage() {
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
  ]

  const benefits = [
    "First-of-its-Kind Experiential Learning: Uniquely combines life skills education with sports for hands-on learning",
    "Increased Emotional Intelligence: Students become more self-aware and sensitive to their surroundings",
    "Certified and Trained Instructors: Technically and behaviorally trained professionals ensure effective instruction",
    "Enhanced Confidence and Self-Esteem: Overcoming fears in a protected environment boosts self-belief",
    "Balanced Gender Representation: Healthy mix of female instructors for comfort and specific needs",
    "Refined Leadership Skills: Students leverage team member strengths for effective collaboration",
    "Uninterrupted Supervision: Camps meticulously designed for vigilant supervision at all times",
    "Improved Focus and Determination: Students develop resilience by pushing beyond comfort zones",
    "100% Safety Record: UIAA-tested and certified equipment ensures flawless safety",
    "Boosted Problem-Solving Abilities: Challenging activities foster creative thinking and decision-making",
    "Personalized Learning Approaches: Activities tailored to different learning styles",
    "Strengthened Social Skills: Collaborative tasks teach accountability and teamwork",
    "Holistic Development Focus: Structured to promote physical, emotional, and cognitive growth",
    "Heightened Adaptability: Exposure to diverse situations enhances flexibility and adjustment abilities",
  ]

  const packages = [
    {
      name: "In-School 9 AM to 1 PM",
      duration: "4 hours",
      participants: "300 minimum",
      activities: "13-15 Activities (As per age groups)",
      ratio: "20:1",
      schedule: [
        { time: "09:00 am", activity: "Briefing and Group Distribution" },
        { time: "09:15 am", activity: "Adventure Activity Starts" },
        { time: "10:30 am", activity: "Break time" },
        { time: "11:00 am", activity: "Adventure Activity Restarts" },
        { time: "01:00 pm", activity: "Camp Concludes" },
      ],
    },
    {
      name: "In-School 9 AM to 4 PM",
      duration: "7 hours",
      participants: "300 minimum",
      activities: "13-15 Activities (As per age groups)",
      ratio: "20:1",
      schedule: [
        { time: "09:00 am", activity: "Briefing and Group Distribution" },
        { time: "09:15 am", activity: "Adventure Activity Starts" },
        { time: "10:00 am", activity: "Break time & Mid-Day Meal*" },
        { time: "10:30 am", activity: "Adventure Activity Restart" },
        { time: "01:00 pm", activity: "Lunch*" },
        { time: "02:00 pm", activity: "Magic Show / DJ & Camp Games" },
        { time: "03:30 pm", activity: "Snack*" },
        { time: "04:00 pm", activity: "Camp Concludes" },
      ],
      popular: true,
    },
    {
      name: "Overnight Camp",
      duration: "24 hours",
      participants: "300 minimum",
      activities: "13-15 Activities (As per age groups)",
      ratio: "20:1",
      schedule: [
        { time: "01:00 pm", activity: "Assembly and Group Distribution" },
        { time: "01:15 pm", activity: "Activity Begins" },
        { time: "01:30 pm", activity: "Lunch Time" },
        { time: "02:30 pm", activity: "More Activities" },
        { time: "04:30 pm", activity: "Snack Time" },
        { time: "05:30 pm", activity: "Camp Games & Skill Development" },
        { time: "07:00 pm", activity: "Campfire & Music" },
        { time: "08:30 pm", activity: "Dinner" },
        { time: "10:00 pm", activity: "Astronomy Session" },
        { time: "11:00 pm", activity: "Lights Off" },
        { time: "06:00 am", activity: "Wake Up Call" },
        { time: "06:30 am", activity: "Exercise / Yoga" },
        { time: "08:00 am", activity: "Breakfast" },
        { time: "09:30 am", activity: "Camp Game" },
        { time: "11:00 am", activity: "Magic Show/Music" },
        { time: "01:00 pm", activity: "Lunch" },
        { time: "02:00 pm", activity: "Camp Dispersal" },
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
                Our In-School Day Programs bring curated adventure learning directly to your campus delivering
                exceptional, professionally facilitated experiences without the need for travel.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 font-body">
                Designed to elevate your curriculum, these programs blend premium adventure activities with essential
                life skill development, creating an immersive environment where students learn, lead, and grow with
                confidence.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 font-body">
                A seamless, safe, and enriching experience crafted to make learning truly inspiring.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-700 font-heading">110+</div>
                  <div className="text-sm text-slate-600 font-body">Schools Served</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-800 font-heading">45,000+</div>
                  <div className="text-sm text-slate-600 font-body">Students Impacted</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/gallery/10.jpg"
                alt="In-School Adventure Activity"
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover h-full"
              />
              <Image
                src="/gallery/4.jpg"
                alt="Team Building Activity"
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover h-full"
              />
              <Image
                src="/gallery/3.jpg"
                alt="Leadership Activity"
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover h-full"
              />
              <Image
                src="/gallery/9.jpg"
                alt="Group Adventure Activity"
                width={300}
                height={300}
                className="rounded-lg shadow-lg object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">15+ Activities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-body">
              Our carefully designed activities focus on skill development while ensuring maximum engagement and fun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-6">
                  <p className="text-lg font-semibold text-slate-800 font-heading text-center">{activity.title}</p>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">Our In-house Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-body">
              Choose the perfect program that fits your school's needs and schedule
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
                  <div className="space-y-1 text-sm text-slate-600 font-body pt-4">
                    <div>Duration: {pkg.duration}</div>
                    <div>Participants: {pkg.participants}</div>
                    <div>Activities: {pkg.activities}</div>
                    <div className="font-semibold text-slate-700 pt-2">Instructor Ratio: {pkg.ratio}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-slate-800 text-sm mb-3">Schedule:</h4>
                    {pkg.schedule.map((item, idx) => (
                      <div key={idx} className="text-sm text-slate-700 font-body">
                        <span className="font-semibold text-amber-700">{item.time}</span> - {item.activity}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-slate-800 hover:bg-slate-700 font-body">
                    <Link href="tel:+919650485880">Book This Program</Link>
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
