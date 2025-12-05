"use client";

import { Leaf, Flame, Wheat, Star } from "lucide-react";
import { useState } from "react";

const dietaryFilters = [
  {
    id: "vegetarian",
    label: "Vegetarian",
    icon: <Leaf size={16} />,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "spicy",
    label: "Spicy",
    icon: <Flame size={16} />,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "gluten-free",
    label: "Gluten Free",
    icon: <Wheat size={16} />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: "chef-special",
    label: "Chef Special",
    icon: <Star size={16} />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "popular",
    label: "Most Popular",
    icon: <Star size={16} />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

export default function DietaryFilters() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="py-6 border-b">
      <div className="flex flex-wrap gap-2">
        <span className="text-gray-600 font-medium mr-2">Filters:</span>
        {dietaryFilters.map((filter) => {
          const isActive = activeFilters.includes(filter.id);
          return (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                isActive
                  ? `${filter.bgColor} ${
                      filter.color
                    } border ${filter.color.replace("text", "border")}`
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter.icon}
              <span className="font-medium">{filter.label}</span>
            </button>
          );
        })}

        {/* Clear filters button */}
        {activeFilters.length > 0 && (
          <button
            onClick={() => setActiveFilters([])}
            className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}
