"use client";
import CartItemsList from "@/components/cart/CartItemsList";
import OrderSummary from "@/components/cart/OrderSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import { useCartStore } from "@/lib/stores/useCartStore";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { items, getTotalItems } = useCartStore();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/menu"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Menu
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Cart
            <span className="text-amber-600 ml-2">
              ({getTotalItems()} {getTotalItems() === 1 ? "item" : "items"})
            </span>
          </h1>
          <p className="text-gray-600 mt-2">
            Review your order before checkout
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items - Takes 2/3 on desktop */}
          <div className="lg:col-span-2">
            <CartItemsList />
          </div>

          {/* Order Summary - Takes 1/3 on desktop */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
