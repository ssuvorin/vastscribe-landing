'use client'

import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineCloudUpload, HiOutlineDocument, HiX } from 'react-icons/hi'

const UploadZone = () => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [showToast, setShowToast] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const droppedFiles = Array.from(e.dataTransfer.files)
    const audioFiles = droppedFiles.filter(file => 
      file.type.startsWith('audio/') || 
      file.name.match(/\.(mp3|wav|m4a|aac|ogg|flac)$/i)
    )
    
    if (audioFiles.length > 0) {
      setFiles(prev => [...prev, ...audioFiles])
      showComingSoonToast()
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    if (selectedFiles.length > 0) {
      setFiles(prev => [...prev, ...selectedFiles])
      showComingSoonToast()
    }
  }

  const showComingSoonToast = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Animated waveform for the Lottie replacement
  const WaveformAnimation = () => (
    <div className="flex items-center justify-center space-x-1">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-brand-500 to-accent rounded-full"
          animate={{
            height: [20, 40, 25, 35, 20, 45, 30, 25],
            opacity: [0.4, 1, 0.6, 0.8, 0.5, 1, 0.7, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )

  return (
    <>
      <div className="space-y-8">
        {/* Upload Zone */}
        <motion.div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative p-12 border-2 border-dashed rounded-2xl transition-all duration-300 ${
            isDragOver
              ? 'border-accent bg-accent/10 scale-105'
              : 'border-brand-500/50 bg-brand-500/5 hover:border-brand-500/70 hover:bg-brand-500/10'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Glow ring on drag over */}
          {isDragOver && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 to-brand-500/20 animate-pulse pointer-events-none" />
          )}

          <div className="text-center space-y-6">
            {/* Animation */}
            <div className="flex justify-center">
              {isDragOver ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-brand-600 flex items-center justify-center shadow-elevGlow"
                >
                  <HiOutlineCloudUpload className="w-12 h-12 text-white" />
                </motion.div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-500/20 to-accent/20 flex items-center justify-center">
                  <WaveformAnimation />
                </div>
              )}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {isDragOver ? 'Drop your files here' : 'Drag & drop your audio files'}
              </h3>
              <p className="text-gray-300 mb-4">
                or{' '}
                <label className="text-brand-400 hover:text-accent cursor-pointer transition-colors duration-300">
                  browse to choose files
                  <input
                    type="file"
                    multiple
                    accept="audio/*,.mp3,.wav,.m4a,.aac,.ogg,.flac"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
              </p>
              <p className="text-sm text-gray-400">
                Supports MP3, WAV, M4A, AAC, OGG, FLAC (max 100MB each)
              </p>
            </div>
          </div>
        </motion.div>

        {/* File List */}
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Uploaded Files</h4>
            <div className="space-y-3">
              {files.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-4 glassmorphism rounded-xl border border-white/10"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-accent rounded-lg flex items-center justify-center">
                      <HiOutlineDocument className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{file.name}</p>
                      <p className="text-sm text-gray-400">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300"
                  >
                    <HiX className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Process Button */}
            <motion.button
              onClick={showComingSoonToast}
              className="w-full py-4 bg-gradient-to-r from-brand-500 to-accent text-white font-semibold rounded-xl hover:-translate-y-1 hover:scale-105 shadow-elevGlow transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Transcription ({files.length} file{files.length !== 1 ? 's' : ''})
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Coming Soon Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 right-8 p-6 glassmorphism rounded-2xl border border-brand-500/50 shadow-elevGlow max-w-sm z-50"
        >
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <HiOutlineCloudUpload className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Coming Soon!</h4>
              <p className="text-gray-300 text-sm">
                Upload functionality is in development. Join our waitlist to be notified when it's ready.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default UploadZone 