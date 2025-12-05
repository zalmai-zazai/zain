"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Heart } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl -z-10" />

            {/* Main content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From Humble Beginnings
              </h2>

              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  It all started in a small kitchen in downtown Seatac, where
                  Chef Zain would cook traditional family recipes for friends
                  and neighbors. Word quickly spread about the incredible
                  flavors coming from his home.
                </p>

                <p className="leading-relaxed">
                  What began as a passion project soon grew into a community
                  gathering place. In 2010, with the support of the local
                  community, Zain Restaurant opened its doors at our current
                  location on Airport Way.
                </p>

                <p className="leading-relaxed">
                  Today, we continue that tradition of warmth and hospitality,
                  serving dishes that tell a story of heritage, love, and
                  culinary excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats/Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  icon: <Calendar className="text-amber-500" />,
                  value: "15+",
                  label: "Years Serving",
                },
                {
                  icon: <Users className="text-amber-500" />,
                  value: "50K+",
                  label: "Happy Guests",
                },
                {
                  icon: <Heart className="text-amber-500" />,
                  value: "100%",
                  label: "Passion",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-amber-50 rounded-2xl"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Our Journey</h3>

              {[
                { year: "2010", event: "Opened our doors in Seatac" },
                {
                  year: "2014",
                  event: 'Featured in "Best of Washington" magazine',
                },
                { year: "2018", event: "Expanded with outdoor patio seating" },
                { year: "2023", event: "Launched online ordering system" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center">
                    <span className="text-white font-bold">{item.year}</span>
                  </div>
                  <div>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
