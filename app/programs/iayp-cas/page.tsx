import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Trophy, Target, Users, BookOpen, Star } from "lucide-react"

export default function IAYPCASPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-stone-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">IAYP & CAS Programs</h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            Award-focused and certification programs designed to develop leadership, service, and personal achievement
            in students.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-amber-700 to-amber-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-lg mb-2">IAYP (International Award for Young People)</p>
                  <p className="text-amber-100">Multi-level achievement awards for personal development</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">CAS (Creativity, Activity, Service)</p>
                  <p className="text-amber-100">IB curriculum support for holistic student development</p>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2">Certified Programs</p>
                  <p className="text-amber-100">Recognized by international educational bodies</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-heading text-slate-800 mb-6">
                Why Choose Our IAYP & CAS Programs?
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                Our IAYP and CAS programs deliver professionally facilitated certification-focused experiences that
                elevate your curriculum and create meaningful personal achievement opportunities for every student.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">Internationally recognized certifications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Trophy className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">Achievement-based recognition programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">Personalized goal-setting and tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                  <span className="text-stone-700">Expert certified facilitators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Award Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-slate-800 mb-12 text-center">IAYP Award Levels</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { level: "Bronze", duration: "6 months", icon: "🥉" },
              { level: "Silver", duration: "12 months", icon: "🥈" },
              { level: "Gold", duration: "18-24 months", icon: "🥇" },
              { level: "Platinum", duration: "Advanced", icon: "✨" },
            ].map((award, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-lg p-8 border border-amber-200 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{award.level}</h3>
                <p className="text-stone-600">{award.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-slate-800 mb-12 text-center">Program Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-stone-200">
              <BookOpen className="h-10 w-10 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Comprehensive Curriculum</h3>
              <p className="text-stone-600">
                Structured learning paths aligned with international standards and school curricula.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-stone-200">
              <Star className="h-10 w-10 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Expert Facilitation</h3>
              <p className="text-stone-600">
                Certified instructors with international award program experience and credentials.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-stone-200">
              <Target className="h-10 w-10 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Goal-Oriented</h3>
              <p className="text-stone-600">
                Personalized achievement planning and progress tracking for each student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Achieve Excellence?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Give your students the opportunity to earn internationally recognized achievements and certifications.
          </p>
          <Button asChild className="bg-white text-amber-700 hover:bg-stone-100 text-lg px-8">
            <Link href="#contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
