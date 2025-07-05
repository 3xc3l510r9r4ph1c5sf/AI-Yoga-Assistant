import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
import { TrendingUp, Target, Clock, Award } from 'lucide-react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

const ChartsPage = () => {
  // Sample data - in real app this would come from your backend
  const accuracyData = {
    labels: ['5s', '10s', '15s', '20s', '25s', '30s', '35s', '40s', '45s', '50s'],
    datasets: [
      {
        label: 'Right Arm',
        data: [89, 56, 76, 78, 73, 89, 73, 78, 85, 92],
        borderColor: 'rgb(74, 210, 149)',
        backgroundColor: 'rgba(74, 210, 149, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Left Arm',
        data: [60, 70, 78, 90, 89, 40, 69, 76, 82, 88],
        borderColor: 'rgb(127, 176, 105)',
        backgroundColor: 'rgba(127, 176, 105, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Right Leg',
        data: [56, 78, 56, 78, 89, 76, 90, 96, 87, 91],
        borderColor: 'rgb(255, 107, 107)',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Left Leg',
        data: [30, 25, 84, 76, 10, 40, 70, 20, 75, 85],
        borderColor: 'rgb(78, 205, 196)',
        backgroundColor: 'rgba(78, 205, 196, 0.1)',
        tension: 0.4,
      },
    ],
  }

  const overallAccuracyData = {
    labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4', 'Session 5'],
    datasets: [
      {
        label: 'Overall Accuracy',
        data: [67, 78, 68, 89, 85],
        backgroundColor: 'rgba(74, 210, 149, 0.8)',
        borderColor: 'rgb(74, 210, 149)',
        borderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Real-time Pose Accuracy',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  }

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Session Progress',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  }

  const stats = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Average Accuracy",
      value: "78%",
      change: "+12%",
      color: "text-green-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Practice Time",
      value: "45 min",
      change: "+5 min",
      color: "text-blue-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Improvement",
      value: "23%",
      change: "+8%",
      color: "text-purple-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Poses Mastered",
      value: "4",
      change: "+2",
      color: "text-orange-600"
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-bauhaus text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ANALYTICS
              <span className="block text-2xl text-yoga-mint font-normal">Your Yoga Progress</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yoga-mint to-yoga-sage mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="yoga-card p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${stat.color}`}>
                  {stat.change} from last week
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Real-time Accuracy Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="yoga-card p-6"
            >
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-6">
                Real-time Pose Analysis
              </h3>
              <div className="h-80">
                <Line data={accuracyData} options={chartOptions} />
              </div>
              
              {/* Session Details */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Current Session Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Pose:</span>
                    <span className="ml-2 font-medium">Vrksasana</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <span className="ml-2 font-medium">50 seconds</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Accuracy:</span>
                    <span className="ml-2 font-medium text-green-600">85%</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Status:</span>
                    <span className="ml-2 font-medium text-green-600">Excellent</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Session Progress Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="yoga-card p-6"
            >
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-6">
                Session Progress
              </h3>
              <div className="h-80">
                <Bar data={overallAccuracyData} options={barChartOptions} />
              </div>
              
              {/* Progress Details */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Progress Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Session:</span>
                    <span className="font-medium">Session 4 (89%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average:</span>
                    <span className="font-medium">77.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Improvement:</span>
                    <span className="font-medium text-green-600">+18% overall</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 yoga-card p-6"
          >
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-6">
              Pose Accuracy Breakdown
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { part: 'Right Arm', accuracy: 85, target: 201, current: 195 },
                { part: 'Left Arm', accuracy: 78, target: 162, current: 158 },
                { part: 'Right Leg', accuracy: 92, target: 177, current: 179 },
                { part: 'Left Leg', accuracy: 88, target: 182, current: 185 }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-medium text-gray-900 mb-3">{item.part}</h4>
                  
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-200"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.accuracy / 100)}`}
                        className="text-yoga-mint transition-all duration-500"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">{item.accuracy}%</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Target: {item.target}°</div>
                    <div>Current: {item.current}°</div>
                    <div className="font-medium text-yoga-mint">
                      {Math.abs(item.target - item.current)}° off
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 yoga-card p-6"
          >
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-6">
              AI Recommendations
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Areas to Improve</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-yellow-800">Left Arm Alignment</div>
                      <div className="text-sm text-yellow-700">Focus on raising your left arm higher for better balance</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-blue-800">Core Engagement</div>
                      <div className="text-sm text-blue-700">Strengthen your core for better stability in standing poses</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Strengths</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-green-800">Right Leg Position</div>
                      <div className="text-sm text-green-700">Excellent stability and positioning</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium text-green-800">Overall Balance</div>
                      <div className="text-sm text-green-700">Great improvement in maintaining pose duration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ChartsPage