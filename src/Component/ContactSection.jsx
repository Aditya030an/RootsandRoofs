"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaPhoneAlt, FaEnvelope, FaSpinner } from "react-icons/fa";

const ContactFormModal = ({
  isOpen,
  onClose,
  formData,
  setFormData,
  handleSubmit,
  errors,
  loading,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          {/* Background click closes modal */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Form Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl shadow-2xl w-[90%] md:w-[500px] p-8 z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-800 mb-4 text-center"
            >
              Let’s Talk
            </motion.h2>

            <p className="text-gray-600 text-center mb-6">
              Share your details and we'll call you back shortly.
            </p>

            {/* Form */}
            <motion.form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="space-y-5"
            >
              {/* Name */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative"
              >
                <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                />
                {errors?.name && (
                  <p className="text-red-500 text-sm">{errors?.name}</p>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative"
              >
                <FaPhoneAlt className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative"
              >
                <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </motion.div>

              <motion.textarea
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
                placeholder="Your Message"
                className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold py-3 rounded-xl shadow-lg hover:shadow-green-300 transition-all"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span className="ml-2">Loading...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FaPhoneAlt className="mr-2" />
                    <span>Request Callback</span>
                  </div>
                )}
                {/* {
                  loading ? (
                    <div className="flex items-center justify-center">
                      <FaSpinner className="animate-spin mr-2" />
                      <span>Loading...</span>
                    </div>
                  ) : (
                    (
                      <div className="flex items-center justify-center">
                        <FaPhoneAlt className="mr-2" />
                        <span>Request Callback</span>
                      </div>
                  )
                  )
                } */}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
