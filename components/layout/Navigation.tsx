"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "px-4 py-2 rounded-lg font-medium transition-all duration-300",
            pathname === item.href
              ? "text-amber-600 bg-amber-50"
              : "text-gray-600 hover:text-amber-600 hover:bg-amber-50"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
