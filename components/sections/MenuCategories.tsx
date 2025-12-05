"use client";

import { useState } from "react";

const categories = [
  { id: "all", name: "All", emoji: "🍽️" },
  { id: "appetizers", name: "Starters", emoji: "🥟" },
  { id: "mains", name: "Mains", emoji: "🍛" },
  { id: "biryani", name: "Biryani", emoji: "🍚" },
  { id: "tandoor", name: "Tandoori", emoji: "🔥" },
  { id: "desserts", name: "Desserts", emoji: "🍨" },
];

export default function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="sticky top-16 z-30 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-3 space-x-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-amber-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">{category.emoji}</span>
              <span className="font-medium text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
