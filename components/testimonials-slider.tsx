"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    position: "Principal, Delhi Public School",
    content:
      "Ignite Adventure transformed our students' perspective on learning. The residential trip to Manali was educational, safe, and incredibly well-organized. Our students are still talking about the astronomy program!",
    rating: 5,
    school: "Delhi Public School",
  },
  {
    name: "Rajesh Kumar",
    position: "Activity Coordinator, St. Mary's School",
    content:
      "The in-school adventure program was fantastic! The team brought so much energy and expertise. Our students learned valuable life skills through fun, engaging activities right on our campus.",
    rating: 5,
    school: "St. Mary's School",
  },
  {
    name: "Meera Patel",
    position: "Vice Principal, Greenwood High",
    content:
      "The day-out adventure program at Corbett was perfectly planned. Safety was their top priority, and the educational value was immense. Highly recommend Ignite Adventure for any school looking for quality programs.",
    rating: 5,
    school: "Greenwood High School",
  },
  {
    name: "Amit Singh",
    position: "Sports Teacher, Modern School",
    content:
      "What impressed me most was their attention to detail and safety protocols. The team building activities were innovative and really helped our students bond. Professional service from start to finish.",
    rating: 5,
    school: "Modern School",
  },
  {
    name: "Sunita Gupta",
    position: "Principal, Lotus Valley School",
    content:
      "The international trip program exceeded our expectations. The astronomy component was particularly engaging for our science students. Ignite Adventure made learning come alive!",
    rating: 5,
    school: "Lotus Valley International School",
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
