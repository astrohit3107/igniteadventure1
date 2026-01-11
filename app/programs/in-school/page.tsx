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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">In-School Adventure Camps</h1>
            <p className="text-xl leading-relaxed mb-8">
              Our In-School Day Programs bring curated adventure learning directly to your campus delivering
              exceptional, professionally facilitated experiences without the need for travel. Designed to elevate your
              curriculum, these programs blend premium adventure activities with essential life skill development,
              creating an immersive environment where students learn, lead, and grow with confidence. A seamless, safe,
              and enriching experience crafted to make learning truly inspiring.
            </p>
            <Button size="lg" className="bg-stone-100 text-slate-800 hover:bg-stone-200">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Campus Program
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
                src="/gallery/10.jpg"
                alt="In-school adventure activity"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <Image
                src="/gallery/4.jpg"
                alt="Team building activity"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Why Choose In-School Programs?</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our In-School Day Programs bring curated adventure learning directly to your campus delivering
              exceptional, professionally facilitated experiences without the need for travel. Designed to elevate your
              curriculum, these programs blend premium adventure activities with essential life skill development,
              creating an immersive environment where students learn, lead, and grow with confidence. A seamless, safe,
              and enriching experience crafted to make learning truly inspiring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-700 mb-4">110+</div>
              <p className="text-xl text-slate-700">Schools Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-700 mb-4">45,000+</div>
              <p className="text-xl text-slate-700">Students Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-700 mb-4">20:1</div>
              <p className="text-xl text-slate-700">Child-Instructor Ratio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">15+ Activities</h2>
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

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Program Benefits</h2>
            <p className="text-xl text-slate-600">Comprehensive growth and development through adventure learning</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our In-house Programs</h2>
            <p className="text-xl text-slate-600">Choose the package that best fits your school's needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg overflow-hidden ${pkg.popular ? "ring-2 ring-amber-700 lg:scale-105" : ""}`}
              >
                <CardHeader className={`${pkg.popular ? "bg-amber-700" : "bg-slate-800"} text-stone-100`}>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  {pkg.popular && <Badge className="w-fit mt-2 bg-stone-100 text-amber-700">Most Popular</Badge>}
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Duration</p>
                      <p className="text-lg font-semibold text-slate-800">{pkg.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Minimum Participants</p>
                      <p className="text-lg font-semibold text-slate-800">{pkg.participants}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Activities</p>
                      <p className="text-lg font-semibold text-slate-800">{pkg.activities}</p>
                    </div>

                    <div className="border-t pt-6">
                      <p className="text-sm font-semibold text-slate-800 mb-4">Schedule</p>
                      <div className="space-y-3">
                        {pkg.schedule.map((item, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-sm font-medium text-amber-700">{item.time}</span>
                            <span className="text-sm text-slate-700">{item.activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-amber-700 hover:bg-amber-600 text-stone-100">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
