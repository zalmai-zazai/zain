"use client";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { useCartStore } from "@/lib/stores/useCartStore";
import { useEffect, useState } from "react"; // Added this import

export default function Header() {
  const { getTotalItems } = useCartStore();
  const [mounted, setMounted] = useState(false); // Added this line

  useEffect(() => {
    setMounted(true); // Added this line
  }, []);

  const itemCount = getTotalItems(); // Added this line

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  Z
                </span>
              </div>
            </div>
            <div className="transition-transform duration-300 group-hover:scale-105">
              <h1 className="text-xl font-bold text-gray-900">ZAIN</h1>
              <p className="text-xs text-amber-600 font-medium">RESTAURANT</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Right side - Cart & Auth */}
          <div className="flex items-center space-x-3">
            {/* Desktop Auth Button */}
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-300 hover:border-amber-500 hover:bg-amber-50 text-gray-700 hover:text-amber-600 transition-colors group">
              <User
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Sign In</span>
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-amber-50 transition-colors group"
            >
              <ShoppingCart
                size={22}
                className="text-amber-600 group-hover:scale-110 transition-transform"
              />
              {mounted &&
                itemCount > 0 && ( // Changed this line
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
            </Link>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
