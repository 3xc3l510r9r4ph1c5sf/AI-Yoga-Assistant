import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Target, TrendingUp, Users, Clock, Award, Activity } from 'lucide-react'

const HomePage = () => {
  const metrics = [
    {
      icon: <Target className="h-8 w-8 text-black" />,
      title: "Active Sessions",
      value: "24",
      change: "+12%",
      description: "This week"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-black" />,
      title: "Avg Accuracy",
      value: "87%",
      change: "+5%",
      description: "Improvement"
    },
    {
      icon: <Users className="h-8 w-8 text-black" />,
      title: "Poses Mastered",
      value: "6",
      change: "+2",
      description: "New poses"
    },
    {
      icon: <Clock className="h-8 w-8 text-black" />,
      title: "Practice Time",
      value: "45m",
      change: "+15m",
      description: "Daily average"
    }
  ]

  const quickActions = [
    {
      title: "Start Practice",
      description: "Begin your yoga session",
      icon: <Play className="h-6 w-6" />,
      path: "/practice",
      color: "bg-black"
    },
    {
      title: "View Analytics",
      description: "Check your progress",
      icon: <TrendingUp className="h-6 w-6" />,
      path: "/charts",
      color: "bg-gray-800"
    },
    {
      title: "Browse Poses",
      description: "Explore yoga poses",
      icon: <Activity className="h-6 w-6" />,
      path: "/yoga",
      color: "bg-gray-700"
    }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Dashboard Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-bold-black text-5xl md:text-6xl mb-4 tracking-tight">
              YOGA DASHBOARD
            </h1>
            <p className="text-semi-black text-xl max-w-3xl mx-auto">
              Monitor your practice, track progress, and achieve your wellness goals
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="dashboard-grid mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="metric-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    {metric.icon}
                  </div>
                  <span className="text-bold-black text-sm">
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-bold-black text-3xl mb-1">
                  {metric.value}
                </h3>
                <p className="text-semi-black text-sm mb-1">
                  {metric.title}
                </p>
                <p className="text-gray-700 text-xs font-bold">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8 mb-12"
          >
            <h2 className="text-bold-black text-2xl mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.path}
                  className="group"
                >
                  <div className={`${action.color} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300`}>
                    <div className="flex items-center space-x-3 mb-3">
                      {action.icon}
                      <h3 className="font-black text-lg">{action.title}</h3>
                    </div>
                    <p className="text-white/80 font-bold text-sm">
                      {action.description}
                    </p>
                    <ArrowRight className="h-5 w-5 mt-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card p-8"
          >
            <h2 className="text-bold-black text-2xl mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { pose: "Vrksasana", accuracy: "92%", time: "2 hours ago" },
                { pose: "Trikonasana", accuracy: "87%", time: "1 day ago" },
                { pose: "Balasana", accuracy: "95%", time: "2 days ago" },
                { pose: "Virabhadrasana", accuracy: "84%", time: "3 days ago" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div>
                    <h3 className="text-bold-black">{activity.pose}</h3>
                    <p className="text-gray-700 text-sm font-bold">{activity.time}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-bold-black text-lg">{activity.accuracy}</div>
                    <div className="text-gray-700 text-xs font-bold">Accuracy</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage