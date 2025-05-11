"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "emailjs-com"
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import dynamic from "next/dynamic"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)
  const [isClient, setIsClient] = useState<boolean>(false)
  const form = useRef<HTMLFormElement>(null)

  // Safely load animation data on client side only
  const [animationData, setAnimationData] = useState<object | null>(null)

  // Handle client-side loading
  useEffect(() => {
    setIsClient(true)
    // Import animation data dynamically
    import("./contact.json")
      .then((module) => setAnimationData(module.default))
      .catch((err) => console.error("Error loading animation:", err))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm("service_t14ijf2", "template_s1dxxj8", form.current!, "Y4FN7ZSrW0VCQal-t")
      .then(() => {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      })
      .catch(() => {
        setSubmitStatus("error")
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-6 md:p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-5xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden border border-white/10"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Contact Info */}
          <motion.div
            className="md:w-2/5 p-8 bg-gradient-to-br from-purple-900 to-indigo-900 flex flex-col justify-between relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <motion.h2 className="text-4xl font-bold text-white mb-6 tracking-tight" variants={itemVariants}>
                Let's Connect
              </motion.h2>
              <motion.p className="text-purple-100 mb-10 leading-relaxed" variants={itemVariants}>
                I am always open to new opportunities and collaborations. Feel free to reach out with any questions or
                ideas!
              </motion.p>
              <motion.div className="space-y-6" variants={itemVariants}>
                <motion.div
                  className="flex items-center text-white group"
                  whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-700/30 flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors duration-300">
                    <FaUser className="text-purple-200" />
                  </div>
                  <span className="font-medium">Rahatutzaman Rizon</span>
                </motion.div>

                <motion.div
                  className="flex items-center text-white group"
                  whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-700/30 flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors duration-300">
                    <FaEnvelope className="text-purple-200" />
                  </div>
                  <span className="font-medium">rizonrahat199@gmail.com</span>
                </motion.div>

                <motion.div
                  className="flex items-center text-white group"
                  whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-700/30 flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors duration-300">
                    <FaPhone className="text-purple-200" />
                  </div>
                  <a
                    href="tel:+8801771276400"
                    className="font-medium group-hover:text-purple-300 transition duration-300"
                  >
                    +880 1771 276400
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center text-white group"
                  whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className="w-10 h-10 rounded-full bg-purple-700/30 flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-purple-200" />
                  </div>
                  <span className="font-medium">Dhaka, Bangladesh</span>
                </motion.div>
              </motion.div>
            </div>

            <motion.div className="mt-8 relative z-10" variants={itemVariants}>
              {/* Only render Lottie on client-side */}
              {isClient && animationData && (
                <Lottie animationData={animationData} loop={true} style={{ width: "100%", height: "180px" }} />
              )}
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            className="md:w-3/5 p-8 md:p-10 bg-gradient-to-br from-gray-900 to-gray-800"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <motion.div className="relative group" variants={itemVariants}>
                <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center">
                  <FaUser className="text-purple-400 group-focus-within:text-purple-300 transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 text-white placeholder-gray-400 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                />
              </motion.div>

              <motion.div className="relative group" variants={itemVariants}>
                <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center">
                  <FaEnvelope className="text-purple-400 group-focus-within:text-purple-300 transition-colors duration-300" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 text-white placeholder-gray-400 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                />
              </motion.div>

              <motion.div className="relative group" variants={itemVariants}>
                <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center">
                  <FaCommentAlt className="text-purple-400 group-focus-within:text-purple-300 transition-colors duration-300" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 text-white placeholder-gray-400 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl text-white font-medium text-lg
                  ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30"
                  } 
                  flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                variants={itemVariants}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-6 p-4 rounded-xl ${
                    submitStatus === "success"
                      ? "bg-green-900/30 border border-green-700/50 text-green-400"
                      : "bg-red-900/30 border border-red-700/50 text-red-400"
                  } flex items-center justify-center`}
                >
                  <div
                    className={`w-6 h-6 rounded-full ${
                      submitStatus === "success" ? "bg-green-500/20" : "bg-red-500/20"
                    } flex items-center justify-center mr-3`}
                  >
                    {submitStatus === "success" ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    )}
                  </div>
                  {submitStatus === "success"
                    ? "Your message has been sent successfully!"
                    : "An error occurred. Please try again later."}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactForm
