"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mrs. Kamal Rathore",
    position: "Principal, Tagore International School",
    content:
      "The adventure camp at Kanota Resort proved to be a highly enriching and memorable experience for our students. It offered a perfect blend of learning, adventure, and personal growth, helping students develop confidence, teamwork, and leadership skills in a safe and well-organized environment. The activities were conducted with excellent planning and strict safety measures, allowing students to participate wholeheartedly and step beyond their comfort zones. Such experiential programs play a vital role in the holistic development of students and leave a lasting positive impact. We truly appreciate the effort and professionalism of the team and look forward to many more meaningful collaborations in the future.",
    rating: 5,
    school: "Tagore International School",
  },
  {
    name: "Ranjan Saini",
    position: "Student, Euro International School",
    content:
      "If there is one journey I’ll remember for a lifetime, it’s the adventure I shared with Prakash Ranjan sir. From the very first moment, his energy, enthusiasm, and fearless spirit set the tone for an extraordinary experience. Whether it was trekking through rugged trails, exploring hidden gems in nature, or taking spontaneous detours that led to breathtaking views, Prakash turned every moment into a story worth telling. His sense of adventure is contagious — the kind that makes you step out of your comfort zone and truly live the journey. What makes Prakash stand out is not just his love for adventure, but the way he makes every person feel like they’re part of something special. He’s the kind of travel companion who motivates you when the path gets tough, celebrates with you when you reach the peak, and ensures every experience becomes meaningful.",
    rating: 5,
    school: "Euro International School",
  },
  {
    name: "Vibha Mahnot",
    position: "Teacher, Rukmani Birla Modern High School",
    content:
      "Our school trip to Rishikesh and Tehri was an unforgettable blend of adventure, learning, and natural beauty.The majestic Tehri Dam and the tranquil Tehri Lake offered breathtaking views. The trip was well-planned, with safe travel, comfortable accommodations, and delicious food.Overall, this trip was a perfect mix of fun, adventure, and education. Thanks to Ignite Adventures and the team.",
    rating: 5,
    school: "Rukmani Birla Modern High School",
  },
  {
    name: "Knidhi Rajpoot",
    position: "Coordinator, Mody School",
    content:
      "It was fun filled experience with Ignite team, we went to Kerala in the month of March with 62 school students by flight. We explored various places like Padmanabh temple, Jatayu rock centre, ISRO museum etc. We enjoyed the journey alot. Thanks Ignite team.",
    rating: 5,
    school: "Mody School",
  },
  {
    name: "Janvi Pareek",
    position: "Teacher, Daffodils World School",
    content:
      "Recently went on a trip with them. Those four Days turned out into the golden memories that the students will cherish for a lifetime. You name it and they have it, they will never disappoint you with your choices and try their level best to serve you the best  All the crew members were highly supportive and energetic. I would highly recommend everyone to go for ignite adventures. ",
    rating: 5,
    school: "Daffodils World School",
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="mx-4 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Quote className="h-12 w-12 text-amber-700 mx-auto mb-6 opacity-50" />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-600 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="border-t pt-6">
                      <cite className="not-italic">
                        <div className="font-semibold text-slate-800 text-lg">{testimonial.name}</div>
                        <div className="text-amber-700 font-medium">{testimonial.position}</div>
                        <div className="text-slate-500 text-sm mt-1">{testimonial.school}</div>
                      </cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-stone-100 border-slate-300"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-stone-100 border-slate-300"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-amber-700" : "bg-slate-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
