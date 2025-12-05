"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    name: "Signature Biryani",
    description: "Fragrant rice with choice of meat, spices, and herbs",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d9d6?w=400&h=300&fit=crop",
  },
  {
    name: "Tandoori Platter",
    description: "Assorted grilled meats with naan and chutneys",
    price: "$22.99",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w-400&h=300&fit=crop",
  },
  {
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with sweet mango",
    price: "$4.99",
    image:
      "https://images.unsplash.com/photo-1628992682633-bf2d40cb595f?w=400&h=300&fit=crop",
  },
];

export default function MenuPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
            <UtensilsCrossed className="text-amber-500" size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Signature <span className="text-amber-600">Dishes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A taste of our most beloved creations that keep our guests coming
            back
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="text-2xl font-bold text-amber-600">
                  {item.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 group"
          >
            View Full Menu
            <UtensilsCrossed className="ml-3 group-hover:rotate-12 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
