"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function VisitUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit <span className="text-amber-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our warm hospitality and authentic flavors in person
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {[
                {
                  icon: <MapPin className="text-amber-500" size={24} />,
                  title: "Our Location",
                  details: ["123 Airport Way", "Seatac, WA 98158"],
                  bgColor: "bg-white",
                },
                {
                  icon: <Phone className="text-amber-500" size={24} />,
                  title: "Contact Us",
                  details: ["(206) 555-ZAIN", "info@zainseatac.com"],
                  bgColor: "bg-white",
                },
                {
                  icon: <Clock className="text-amber-500" size={24} />,
                  title: "Hours",
                  details: [
                    "Mon-Thu: 11AM - 10PM",
                    "Fri-Sat: 11AM - 11PM",
                    "Sun: 12PM - 9PM",
                  ],
                  bgColor: "bg-white",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className={`${item.bgColor} p-6 rounded-2xl shadow-lg border border-gray-100`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-50 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <div className="space-y-1">
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                Make a Reservation
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Map/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl -z-10" />

            {/* Map placeholder */}
            <div className="h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Find Us Here
                </h3>
                <p className="text-gray-600">
                  Conveniently located in the heart of Seatac
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-amber-400"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-orange-400"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
