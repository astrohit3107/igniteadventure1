import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-800 text-stone-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Ignite Adventure Logo" className="h-32 w-auto" />
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              Transforming education through adventure and exploration. We create unforgettable learning experiences for
              schools across India and beyond.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-stone-400 hover:text-amber-700 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-stone-400 hover:text-amber-700 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-stone-400 hover:text-amber-700 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-stone-300 hover:text-stone-100 transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-stone-300 hover:text-stone-100 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/gallery" className="block text-stone-300 hover:text-stone-100 transition-colors text-sm">
                Gallery
              </Link>
              <Link
                href="/programs/in-school"
                className="block text-stone-300 hover:text-stone-100 transition-colors text-sm"
              >
                In-School Adventure Camps
              </Link>
              <Link
                href="/programs/day-out"
                className="block text-stone-300 hover:text-stone-100 transition-colors text-sm"
              >
                Day-Out Adventure Camps
              </Link>
              <Link
                href="/programs/residential"
                className="block text-stone-300 hover:text-stone-100 transition-colors text-sm"
              >
                Residential Adventure Trips
              </Link>
              <Link
                href="/programs/international-exposure"
                className="block text-stone-300 hover:text-stone-100 transition-colors text-sm"
              >
                International Exposure
              </Link>
              <Link
                href="/programs/iayp-cas"
                className="block text-stone-300 hover:text-stone-100 transition-colors text-sm"
              >
                IAYP & CAS Programs
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-stone-300">+91 96504 85880</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-stone-300">info.igniteadventure@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-stone-300">
                  Shop No. 7, Floor-2, Triveni Puliya, Gopalpura Bypass
                  <br />
                  Jaipur, Rajasthan - 302018
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-700" />
                <span className="text-sm text-stone-300">Monday - Friday</span>
              </div>
              <p className="text-sm text-stone-300 ml-6">9:00 AM - 6:00 PM</p>

              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-700" />
                <span className="text-sm text-stone-300">Saturday</span>
              </div>
              <p className="text-sm text-stone-300 ml-6">10:00 AM - 4:00 PM</p>

              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-700" />
                <span className="text-sm text-stone-300">Sunday</span>
              </div>
              <p className="text-sm text-stone-300 ml-6">Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-stone-400">
              © {new Date().getFullYear()} Ignite Adventure. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-stone-400 hover:text-stone-100 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
