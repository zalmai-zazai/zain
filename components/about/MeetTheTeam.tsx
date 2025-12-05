"use client";

import { motion } from "framer-motion";
import { ChefHat, Award, Coffee } from "lucide-react";

const teamMembers = [
  {
    name: "Zain Ahmed",
    role: "Head Chef & Owner",
    bio: "With over 20 years of culinary experience, Chef Zain brings traditional recipes to life with modern flair.",
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=400&fit=crop&crop=face",
    specialty: "Traditional Biryani",
    icon: <ChefHat className="text-amber-500" size={20} />,
  },
  {
    name: "Sarah Johnson",
    role: "Pastry Chef",
    bio: "Creates our signature desserts that keep guests coming back for just one more bite.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop&crop=face",
    specialty: "Gulab Jamun",
    icon: <Award className="text-amber-500" size={20} />,
  },
  {
    name: "Michael Chen",
    role: "Sous Chef",
    bio: "Expert in Tandoori cuisine and our daily specials. Passionate about spice blends.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    specialty: "Tandoori Specialties",
    icon: <Coffee className="text-amber-500" size={20} />,
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-amber-600">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate people behind every delicious dish
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 text-amber-600 mb-3">
                  {member.icon}
                  <span className="font-medium">{member.role}</span>
                </div>

                <p className="text-gray-600 mb-4">{member.bio}</p>

                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-50 rounded-full">
                  <span className="text-sm text-gray-700">Specialty:</span>
                  <span className="font-semibold text-amber-600">
                    {member.specialty}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
