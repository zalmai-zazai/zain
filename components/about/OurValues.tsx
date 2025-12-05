"use client";

import { motion } from "framer-motion";
import { Leaf, ChefHat, Users, Star } from "lucide-react";

const values = [
  {
    icon: <Leaf className="text-amber-500" size={28} />,
    title: "Fresh Ingredients",
    description:
      "We source locally and prioritize freshness in all our ingredients.",
    color: "from-green-50 to-emerald-50",
  },
  {
    icon: <ChefHat className="text-amber-500" size={28} />,
    title: "Culinary Excellence",
    description:
      "Our chefs bring decades of experience and innovation to every dish.",
    color: "from-amber-50 to-orange-50",
  },
  {
    icon: <Users className="text-amber-500" size={28} />,
    title: "Community First",
    description:
      "We believe in creating spaces where people can connect over great food.",
    color: "from-blue-50 to-cyan-50",
  },
  {
    icon: <Star className="text-amber-500" size={28} />,
    title: "Authentic Experience",
    description: "Every meal tells a story of tradition and cultural heritage.",
    color: "from-purple-50 to-pink-50",
  },
];

export default function OurValues() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at Zain Restaurant
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex p-4 rounded-2xl bg-amber-50 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
