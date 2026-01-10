"use client";

import { Plus, Star, Flame } from "lucide-react";
import { motion } from "framer-motion";

import { useCartStore } from "@/lib/stores/useCartStore";
import { useEffect, useState } from "react";
const menuItems = [
  {
    id: 1,
    name: "Lamb & Beefplatter",
    description:
      "Fragrant basmati rice with tender chicken pieces, infused with saffron and aromatic spices",
    price: 16.99,
    category: "biryani",
    image: "/Lambandbeef.png",
    popular: true,
    spicy: 2,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Tilapia",
    description:
      "Crispy pastry filled with spiced potatoes and peas, served with mint chutney",
    price: 16.99,
    category: "appetizers",
    image: "tilapia.png",
    popular: true,
    spicy: 1,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Butter Chicken",
    description: "Tender chicken in a rich tomato and butter sauce with cream",
    price: 18.99,
    category: "mains",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop&crop=center",
    popular: true,
    spicy: 1,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Garlic Naan",
    description: "Soft leavened bread topped with fresh garlic and butter",
    price: 3.99,
    category: "mains",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop&crop=center",
    popular: false,
    spicy: 0,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Salmon vs Spaghatti",
    description: "Refreshing yogurt drink with sweet mango pulp",
    price: 18.99,
    category: "drinks",
    image: "salmon.png",
    popular: true,
    spicy: 0,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, cooked in clay oven",
    price: 15.99,
    category: "tandoor",
    image:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&h=300&fit=crop&crop=center",
    popular: true,
    spicy: 2,
    rating: 4.8,
  },
];

export default function MenuItemsGrid() {
  // Replace local state with Zustand
  const [mounted, setMounted] = useState(false);
  const {
    addItem,
    removeItem,
    updateQuantity,
    items,
    getTotalItems,
    getTotalPrice,
  } = useCartStore();

  // Helper to get quantity from Zustand
  const getItemQuantity = (itemId: number) => {
    const cartItem = items.find((item) => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  // Updated add function
  const addToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      category: item.category,
    });
  };

  // Updated remove function
  const removeFromCart = (itemId: number) => {
    const currentQuantity = getItemQuantity(itemId);
    if (currentQuantity <= 1) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, currentQuantity - 1);
    }
  };

  // Function to increase quantity
  const increaseQuantity = (item: any) => {
    const currentQuantity = getItemQuantity(item.id);
    updateQuantity(item.id, currentQuantity + 1);
  };

  // Calculate totals from Zustand (for mobile summary)
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header - UNCHANGED */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Menu</h2>
        <p className="text-gray-600">
          Order your favorites online for pickup or delivery
        </p>
      </div>

      {/* Menu Grid - UNCHANGED except button handlers */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group"
          >
            {/* Item Image - UNCHANGED */}
            <div className="relative h-48 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              {/* Badges - UNCHANGED */}
              <div className="absolute top-3 left-3 flex space-x-2">
                {item.popular && (
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Star size={12} className="mr-1" /> Popular
                  </span>
                )}
                {item.spicy > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Flame size={12} className="mr-1" /> Spicy
                  </span>
                )}
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="flex items-center text-sm">
                  <Star
                    size={14}
                    className="text-amber-500 mr-1 fill-amber-500"
                  />
                  {item.rating}
                </span>
              </div>
            </div>

            {/* Item Details - UNCHANGED except button handlers */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                <span className="text-2xl font-bold text-amber-600">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              {/* Quantity Controls - UPDATED to use Zustand */}
              <div className="flex items-center justify-between">
                {getItemQuantity(item.id) > 0 ? (
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <span className="text-gray-600 font-bold">−</span>
                    </button>
                    <span className="font-bold text-lg">
                      {getItemQuantity(item.id)}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors"
                    >
                      <span className="font-bold">+</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    <Plus size={18} />
                    <span className="font-semibold">Add to Order</span>
                  </button>
                )}

                {/* Spicy Indicator - UNCHANGED */}
                {item.spicy > 0 && (
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <Flame
                        key={i}
                        size={16}
                        className={
                          i < item.spicy
                            ? "text-red-500 fill-red-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Summary (Fixed at bottom on mobile) - UPDATED to use Zustand */}
      {mounted && totalItems > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-2xl"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900">
                  {totalItems} items
                </div>
                <div className="text-sm text-gray-600">
                  ${totalPrice.toFixed(2)}
                </div>
              </div>
              <button
                onClick={() => (window.location.href = "/cart")}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full"
              >
                View Cart
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
