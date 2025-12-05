"use client";

import { Plus, Minus, Star, Flame, Leaf, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const menuItems = [
  // Appetizers
  {
    id: 1,
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: 6.99,
    category: "appetizers",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    popular: true,
    spicy: 1,
    vegetarian: true,
    prepTime: "10 min",
    rating: 4.6,
  },
  {
    id: 2,
    name: "Chicken Tikka",
    description: "Grilled chicken chunks marinated in spices and yogurt",
    price: 9.99,
    category: "appetizers",
    image:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&h=300&fit=crop",
    popular: true,
    spicy: 2,
    vegetarian: false,
    prepTime: "15 min",
    rating: 4.8,
  },

  // Soups
  {
    id: 3,
    name: "Tomato Shorba",
    description: "Spiced tomato soup with fresh herbs",
    price: 5.99,
    category: "soups",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    popular: false,
    spicy: 1,
    vegetarian: true,
    prepTime: "8 min",
    rating: 4.4,
  },

  // Main Course
  {
    id: 4,
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato and butter sauce",
    price: 18.99,
    category: "main-course",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    popular: true,
    spicy: 1,
    vegetarian: false,
    prepTime: "20 min",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Palak Paneer",
    description: "Cottage cheese cubes in creamy spinach gravy",
    price: 16.99,
    category: "main-course",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    popular: true,
    spicy: 1,
    vegetarian: true,
    prepTime: "18 min",
    rating: 4.7,
  },

  // Biryani
  {
    id: 6,
    name: "Hyderabadi Biryani",
    description: "Fragrant basmati rice with marinated chicken and spices",
    price: 19.99,
    category: "biryani",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d9d6?w=400&h=300&fit=crop",
    popular: true,
    spicy: 3,
    vegetarian: false,
    prepTime: "25 min",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Vegetable Biryani",
    description: "Mixed vegetables cooked with aromatic basmati rice",
    price: 15.99,
    category: "biryani",
    image:
      "https://images.unsplash.com/photo-1633945274417-ab6963d5a8f3?w=400&h=300&fit=crop",
    popular: true,
    spicy: 2,
    vegetarian: true,
    prepTime: "22 min",
    rating: 4.8,
  },

  // Tandoori
  {
    id: 8,
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, clay oven roasted",
    price: 17.99,
    category: "tandoor",
    image:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&h=300&fit=crop",
    popular: true,
    spicy: 2,
    vegetarian: false,
    prepTime: "30 min",
    rating: 4.8,
  },

  // Breads
  {
    id: 9,
    name: "Garlic Naan",
    description: "Soft leavened bread topped with fresh garlic and butter",
    price: 3.99,
    category: "breads",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
    popular: true,
    spicy: 0,
    vegetarian: true,
    prepTime: "5 min",
    rating: 4.7,
  },

  // Desserts
  {
    id: 10,
    name: "Gulab Jamun",
    description: "Soft milk balls soaked in rose flavored syrup",
    price: 5.99,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop",
    popular: true,
    spicy: 0,
    vegetarian: true,
    prepTime: "5 min",
    rating: 4.5,
  },

  // Drinks
  {
    id: 11,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with sweet mango pulp",
    price: 4.99,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1628992682633-bf2d40cb595f?w=400&h=300&fit=crop",
    popular: true,
    spicy: 0,
    vegetarian: true,
    prepTime: "3 min",
    rating: 4.6,
  },
  {
    id: 12,
    name: "Masala Chai",
    description: "Traditional spiced tea with milk",
    price: 3.99,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=400&h=300&fit=crop",
    popular: true,
    spicy: 1,
    vegetarian: true,
    prepTime: "7 min",
    rating: 4.7,
  },
];

export default function MenuItemsGrid() {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const addToCart = (itemId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setQuantities((prev) => {
      const current = prev[itemId] || 0;
      if (current <= 1) {
        const newQuantities = { ...prev };
        delete newQuantities[itemId];
        return newQuantities;
      }
      return {
        ...prev,
        [itemId]: current - 1,
      };
    });
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = menuItems.reduce((total, item) => {
    return total + item.price * (quantities[item.id] || 0);
  }, 0);

  return (
    <>
      <div className="py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group"
            >
              {/* Item Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {item.popular && (
                    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center w-fit">
                      <Star size={12} className="mr-1" /> Popular
                    </span>
                  )}
                  {item.spicy > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center w-fit">
                      <Flame size={12} className="mr-1" /> Spicy
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center w-fit">
                      <Leaf size={12} className="mr-1" /> Veg
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Star
                    size={14}
                    className="text-amber-500 mr-1 fill-amber-500"
                  />
                  <span className="font-medium">{item.rating}</span>
                </div>

                {/* Prep Time */}
                <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center">
                  <Clock size={12} className="mr-1" />
                  {item.prepTime}
                </div>
              </div>

              {/* Item Details */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-600">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                {/* Category & Dietary Info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 uppercase font-medium">
                    {item.category}
                  </span>
                  <div className="flex space-x-1">
                    {item.spicy > 0 &&
                      [...Array(3)].map((_, i) => (
                        <Flame
                          key={i}
                          size={14}
                          className={
                            i < item.spicy ? "text-red-500" : "text-gray-300"
                          }
                        />
                      ))}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between">
                  {quantities[item.id] ? (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Minus size={16} className="text-gray-600" />
                      </button>
                      <span className="font-bold text-lg">
                        {quantities[item.id]}
                      </span>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all group"
                    >
                      <Plus size={18} />
                      <span className="font-semibold">Add to Order</span>
                    </button>
                  )}

                  {/* Additional Info */}
                  <div className="text-xs text-gray-500">
                    {item.vegetarian ? "Vegetarian" : "Non-Veg"}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition-colors">
            Load More Items
          </button>
        </div>
      </div>
    </>
  );
}
