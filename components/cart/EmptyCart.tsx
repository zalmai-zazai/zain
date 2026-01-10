import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="text-amber-500" size={48} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Your cart is empty
        </h1>

        <p className="text-gray-600 mb-8">
          Looks like you haven't added any delicious dishes to your cart yet.
          Start exploring our menu to find something you'll love!
        </p>

        <Link
          href="/menu"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
        >
          Browse Menu
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </div>
  );
}
