"use client";

import { ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CartSummaryBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Mock cart data - in real app, this would come from state/store
  const cartItems = 3;
  const cartTotal = 42.97;

  if (cartItems === 0) return null;

  return (
    <>
      {/* Fixed Cart Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      >
        <div className="container mx-auto px-4 pb-4">
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl shadow-2xl p-4 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <ShoppingCart size={24} />
                  <span className="absolute -top-2 -right-2 bg-white text-amber-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                </div>
                <div>
                  <div className="font-bold">{cartItems} items in cart</div>
                  <div className="text-sm text-amber-100">
                    ${cartTotal.toFixed(2)} total
                  </div>
                </div>
              </div>
              <button className="px-6 py-2 bg-white text-amber-600 font-bold rounded-full">
                View Cart
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Cart Details */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsExpanded(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween" }}
              className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-3xl shadow-2xl p-6 max-h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Your Order</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="space-y-4 mb-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                  >
                    <div>
                      <div className="font-medium">Butter Chicken</div>
                      <div className="text-sm text-gray-500">Quantity: 1</div>
                    </div>
                    <div className="font-bold text-amber-600">$18.99</div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-xl">
                  Continue Shopping
                </button>
                <button className="py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl">
                  Checkout Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
