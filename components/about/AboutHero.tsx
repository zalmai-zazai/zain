"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Zain.png"
            alt="Zain Restaurant Background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />

        {/* Subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-orange-900/10" />
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo - Glowing effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            className="inline-block mb-10"
          >
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center shadow-2xl mx-auto">
                <span className="text-white font-bold text-5xl">Z</span>
              </div>
              {/* Glowing ring */}
              <div className="absolute -inset-4 rounded-full border-4 border-amber-400/30 animate-ping" />
              <div className="absolute -inset-2 rounded-full border-2 border-amber-300/20" />
            </div>
          </motion.div>

          {/* Headline with glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white drop-shadow-lg">Our </span>
            <span className="text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
              Story
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-amber-50/90 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Since 2010, Zain Restaurant has been serving authentic cuisine with
            passion in the heart of Seatac. Our journey is one of tradition,
            flavor, and community.
          </motion.p>

          {/* Decorative line with glow */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "150px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="relative h-1 mx-auto mt-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300 to-transparent rounded-full blur-sm" />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <div className="flex flex-col items-center text-amber-200/70 text-sm">
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-2"
              >
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-transparent rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
