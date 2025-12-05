"use client";

import { motion } from "framer-motion";
import { ChefHat, Leaf, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: <ChefHat className="text-amber-500" size={28} />,
    title: "Master Chefs",
    description:
      "Our chefs bring decades of culinary expertise and passion to every dish.",
    delay: 0.1,
  },
  {
    icon: <Leaf className="text-amber-500" size={28} />,
    title: "Fresh Ingredients",
    description:
      "Daily-sourced local produce ensuring the highest quality and flavor.",
    delay: 0.2,
  },
  {
    icon: <Clock className="text-amber-500" size={28} />,
    title: "Quick Service",
    description:
      "Enjoy your meal without the wait. Perfect for lunch breaks and dinners.",
    delay: 0.3,
  },
  {
    icon: <Heart className="text-amber-500" size={28} />,
    title: "Made with Love",
    description: "Every dish is crafted with care and attention to detail.",
    delay: 0.4,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-amber-600">Zain</span> Stands Out
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience dining that goes beyond the ordinary with our commitment
            to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              whileHover={{
                scale: 1.05,
                translateY: -10,
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.1)",
              }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 group cursor-pointer"
            >
              <div className="inline-flex p-4 rounded-2xl bg-amber-50 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
