"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/stores/useCartStore";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CartItemsList() {
  const { items, updateQuantity, removeItem } = useCartStore();

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">Order Items</h2>
      </div>

      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Item Image */}
              <div className="relative w-full sm:w-24 h-40 sm:h-24 rounded-xl overflow-hidden flex-shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>

              {/* Item Details */}
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {item.description}
                    </p>
                    <div className="mt-2">
                      <span className="text-amber-600 font-bold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        (${item.price.toFixed(2)} each)
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors h-fit"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Minus size={16} className="text-gray-600" />
                    </button>

                    <span className="font-bold text-lg min-w-[40px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors"
                    >
                      <Plus size={16} />
                    </button>

                    <span className="text-gray-600 text-sm ml-2">
                      {item.quantity === 1 ? "item" : "items"}
                    </span>
                  </div>

                  <div className="text-sm text-gray-500 capitalize">
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
