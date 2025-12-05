"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", name: "All Items", emoji: "🍽️", count: 42 },
  { id: "appetizers", name: "Appetizers", emoji: "🥟", count: 8 },
  { id: "soups", name: "Soups", emoji: "🍲", count: 6 },
  { id: "salads", name: "Salads", emoji: "🥗", count: 5 },
  { id: "main-course", name: "Main Course", emoji: "🍛", count: 12 },
  { id: "biryani", name: "Biryani Specials", emoji: "🍚", count: 6 },
  { id: "tandoor", name: "Tandoori", emoji: "🔥", count: 8 },
  { id: "breads", name: "Breads & Rice", emoji: "🍞", count: 7 },
  { id: "desserts", name: "Desserts", emoji: "🍨", count: 6 },
  { id: "drinks", name: "Drinks", emoji: "🥤", count: 8 },
];

export default function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 space-x-3 scrollbar-hide">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center px-4 py-3 rounded-xl whitespace-nowrap transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-2xl mb-1">{category.emoji}</span>
              <span className="font-medium text-sm">{category.name}</span>
              <span
                className={`text-xs mt-1 ${
                  activeCategory === category.id
                    ? "text-amber-100"
                    : "text-gray-500"
                }`}
              >
                {category.count} items
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
