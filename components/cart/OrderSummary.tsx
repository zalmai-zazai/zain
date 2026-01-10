"use client";

import { useCartStore } from "@/lib/stores/useCartStore";
import Link from "next/link";
import { Truck, Shield } from "lucide-react";

export default function OrderSummary() {
  const { getTotalItems, getTotalPrice, clearCart } = useCartStore();

  const subtotal = getTotalPrice();
  const deliveryFee = subtotal > 25 ? 0 : 4.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({getTotalItems()} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span>
            {deliveryFee === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              `$${deliveryFee.toFixed(2)}`
            )}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-amber-600">${total.toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Includes ${tax.toFixed(2)} in taxes
          </p>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="bg-amber-50 rounded-xl p-4 mb-6">
        <div className="flex items-start space-x-3">
          <Truck className="text-amber-500 mt-0.5" size={20} />
          <div>
            <p className="font-medium text-gray-900">
              {deliveryFee === 0 ? "Free delivery!" : "$4.99 delivery fee"}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {deliveryFee === 0
                ? "Your order qualifies for free delivery"
                : "Get free delivery on orders over $25"}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={() => {
            // This will integrate with Square later
            alert("Checkout coming soon!");
          }}
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-shadow"
        >
          Proceed to Checkout
        </button>

        <button
          onClick={clearCart}
          className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
        >
          Clear Cart
        </button>

        <Link
          href="/menu"
          className="block w-full py-3 text-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Security Note */}
      <div className="flex items-center justify-center mt-6 pt-6 border-t text-sm text-gray-500">
        <Shield size={16} className="mr-2" />
        Secure checkout powered by Square
      </div>
    </div>
  );
}
