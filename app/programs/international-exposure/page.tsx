import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Users, Award, BookOpen, Map } from "lucide-react"

export default function InternationalExposurePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-stone-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">International Exposure Programs</h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            Expand horizons with global adventure and cultural exchange programs designed to build global perspective
            and leadership skills.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-6">
                Why Choose International Exposure?
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                Our International Exposure programs bring curated global adventure learning and cultural immersion
                directly to your students, delivering exceptional, professionally facilitated experiences with
                world-class educational value.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">Global cultural exchange and learning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">International networking opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">Internationally recognized certifications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">Language and cultural skill development</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-700 to-amber-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-lg mb-2">Group Size</p>
                  <p className="text-amber-100">20-100+ students per group</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">Duration</p>
                  <p className="text-amber-100">7-21 days international programs</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">Instructor Ratio</p>
                  <p className="text-amber-100">20:1 child-to-instructor ratio</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">Destinations</p>
                  <p className="text-amber-100">Southeast Asia, Europe, Americas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-slate-800 mb-12 text-center">Featured Destinations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { country: "Thailand", focus: "Adventure & Culture" },
              { country: "Vietnam", focus: "Heritage & Exploration" },
              { country: "Indonesia", focus: "Island Adventures" },
            ].map((destination, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-lg p-8 border border-amber-200 hover:shadow-lg transition-shadow"
              >
                <Map className="h-8 w-8 text-amber-700 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">{destination.country}</h3>
                <p className="text-stone-600">{destination.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore the World?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take your students on a transformative international adventure experience.
          </p>
          <Button asChild className="bg-white text-amber-700 hover:bg-stone-100 text-lg px-8">
            <Link href="#contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
