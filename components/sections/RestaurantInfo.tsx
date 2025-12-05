"use client";

import { Star, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function RestaurantInfo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Name */}
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-3xl">Z</span>
            </div>
            <div className="absolute -inset-1 rounded-full border-2 border-amber-300 animate-pulse"></div>
          </motion.div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Zain Restaurant
            </h1>
            <p className="text-amber-600 font-medium">
              Authentic Cuisine • Seatac, WA
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: <Star className="text-amber-500" />,
              label: "4.8 Rating",
              value: "500+ Reviews",
            },
            {
              icon: <Clock className="text-amber-500" />,
              label: "Fast Delivery",
              value: "30-45 Min",
            },
            {
              icon: <CheckCircle className="text-amber-500" />,
              label: "Hygiene Rated",
              value: "5 Star",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className="font-bold text-gray-900">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brief Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-gray-600 mt-8 max-w-2xl mx-auto"
      >
        Welcome to Zain, where tradition meets flavor. Serving authentic dishes
        made with the freshest ingredients right in the heart of Seatac. Order
        online for pickup or delivery!
      </motion.p>
    </div>
  );
}
