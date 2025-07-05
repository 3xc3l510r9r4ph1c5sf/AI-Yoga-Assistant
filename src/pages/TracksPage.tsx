import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Zap, Shield, Baby, Heart, Brain, Wind } from 'lucide-react'

const TracksPage = () => {
  const tracks = [
    {
      id: 1,
      title: "Beginners Track",
      description: "Perfect for those starting their yoga journey",
      icon: <Users className="h-8 w-8" />,
      color: "from-green-400 to-green-600",
      duration: "4 weeks",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Power Yoga Track",
      description: "High-intensity yoga for strength and endurance",
      icon: <Zap className="h-8 w-8" />,
      color: "from-orange-400 to-red-500",
      duration: "6 weeks",
      level: "Advanced"
    },
    {
      id: 3,
      title: "Immunity Booster Track",
      description: "Strengthen your immune system naturally",
      icon: <Shield className="h-8 w-8" />,
      color: "from-blue-400 to-blue-600",
      duration: "3 weeks",
      level: "Intermediate"
    },
    {
      id: 4,
      title: "Yoga in Pregnancy Track",
      description: "Safe and gentle yoga for expecting mothers",
      icon: <Baby className="h-8 w-8" />,
      color: "from-pink-400 to-pink-600",
      duration: "9 months",
      level: "Beginner"
    },
    {
      id: 5,
      title: "Cardiovascular Yoga Track",
      description: "Heart-healthy yoga sequences",
      icon: <Heart className="h-8 w-8" />,
      color: "from-red-400 to-red-600",
      duration: "5 weeks",
      level: "Intermediate"
    },
    {
      id: 6,
      title: "Yoga for Migraine Track",
      description: "Relieve tension and prevent headaches",
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-400 to-purple-600",
      duration: "4 weeks",
      level: "Beginner"
    },
    {
      id: 7,
      title: "Yoga for Asthma Track",
      description: "Breathing exercises for respiratory health",
      icon: <Wind className="h-8 w-8" />,
      color: "from-cyan-400 to-cyan-600",
      duration: "6 weeks",
      level: "Intermediate"
    }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yoga-mint/10 to-yoga-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-bauhaus text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              SELECT WHAT YOU
              <span className="block text-yoga-mint diagonal-text">NEED!</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our curated yoga tracks designed for different goals and skill levels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to="/yoga">
                  <div className="yoga-card p-8 h-full hover:scale-105 transition-all duration-300">
                    {/* Icon and Gradient Header */}
                    <div className={`w-full h-32 bg-gradient-to-r ${track.color} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-white relative z-10">
                        {track.icon}
                      </div>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${track.color} text-white`}>
                          {track.level}
                        </span>
                        <span className="text-sm text-gray-500">{track.duration}</span>
                      </div>
                      
                      <h3 className="font-display text-xl font-semibold text-gray-900 group-hover:text-yoga-mint transition-colors">
                        {track.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {track.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-full h-1 bg-gradient-to-r from-yoga-mint to-yoga-sage rounded-full"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Not sure which track to choose?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Take our quick assessment to find the perfect yoga track for your goals and experience level
            </p>
            <button className="bg-yoga-mint text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-yoga-sage transition-colors transform hover:scale-105">
              Take Assessment
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TracksPage