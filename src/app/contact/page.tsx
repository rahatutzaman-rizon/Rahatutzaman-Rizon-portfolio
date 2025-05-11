"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useAnimation, type Variants } from "framer-motion"
import emailjs from "emailjs-com"
import {
  FaUser,
  FaEnvelope,
  FaCommentAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedinIn,
} from "react-icons/fa"
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
  const [activeField, setActiveField] = useState<string | null>(null)
  const form = useRef<HTMLFormElement>(null)

  // Animation controls
  const controls = useAnimation()
  const leftControls = useAnimation()
  const rightControls = useAnimation()

  // Safely load animation data on client side only
  const [animationData, setAnimationData] = useState<object | null>(null)

  // Handle client-side loading
  useEffect(() => {
    setIsClient(true)
    // Import animation data dynamically
    import("./contact.json")
      .then((module) => setAnimationData(module.default))
      .catch((err) => console.error("Error loading animation:", err))

    // Start the animations
    controls.start("visible")
    leftControls.start("visible")
    rightControls.start("visible")
  }, [controls, leftControls, rightControls])

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

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName)
  }

  const handleBlur = () => {
    setActiveField(null)
  }

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const leftSideVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const rightSideVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  }

  const floatingIconVariants: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  const pulseVariants: Variants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  const buttonVariants: Variants = {
    hidden: { scale: 1 },
    visible: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(0, 149, 255, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  }

  const formFieldVariants: Variants = {
    inactive: {
      borderColor: "rgba(30, 64, 175, 0.3)",
      boxShadow: "0 0 0 rgba(0, 149, 255, 0)",
    },
    active: {
      borderColor: "rgba(59, 130, 246, 0.8)",
      boxShadow: "0 0 15px rgba(0, 149, 255, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-950 to-black p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 18,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[10%] w-24 h-24 rounded-full bg-blue-600/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 12,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="w-full max-w-5xl bg-black/40 backdrop-blur-lg rounded-2xl shadow-[0_10px_50px_rgba(0,_149,_255,_0.5)] overflow-hidden border border-blue-500/20 relative z-10"
      >
        {/* Decorative line */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        />

        <div className="flex flex-col md:flex-row">
          {/* Left side - Contact Info */}
          <motion.div
            initial="hidden"
            animate={leftControls}
            variants={leftSideVariants}
            className="md:w-2/5 p-6 bg-gradient-to-br from-blue-950 to-black flex flex-col justify-between relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <motion.div
                className="absolute top-10 left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"
                variants={pulseVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.div
                className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-600/20 rounded-full blur-3xl"
                variants={pulseVariants}
                initial="hidden"
                animate="visible"
              />
            </div>

            <div className="relative z-10">
              <motion.div variants={itemVariants} className="mb-6">
                <motion.h2
                  className="text-4xl font-bold text-white tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Lets{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    Connect
                  </motion.span>
                </motion.h2>
                <motion.div
                  className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.div>

              <motion.p className="text-blue-100 mb-8 leading-relaxed text-sm" variants={itemVariants}>
                I am always open to new opportunities and collaborations. Feel free to reach out with any questions or
                ideas!
              </motion.p>

              <motion.div className="space-y-4" variants={itemVariants}>
                <motion.div
                  className="flex items-center text-white group"
                  whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mr-4 shadow-lg shadow-blue-900/50 group-hover:shadow-blue-500/50 transition-all duration-300"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaUser className="text-blue-100" />
                  </motion.div>
                  <span className="font-medium text-sm">Rahatutzaman Rizon</span>
                </motion.div>

                <motion.div
                  className="flex items-center text-white group"
                  whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mr-4 shadow-lg shadow-blue-900/50 group-hover:shadow-blue-500/50 transition-all duration-300"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaEnvelope className="text-blue-100" />
                  </motion.div>
                  <span className="font-medium text-sm">rizonrahat199@gmail.com</span>
                </motion.div>

                <motion.a
                  href="https://wa.me/8801771276400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white group"
                  whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mr-4 shadow-lg shadow-green-900/50 group-hover:shadow-green-500/50 transition-all duration-300"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaWhatsapp className="text-white" />
                  </motion.div>
                  <span className="font-medium text-sm group-hover:text-green-400 transition duration-300">
                    +880 1771 276400
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/rahatutzamanrizon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white group"
                  whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mr-4 shadow-lg shadow-blue-900/50 group-hover:shadow-blue-500/50 transition-all duration-300"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaLinkedinIn className="text-blue-100" />
                  </motion.div>
                  <span className="font-medium text-sm group-hover:text-blue-400 transition duration-300">
                    LinkedIn Profile
                  </span>
                </motion.a>

                <motion.div
                  className="flex items-center text-white group"
                  whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mr-4 shadow-lg shadow-blue-900/50 group-hover:shadow-blue-500/50 transition-all duration-300"
                    variants={floatingIconVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <FaMapMarkerAlt className="text-blue-100" />
                  </motion.div>
                  <span className="font-medium text-sm">Dhaka, Bangladesh</span>
                </motion.div>
              </motion.div>
            </div>

            <motion.div className="mt-4 relative z-10" variants={itemVariants} style={{ height: 120 }}>
              {/* Only render Lottie on client-side */}
              {isClient && animationData && (
                <Lottie animationData={animationData} loop={true} style={{ width: "100%", height: "100%" }} />
              )}
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial="hidden"
            animate={rightControls}
            variants={rightSideVariants}
            className="md:w-3/5 p-6 md:p-8 bg-gradient-to-br from-black to-blue-950 relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
                variants={pulseVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl"
                variants={pulseVariants}
                initial="hidden"
                animate="visible"
              />
            </div>

            <div className="relative z-10">
              <motion.div variants={itemVariants} className="mb-6">
                <motion.h3
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Send a Message
                </motion.h3>
                <motion.div
                  className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                />
              </motion.div>

              <motion.p className="text-blue-200/70 mb-6 text-sm" variants={itemVariants}>
                Fill out the form below and I wll get back to you as soon as possible.
              </motion.p>

              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  className="relative group"
                  variants={itemVariants}
                  animate={activeField === "name" ? "active" : "inactive"}
                >
                  <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center">
                    <FaUser className="text-blue-400 group-focus-within:text-blue-300 transition-colors duration-300" />
                  </div>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 bg-blue-950/30 text-white placeholder-blue-400/60 border border-blue-800/50 rounded-xl focus:outline-none transition duration-300 text-sm"
                    variants={formFieldVariants}
                  />
                </motion.div>

                <motion.div
                  className="relative group"
                  variants={itemVariants}
                  animate={activeField === "email" ? "active" : "inactive"}
                >
                  <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center">
                    <FaEnvelope className="text-blue-400 group-focus-within:text-blue-300 transition-colors duration-300" />
                  </div>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    required
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 bg-blue-950/30 text-white placeholder-blue-400/60 border border-blue-800/50 rounded-xl focus:outline-none transition duration-300 text-sm"
                    variants={formFieldVariants}
                  />
                </motion.div>

                <motion.div
                  className="relative group"
                  variants={itemVariants}
                  animate={activeField === "message" ? "active" : "inactive"}
                >
                  <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center">
                    <FaCommentAlt className="text-blue-400 group-focus-within:text-blue-300 transition-colors duration-300" />
                  </div>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    required
                    rows={4}
                    placeholder="Your Message"
                    className="w-full pl-10 pr-4 py-3 bg-blue-950/30 text-white placeholder-blue-400/60 border border-blue-800/50 rounded-xl focus:outline-none transition duration-300 resize-none text-sm"
                    variants={formFieldVariants}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-xl text-white font-medium
                    ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg"
                    } 
                    flex items-center justify-center transition-all duration-300`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
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
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: -4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <FaPaperPlane className="mr-2" />
                      </motion.div>
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
                    className={`mt-4 p-3 rounded-xl ${
                      submitStatus === "success"
                        ? "bg-green-900/30 border border-green-700/50 text-green-400"
                        : "bg-red-900/30 border border-red-700/50 text-red-400"
                    } flex items-center justify-center text-sm`}
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
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactForm
