import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Camera, CameraOff, BarChart3, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react'

const PracticePage = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [accuracy, setAccuracy] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [poseDetected, setPoseDetected] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Simulated pose detection data
  const [poseData, setPoseData] = useState({
    rightArm: 0,
    leftArm: 0,
    rightLeg: 0,
    leftLeg: 0
  })

  useEffect(() => {
    if (isRecording) {
      // Simulate real-time pose detection updates
      const interval = setInterval(() => {
        const newAccuracy = Math.floor(Math.random() * 40) + 60 // 60-100%
        setAccuracy(newAccuracy)
        
        // Simulate pose data
        setPoseData({
          rightArm: Math.floor(Math.random() * 20) + 180,
          leftArm: Math.floor(Math.random() * 20) + 160,
          rightLeg: Math.floor(Math.random() * 20) + 170,
          leftLeg: Math.floor(Math.random() * 20) + 175
        })

        // Generate feedback based on accuracy
        if (newAccuracy >= 85) {
          setFeedback('Excellent! Your pose is very accurate.')
          setPoseDetected(true)
        } else if (newAccuracy >= 70) {
          setFeedback('Good form! Try to align your arms better.')
          setPoseDetected(true)
        } else {
          setFeedback('Adjust your posture. Focus on balance.')
          setPoseDetected(false)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isRecording])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing camera:', error)
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach(track => track.stop())
    }
    setIsRecording(false)
    setAccuracy(0)
    setFeedback('')
    setPoseDetected(false)
  }

  const getAccuracyColor = (acc: number) => {
    if (acc >= 85) return 'text-green-600'
    if (acc >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getAccuracyBg = (acc: number) => {
    if (acc >= 85) return 'bg-green-500'
    if (acc >= 70) return 'bg-yellow-500'
    return 'bg-red-500'
  }

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
              VRKSASANA
              <span className="block text-2xl text-yoga-mint font-normal">Tree Pose Practice</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yoga-mint to-yoga-sage mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Practice Area */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Reference Pose */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="yoga-card p-6">
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                  Reference Pose
                </h3>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Vrksasana Reference"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
                
                {/* Pose Instructions */}
                <div className="mt-6 space-y-3">
                  <h4 className="font-medium text-gray-900">Key Points:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Stand tall with feet hip-width apart</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Shift weight to left foot, lift right foot</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Place right foot on inner left thigh</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Bring palms together at heart center</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Live Camera Feed */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="yoga-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-semibold text-gray-900">
                    Your Practice
                  </h3>
                  <div className="flex items-center space-x-4">
                    {!isRecording ? (
                      <button
                        onClick={startCamera}
                        className="flex items-center space-x-2 bg-yoga-mint text-white px-4 py-2 rounded-lg hover:bg-yoga-sage transition-colors"
                      >
                        <Camera className="h-4 w-4" />
                        <span>Start Camera</span>
                      </button>
                    ) : (
                      <button
                        onClick={stopCamera}
                        className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <CameraOff className="h-4 w-4" />
                        <span>Stop Camera</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Video Container */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                  {isRecording ? (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="w-full h-full object-cover"
                      />
                      <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full"
                      />
                      
                      {/* Pose Detection Overlay */}
                      {poseDetected && (
                        <div className="absolute top-4 left-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Pose Detected
                        </div>
                      )}
                      
                      {/* Accuracy Display */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${getAccuracyColor(accuracy)}`}>
                            {accuracy}%
                          </div>
                          <div className="text-xs">Accuracy</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p>Click "Start Camera" to begin practice</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Real-time Feedback */}
                {isRecording && feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900">AI Feedback</h4>
                        <p className="text-blue-700 mt-1">{feedback}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Pose Analytics */}
          {isRecording && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <div className="yoga-card p-6">
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-6">
                  Real-time Pose Analysis
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Right Arm', value: poseData.rightArm, target: 201 },
                    { label: 'Left Arm', value: poseData.leftArm, target: 162 },
                    { label: 'Right Leg', value: poseData.rightLeg, target: 177 },
                    { label: 'Left Leg', value: poseData.leftLeg, target: 182 }
                  ].map((item, index) => {
                    const accuracy = Math.max(0, 100 - Math.abs(item.value - item.target) * 2)
                    return (
                      <div key={index} className="text-center">
                        <div className="mb-2">
                          <div className="text-sm font-medium text-gray-700">{item.label}</div>
                          <div className="text-lg font-bold text-gray-900">{item.value}°</div>
                          <div className="text-xs text-gray-500">Target: {item.target}°</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${getAccuracyBg(accuracy)}`}
                            style={{ width: `${accuracy}%` }}
                          ></div>
                        </div>
                        <div className={`text-xs mt-1 font-medium ${getAccuracyColor(accuracy)}`}>
                          {Math.round(accuracy)}%
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/charts"
                className="flex items-center justify-center space-x-2 bg-yoga-sage text-white px-6 py-3 rounded-lg hover:bg-yoga-mint transition-colors"
              >
                <BarChart3 className="h-5 w-5" />
                <span>View Detailed Analytics</span>
              </Link>
              <button className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                <RefreshCw className="h-5 w-5" />
                <span>Try Another Pose</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PracticePage