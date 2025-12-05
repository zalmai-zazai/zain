"use client";

import { motion } from "framer-motion";
import { Filter, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MenuHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-20 pb-8 bg-gradient-to-r from-amber-500/5 to-orange-500/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Full Menu</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete selection of authentic dishes. Every item is
            available for pickup or delivery.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white rounded-2xl shadow-lg">
            {/* Search Input */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search for dishes, ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Button */}
            <button className="flex items-center space-x-2 px-6 py-3 bg-amber-50 text-amber-600 font-semibold rounded-xl hover:bg-amber-100 transition-colors">
              <Filter size={20} />
              <span>Filter</span>
              <ChevronDown size={16} />
            </button>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="bg-transparent border-none focus:outline-none text-amber-600 font-medium">
                <option>Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
