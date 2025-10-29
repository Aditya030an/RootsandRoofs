import React from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaHome, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ServicesHighlight = () => {
  const navigate = useNavigate();

  const handleServiceClick = (sectionId) => {
    // Navigate to services page with section ID as hash
    navigate('/Services', { state: { scrollTo: sectionId } });
  };

  const services = [
    {
      icon: FaCalculator,
      title: "EMI Calculator",
      description: "Calculate your monthly EMI payments instantly with our easy-to-use calculator",
      features: [
        "Instant Calculations",
        "Detailed Breakdown",
        "Multiple Loan Options",
        "Interest Comparison"
      ],
      color: "from-blue-500 to-blue-600",
      sectionId: "emi-calculator"
    },
    {
      icon: FaChartLine,
      title: "Loan Calculator",
      description: "Plan your finances better with accurate loan calculations and projections",
      features: [
        "Flexible Terms",
        "Interest Rate Analysis",
        "Amortization Schedule",
        "Compare Lenders"
      ],
      color: "from-green-500 to-green-600",
      sectionId: "loan-calculator",
      featured: true
    },
    {
      icon: FaHome,
      title: "Area Calculator",
      description: "Convert and calculate property areas with precision for better decisions",
      features: [
        "Unit Conversions",
        "Carpet vs Built-up",
        "Plot Calculations",
        "Instant Results"
      ],
      color: "from-purple-500 to-purple-600",
      sectionId: "area-calculator"
    }
  ];

  return (
    <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[tinos] text-gray-900 mb-4">
            Smart Tools for Smart Decisions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Make informed property decisions with our powerful calculators designed to simplify your journey
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                service.featured ? 'md:scale-105 border-2 border-green-500' : 'border border-gray-200'
              }`}>
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-3xl text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-[tinos]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleServiceClick(service.sectionId)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300`}
                  >
                    Try Calculator
                  </motion.button>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Need help choosing the right property?
          </p>
          <motion.button
            onClick={() => navigate('/Services')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            Talk to an Expert
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHighlight;