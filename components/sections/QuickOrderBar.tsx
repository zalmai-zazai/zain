"use client";

import { ShoppingCart, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function QuickOrderBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-16 z-40 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-3">
          {/* Quick Info */}
          <div className="flex items-center space-x-6 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="font-semibold">(206) 555-ZAIN</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin size={16} />
              <span>Seatac, WA</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Clock size={16} />
              <span>Open Now: 11AM-10PM</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
              <Phone size={18} />
              <span className="font-semibold">Call to Order</span>
            </button>
            <button className="flex items-center space-x-2 bg-white text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg font-semibold transition-colors">
              <ShoppingCart size={18} />
              <span>Order Online</span>
              <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
