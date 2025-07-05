import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, Clock, Target, Star } from 'lucide-react'

const YogaPage = () => {
  const poses = [
    {
      id: 1,
      name: "Vrksasana",
      englishName: "Tree Pose",
      description: "A classic standing posture that establishes strength and balance, and helps you feel centered.",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Beginner",
      duration: "30-60 seconds",
      benefits: ["Balance", "Focus", "Leg Strength"]
    },
    {
      id: 2,
      name: "Adho Mukha Svanasana",
      englishName: "Downward Dog",
      description: "It strengthens the core and improves circulation, while providing full-body stretch.",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Beginner",
      duration: "1-3 minutes",
      benefits: ["Full Body", "Circulation", "Core Strength"]
    },
    {
      id: 3,
      name: "Balasana",
      englishName: "Child's Pose",
      description: "Balasana is a restful pose that can be sequenced between more challenging asanas.",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Beginner",
      duration: "1-5 minutes",
      benefits: ["Relaxation", "Hip Flexibility", "Stress Relief"]
    },
    {
      id: 4,
      name: "Tadasana",
      englishName: "Mountain Pose",
      description: "The foundation of all standing poses. It makes a resting pose, or tool to improve posture.",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Beginner",
      duration: "30 seconds - 1 minute",
      benefits: ["Posture", "Grounding", "Awareness"]
    },
    {
      id: 5,
      name: "Trikonasana",
      englishName: "Triangle Pose",
      description: "It is a quintessential standing pose that stretches and strengthens the whole body.",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Intermediate",
      duration: "30 seconds each side",
      benefits: ["Side Body", "Hamstrings", "Balance"]
    },
    {
      id: 6,
      name: "Virabhadrasana",
      englishName: "Warrior Pose",
      description: "It is a foundational yoga pose that balances flexibility and strength in true warrior fashion.",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400",
      difficulty: "Intermediate",
      duration: "30-60 seconds each side",
      benefits: ["Leg Strength", "Hip Flexibility", "Confidence"]
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

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
              YOGA
              <span className="block text-yoga-mint diagonal-text">POSES</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master fundamental yoga poses with AI-powered guidance and real-time feedback
            </p>
          </motion.div>
        </div>
      </section>

      {/* Poses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poses.map((pose, index) => (
              <motion.div
                key={pose.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="yoga-card overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={pose.image}
                      alt={pose.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Play Button Overlay */}
                    <Link to="/practice">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform">
                          <Play className="h-8 w-8 text-yoga-mint" />
                        </div>
                      </div>
                    </Link>

                    {/* Difficulty Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(pose.difficulty)}`}>
                        {pose.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-gray-900 mb-1">
                        {pose.name}
                      </h3>
                      <p className="text-sm text-yoga-mint font-medium">
                        {pose.englishName}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pose.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{pose.duration}</span>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Target className="h-4 w-4" />
                        <span>Benefits:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {pose.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-yoga-mint/10 text-yoga-mint text-xs rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Practice Button */}
                    <Link to="/practice">
                      <button className="w-full mt-4 bg-yoga-mint text-white py-3 rounded-lg font-medium hover:bg-yoga-sage transition-colors transform hover:scale-105 flex items-center justify-center space-x-2">
                        <Play className="h-4 w-4" />
                        <span>Practice Now</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
              Tips for Better Practice
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Star className="h-8 w-8 text-yoga-mint mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Listen to Your Body</h3>
                <p className="text-sm text-gray-600">Never force a pose. Yoga is about finding balance and comfort.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Star className="h-8 w-8 text-yoga-mint mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Focus on Breathing</h3>
                <p className="text-sm text-gray-600">Coordinate your breath with movement for better flow and relaxation.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Star className="h-8 w-8 text-yoga-mint mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Practice Regularly</h3>
                <p className="text-sm text-gray-600">Consistency is key. Even 10 minutes daily can make a difference.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default YogaPage