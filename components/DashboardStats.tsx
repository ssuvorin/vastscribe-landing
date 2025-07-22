'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  HiOutlineDocument, 
  HiOutlineClock, 
  HiOutlineChartBar, 
  HiOutlineSparkles 
} from 'react-icons/hi'

const DashboardStats = () => {
  const [counts, setCounts] = useState({
    transcriptions: 0,
    hours: 0,
    accuracy: 0,
    words: 0,
  })

  const targetValues = {
    transcriptions: 47,
    hours: 23.5,
    accuracy: 99.2,
    words: 125000,
  }

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepTime = duration / steps

      Object.keys(targetValues).forEach((key) => {
        const target = targetValues[key as keyof typeof targetValues]
        const increment = target / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setCounts(prev => ({
            ...prev,
            [key]: current
          }))
        }, stepTime)
      })
    }

    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      name: 'Total Transcriptions',
      value: Math.floor(counts.transcriptions),
      icon: HiOutlineDocument,
      color: 'from-blue-500 to-cyan-500',
      suffix: '',
    },
    {
      name: 'Hours Processed',
      value: counts.hours.toFixed(1),
      icon: HiOutlineClock,
      color: 'from-green-500 to-emerald-500',
      suffix: 'h',
    },
    {
      name: 'Avg. Accuracy',
      value: counts.accuracy.toFixed(1),
      icon: HiOutlineChartBar,
      color: 'from-purple-500 to-pink-500',
      suffix: '%',
    },
    {
      name: 'Words Generated',
      value: (counts.words / 1000).toFixed(0),
      icon: HiOutlineSparkles,
      color: 'from-brand-500 to-accent',
      suffix: 'K',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group p-6 glassmorphism rounded-2xl border border-white/10 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-20`}>
              <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                {stat.value}
                <span className="text-sm font-normal text-gray-400 ml-1">
                  {stat.suffix}
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
              {stat.name}
            </h3>
            <div className="mt-2 flex items-center text-xs text-green-400">
              <span>↗</span>
              <span className="ml-1">+12% from last month</span>
            </div>
          </div>

          {/* Animated progress bar */}
          <div className="mt-4 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default DashboardStats 