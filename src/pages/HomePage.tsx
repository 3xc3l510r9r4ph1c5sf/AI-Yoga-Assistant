import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "AI Pose Detection",
      description: "Real-time analysis of your yoga poses with precision feedback"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and charts"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Personalized Training",
      description: "Customized yoga routines based on your skill level and goals"
    }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section with Bauhaus-inspired layout */}
      <section className="relative overflow-hidden">
        <div className="bauhaus-grid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Main Title - Diagonal placement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: -15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-6 row-span-3 flex items-center justify-center"
            style={{ gridColumn: '1 / span 6', gridRow: '2 / span 3' }}
          >
            <h1 className="font-bauhaus text-6xl md:text-8xl font-bold text-yoga-mint transform -rotate-15 leading-none">
              AI YOGA
              <span className="block text-4xl md:text-5xl text-gray-800 mt-2">
                TRAINER
              </span>
            </h1>
          </motion.div>

          {/* Subtitle Block */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-5 row-span-2 bg-yoga-sage text-white p-6 transform rotate-3"
            style={{ gridColumn: '7 / span 5', gridRow: '1 / span 2' }}
          >
            <p className="font-modern text-lg leading-relaxed">
              Your Personal AI Yoga Trainer at home to keep you fit and healthy. 
              Advanced pose detection with real-time feedback.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-4 row-span-2 flex items-center justify-center"
            style={{ gridColumn: '8 / span 4', gridRow: '5 / span 2' }}
          >
            <Link
              to="/tracks"
              className="group bg-black text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-yoga-mint transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>Let's Start</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="col-span-2 row-span-2 bg-yoga-sunset rounded-full flex items-center justify-center transform -rotate-12"
            style={{ gridColumn: '2 / span 2', gridRow: '6 / span 2' }}
          >
            <span className="font-bauhaus text-white text-2xl font-bold">2025</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="col-span-3 row-span-1 bg-yoga-ocean transform skew-x-12 flex items-center justify-center"
            style={{ gridColumn: '4 / span 3', gridRow: '7 / span 1' }}
          >
            <span className="font-modern text-white font-medium">AI POWERED</span>
          </motion.div>
        </div>

        {/* Floating Yoga Pose Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
        >
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Yoga Pose"
              className="w-80 h-96 object-cover rounded-3xl shadow-2xl animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yoga-mint/20 to-transparent rounded-3xl"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Yoga Assistant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of yoga training with our advanced AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="yoga-card p-8 text-center group hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yoga-mint/10 rounded-full mb-6 group-hover:bg-yoga-mint/20 transition-colors">
                  <div className="text-yoga-mint">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gradient-to-r from-yoga-mint to-yoga-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="font-display text-4xl font-bold mb-6">
              See AI Yoga in Action
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Watch how our AI analyzes and improves your yoga practice
            </p>
            <div className="inline-flex items-center space-x-4">
              <button className="group bg-white text-yoga-mint px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
              <Link
                to="/practice"
                className="text-white hover:text-gray-200 font-medium underline underline-offset-4"
              >
                Try it yourself →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage