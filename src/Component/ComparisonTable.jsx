import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const rentServices = [
  { name: "Renting Price Guidance", nestaway: true, portal: false, agent: false },
  { name: "Online Marketing on own website", nestaway: true, portal: true, agent: false },
  { name: "Online Marketing on multiple websites", nestaway: true, portal: false, agent: true },
  { name: "Offline Marketing in & around the house", nestaway: true, portal: false, agent: true },
  { name: "Physical House Visits for Tenants", nestaway: true, portal: false, agent: true },
  { name: "Virtual House Tours for Tenants", nestaway: true, portal: true, agent: false },
  { name: "Tenant Background Verification", nestaway: true, portal: false, agent: false },
  { name: "Rent Agreement & Paperwork", nestaway: true, portal: false, agent: true },
  { name: "Rent Collection & Remittance", nestaway: true, portal: false, agent: false },
  { name: "Deposit Management & Refund", nestaway: true, portal: false, agent: false },
  { name: "Move-in & Move-out Video Reports", nestaway: true, portal: false, agent: false },
  { name: "Property Maintenance & Repairs", nestaway: true, portal: false, agent: false },
  { name: "Dedicated Relationship Manager", nestaway: true, portal: false, agent: true },
  { name: "App-based assistance from anywhere", nestaway: true, portal: false, agent: false },
];

const sellServices = [
  { name: "Best Price Guidance", nestaway: true, portal: false, agent: false },
  { name: "Online Marketing on own website", nestaway: true, portal: true, agent: false },
  { name: "Online Marketing on multiple websites", nestaway: true, portal: false, agent: true },
  { name: "Offline Marketing in & around the house", nestaway: true, portal: false, agent: true },
  { name: "Physical House Visits", nestaway: true, portal: false, agent: true },
  { name: "Virtual House Tours for Buyers", nestaway: true, portal: true, agent: false },
  { name: "Expert Negotiation Support", nestaway: true, portal: false, agent: false },
  { name: "Agreement & Paperwork", nestaway: true, portal: false, agent: true },
  { name: "Hassle-free registration Support", nestaway: true, portal: false, agent: false },
  { name: "App-based assistance from anywhere", nestaway: true, portal: false, agent: false },
];

const ComparisonTable = () => {
  const [activeTab, setActiveTab] = useState("rent");
  const navigate = useNavigate();

  const currentServices = activeTab === "rent" ? rentServices : sellServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex mb-8 bg-white rounded-lg shadow-md overflow-hidden max-w-md">
          <button
            onClick={() => setActiveTab("rent")}
            className={`flex-1 py-4 px-6 font-semibold text-lg transition-all duration-300 ${
              activeTab === "rent"
                ? "bg-gradient-to-br from-[#1a2a3a] via-[#1f3549] to-[#162238] text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Rent
          </button>
          <button
            onClick={() => setActiveTab("sell")}
            className={`flex-1 py-4 px-6 font-semibold text-lg transition-all duration-300 ${
              activeTab === "sell"
                ? "bg-gradient-to-br from-[#1a2a3a] via-[#1f3549] to-[#162238] text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Sell
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-br from-[#1a2a3a] via-[#1f3549] to-[#162238] text-white">
                <tr>
                  <th className="py-4 px-4 sm:px-6 text-left font-semibold text-base sm:text-lg">Services Offered</th>
                  <th className="py-4 px-4 sm:px-6 text-center font-semibold text-base sm:text-lg">With Roots & Roofs</th>
                  <th className="py-4 px-4 sm:px-6 text-center font-semibold text-base sm:text-lg hidden sm:table-cell">Other Listing Portals</th>
                  <th className="py-4 px-4 sm:px-6 text-center font-semibold text-base sm:text-lg hidden md:table-cell">Real-estate Agents</th>
                </tr>
              </thead>
              <tbody>
                {currentServices.map((service, index) => (
                  <tr key={index} className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <td className="py-4 px-4 sm:px-6 text-gray-700 font-medium text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
                        {service.name}
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center">
                      {service.nestaway ? (
                        <div className="flex justify-center">
                          <div className="bg-green-100 rounded-full p-2">
                            <FaCheck className="text-green-600 text-lg" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="bg-red-100 rounded-full p-2">
                            <FaTimes className="text-red-600 text-lg" />
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center hidden sm:table-cell">
                      {service.portal ? (
                        <div className="flex justify-center">
                          <div className="bg-green-100 rounded-full p-2">
                            <FaCheck className="text-green-600 text-lg" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="bg-red-100 rounded-full p-2">
                            <FaTimes className="text-red-600 text-lg" />
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center hidden md:table-cell">
                      {service.agent ? (
                        <div className="flex justify-center">
                          <div className="bg-green-100 rounded-full p-2">
                            <FaCheck className="text-green-600 text-lg" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <div className="bg-red-100 rounded-full p-2">
                            <FaTimes className="text-red-600 text-lg" />
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View - Additional Columns */}
          <div className="sm:hidden bg-gray-50 p-4">
            <div className="text-sm text-gray-600 mb-3">
              <strong>Note:</strong> Scroll right to see all comparison columns or view on a larger screen.
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 sm:p-8 relative flex flex-col justify-between">
          <div className="space-y-4 text-gray-700">
            <p className="text-base sm:text-lg leading-relaxed">
              Looking to rent or sell your house, flat, or apartment? Wondering where to advertise your property?
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Join Roots & Roofs, the ultimate property listing platform! With our free and instant property listings, 
              Roots & Roofs ensures your property gets the visibility it deserves. Our platform advertises your property 
              for free across multiple channels, connecting you with potential tenants or buyers in no time.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              With millions of prospective tenants and buyers visiting Roots & Roofs daily, your property stands a higher 
              chance of being noticed and rented or sold faster.
            </p>
          </div>

          {/* Button at bottom-left */}
          <div className="mt-6 w-full flex justify-end">
            <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(124, 201, 51, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                       onClick={() => navigate("/contact")}
                      className="bg-gradient-to-r from-[#7cc933] to-[#5fa02b] cursor-pointer text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Contact Us
                    </motion.button>
          </div>
        </div>

        {/* Legend for Mobile */}
        <div className="mt-6 bg-white rounded-lg shadow p-4 sm:hidden">
          <h3 className="font-semibold text-gray-800 mb-3">Legend:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 rounded-full p-1">
                <FaCheck className="text-green-600 text-sm" />
              </div>
              <span className="text-gray-700">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-red-100 rounded-full p-1">
                <FaTimes className="text-red-600 text-sm" />
              </div>
              <span className="text-gray-700">Not Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
