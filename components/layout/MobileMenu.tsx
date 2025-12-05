"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  User,
  ShoppingCart,
  Home,
  Utensils,
  Info,
  Phone,
} from "lucide-react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const mobileNavItems = [
  { label: "Home", href: "/", icon: <Home size={20} /> },
  { label: "Menu", href: "/menu", icon: <Utensils size={20} /> },
  { label: "About", href: "/about", icon: <Info size={20} /> },

  { label: "Call Us", href: "tel:2065559246", icon: <Phone size={20} /> },
  { label: "Sign In", href: "/login", icon: <User size={20} /> },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const MenuContent = () => (
    <>
      {/* Backdrop with fade animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel with slide-in animation */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: "easeOut",
        }}
        className="fixed right-0 top-0 w-64 bg-white z-[9999] md:hidden shadow-2xl rounded-l-xl overflow-hidden max-h-[85vh] mt-4 mr-4"
      >
        {/* Menu Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">ZAIN</div>
                <div className="text-xs text-amber-600">RESTAURANT</div>
              </div>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} className="text-gray-600" />
            </motion.button>
          </div>
        </div>

        {/* Menu Items with staggered animation */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="space-y-1">
            {mobileNavItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-50 text-gray-700 hover:text-amber-600 transition-colors group"
                >
                  <motion.div
                    className="text-amber-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Cart Summary with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-700">Your Cart</span>
              <motion.span
                className="font-bold text-amber-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                0 items
              </motion.span>
            </div>
            <motion.button
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Cart
            </motion.button>
          </motion.div>
        </div>

        {/* Close button at bottom */}
        <div className="p-4 border-t bg-white">
          <motion.button
            onClick={() => setIsOpen(false)}
            className="w-full py-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Close Menu
          </motion.button>
        </div>
      </motion.div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button with animation */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <X size={24} className="text-gray-700" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="space-y-1"
          >
            <div className="w-6 h-0.5 bg-gray-600"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
            <div className="w-4 h-0.5 bg-gray-600"></div>
          </motion.div>
        )}
      </motion.button>

      {/* Render menu at root level using portal with AnimatePresence */}
      {mounted &&
        createPortal(
          <AnimatePresence>{isOpen && <MenuContent />}</AnimatePresence>,
          document.body
        )}
    </>
  );
}
