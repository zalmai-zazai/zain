import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">ZAIN</h2>
                <p className="text-sm text-amber-200">RESTAURANT</p>
              </div>
            </div>
            <p className="text-gray-300">
              Authentic cuisine served with passion in the heart of Seatac,
              Washington.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-100">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-amber-400" />
                <span>123 Airport Way, Seatac, WA 98158</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span>(206) 555-ZAIN</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span>info@zainseatac.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-100">Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>11AM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>11AM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>12PM - 9PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Zain Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
