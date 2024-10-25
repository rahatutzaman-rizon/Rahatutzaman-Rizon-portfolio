'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from 'emailjs-com'
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane, FaPhone } from 'react-icons/fa'
import Lottie from 'lottie-react'
import contactAnimation from './contact.json'

interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)
  const form = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.sendForm(
      'service_t14ijf2',
      'template_s1dxxj8',
      form.current!,
      'Y4FN7ZSrW0VCQal-t'
    )
      .then(() => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setSubmitStatus('error')
      })
      .finally(() => {
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(null), 5000)
      })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <motion.div 
            className="md:w-1/2 p-8 bg-gradient-to-br from-black to-indigo-800 flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <motion.h2 
                className="text-4xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Lets Connect
              </motion.h2>
              <motion.p
                className="text-gray-200 mb-8"
                variants={itemVariants}
              >
                I am always open to new opportunities and collaborations. Feel free to reach out!
              </motion.p>
              <motion.div
                className="space-y-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center text-gray-200"
                  whileHover={{ x: 10, transition: { type: 'spring', stiffness: 300 } }}
                >
                  <FaUser className="mr-3" />
                  <span>Rahatutzaman Rizon</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-gray-200"
                  whileHover={{ x: 10, transition: { type: 'spring', stiffness: 300 } }}
                >
                  <FaEnvelope className="mr-3" />
                  <span>rizonrahat199@gmail.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-gray-200"
                  whileHover={{ x: 10, transition: { type: 'spring', stiffness: 300 } }}
                >
                  <FaPhone className="mr-3" />
                  <a href="tel:+8801771276400" className="hover:text-purple-400 transition duration-300">
                    +880 1771 276400
                  </a>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="mt-8"
              variants={itemVariants}
            >
              <Lottie 
                animationData={contactAnimation} 
                loop={true}
                style={{ width: '100%', height: '200px' }}
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 p-8"
            variants={itemVariants}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </motion.div>
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </motion.div>
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <FaCommentAlt className="absolute top-3 left-3 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center justify-center transition duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
            <AnimatePresence>
              {submitStatus && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-4 text-center ${
                    submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {submitStatus === 'success'
                    ? 'Message sent successfully!'
                    : 'An error occurred. Please try again.'}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactForm;