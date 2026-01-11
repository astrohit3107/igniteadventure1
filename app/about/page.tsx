import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Shield, Heart, Target, Eye } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize the safety and well-being of every student in all our programs with certified instructors and comprehensive safety protocols.",
    },
    {
      icon: Heart,
      title: "Passion for Adventure",
      description:
        "Our team is passionate about creating transformative experiences that inspire students to explore, learn, and grow beyond their comfort zones.",
    },
    {
      icon: Users,
      title: "Educational Excellence",
      description:
        "We design programs that complement academic learning with hands-on experiences, fostering holistic development in students.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Every program is meticulously planned and executed with attention to detail, ensuring memorable and meaningful experiences.",
    },
  ]

  const stats = [
    { number: "120+", label: "Schools Served" },
    { number: "80,000+", label: "Students Impacted" },
    { number: "4+", label: "Years Experience" },
    { number: "20+", label: "Destinations" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-amber-700 text-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ignite Adventure</h1>
            <p className="text-xl leading-relaxed">
              We are passionate educators and adventure enthusiasts dedicated to transforming traditional learning
              through immersive, experiential education programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-amber-700 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We believe outdoor should be accessible to every student. In a world dominated by screens, outdoor
                  experiences are no longer a luxury—but a necessity for holistic development.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-amber-700 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-800">Our Vision</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To be India's leading provider of educational adventure programs, inspiring a generation of confident,
                  curious, and compassionate global citizens who embrace challenges and make positive contributions to
                  society.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/let-20-282-29.jpg"
                alt="Let Ignite Lead Your Journey"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape every program we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-amber-700" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Impact</h2>
            <p className="text-xl text-slate-600">Numbers that reflect our commitment to educational excellence</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2">{stat.number}</div>
                <div className="text-lg text-slate-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Story</h2>
              <p className="text-xl text-slate-600">How we started and where we're heading</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                Ignite Adventure was founded in 2021 by a group of passionate educators and adventure enthusiasts who
                recognized the transformative power of experiential learning. We saw how traditional classroom
                education, while valuable, often missed opportunities to develop crucial life skills like leadership,
                teamwork, and resilience.
              </p>

              <p className="text-slate-700 leading-relaxed mb-6">
                Starting with just a handful of schools in Jaipur we began offering in-school adventure programs that
                brought excitement and hands-on learning directly to students. The positive response was overwhelming –
                teachers noticed improved confidence, better teamwork, and enhanced problem-solving abilities in their
                students.
              </p>

              <p className="text-slate-700 leading-relaxed">
                Today, we're proud to have impacted over 80,000 students across 120+ schools, but our mission remains
                the same: to ignite the spirit of adventure and learning in every student we serve. We continue to
                innovate, expand, and refine our programs to ensure they remain relevant, safe, and transformative for
                the next generation of learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team combines educational expertise with adventure sports certification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Certified Instructors</h3>
                <p className="text-slate-600">
                  All our instructors are certified in adventure sports and trained in educational methodologies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Safety Experts</h3>
                <p className="text-slate-600">
                  Our safety protocols are developed by experts and regularly updated to international standards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Education Specialists</h3>
                <p className="text-slate-600">
                  Our programs are designed by education specialists to align with curriculum objectives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
