import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { MdSwapHoriz } from "react-icons/md";
import { motion } from "framer-motion";

// ✅ Unit conversion ratios
const unitConversions = {
  "Square Meter": 1,
  "Square Feet": 0.092903,
  Guntha: 101.17,
  "Square Inch": 0.00064516,
  Hectare: 10000,
  Ground: 203.0,
  "Square Mile": 2.59e6,
  Bigha: 1337.8,
  "Square Karam": 9.0,
  "Square Kilometer": 1e6,
  Murabba: 2500,
  Decimal: 40.47,
  Lessa: 16.18,
  Cent: 40.47,
  "Biswa Kacha": 63.63,
  Marla: 25.29,
  Chatak: 4.57,
  Dhur: 16.93,
  Biswa: 125.0,
  Acre: 4046.86,
  "Square Yard": 0.836127,
  Kanal: 505.857,
  Kila: 10000,
  Gaj: 0.836127,
  Pura: 101.17,
  Katha: 126.0,
  "Square Centimeter": 0.0001,
};

// ✅ All states for searchable dropdown
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

// 🔍 Searchable dropdown for states
const SearchableStateInput = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => setInputValue(value), [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search or select state..."
          className="w-full p-3 pr-10 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />
        <FiChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-30 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-64 overflow-y-auto animate-fadeIn"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setInputValue(option);
                  setIsOpen(false);
                }}
                className={`p-3 cursor-pointer transition ${
                  option === value
                    ? "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-semibold"
                    : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700"
                }`}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              <FiSearch className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              No states found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// 📦 Simple dropdown component
const CustomDropdown = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 bg-gray-50 rounded-lg flex items-center justify-between text-gray-700 hover:bg-gray-100 transition shadow-sm"
      >
        <span className="font-medium">{value}</span>
        <FiChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-72 overflow-y-auto animate-fadeIn">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`p-3 cursor-pointer transition ${
                  option === value
                    ? "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-semibold border-l-4 border-gray-400"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// 🧮 Area Converter Main Component
const AreaConverter = () => {
  const [state, setState] = useState("Madhya Pradesh");
  const [fromUnit, setFromUnit] = useState("Square Meter");
  const [toUnit, setToUnit] = useState("Square Feet");
  const [value, setValue] = useState("1");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (value === "" || isNaN(value)) return setResult("");
    const valueInMeters = value * (unitConversions[fromUnit] || 1);
    const converted = valueInMeters / (unitConversions[toUnit] || 1);
    setResult(converted);
  }, [value, fromUnit, toUnit]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#1a2a3a] via-[#1f3549] to-[#162238] text-gray-800 py-10 px-4 sm:px-6 lg:px-10">
      {/* 🔮 Background gradient blob animation */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 -left-40 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-48 -right-40 w-[600px] h-[600px] bg-indigo-700/20 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 ">
            Area Calculator
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Convert land, villa, or apartment area from one unit to another effortlessly.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 flex justify-center"
          >
            <img
              src="/service-area-converter.png"
              alt="Area Calculator Illustration"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </motion.div>

          {/* Right Converter Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0e2338] via-[#1e3a8a] to-[#2563eb] drop-shadow-md">
              Area Converter
            </h2>

            <div className="space-y-6">
              {/* State Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select State
                </label>
                <SearchableStateInput value={state} onChange={setState} options={states} />
              </div>

              {/* Value Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter Value
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter value"
                  className="w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 text-gray-700 font-medium shadow-sm"
                />
              </div>

              {/* Unit Conversions */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Conversion Units
                </label>
                <div className="flex gap-3 items-end flex-wrap">
                  <div className="flex-1 min-w-[140px]">
                    <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">From</label>
                    <CustomDropdown
                      value={fromUnit}
                      onChange={setFromUnit}
                      options={Object.keys(unitConversions)}
                    />
                  </div>

                  <button
                    onClick={handleSwap}
                    className="p-3 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
                    title="Swap units"
                  >
                    <MdSwapHoriz className="w-6 h-6" />
                  </button>

                  <div className="flex-1 min-w-[140px]">
                    <label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">To</label>
                    <CustomDropdown
                      value={toUnit}
                      onChange={setToUnit}
                      options={Object.keys(unitConversions)}
                    />
                  </div>
                </div>
              </div>

              {/* Result */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-4 rounded-xl shadow-lg"
                >
                  <p className="text-xs text-gray-600 mb-1 uppercase tracking-wide font-semibold">
                    Result
                  </p>
                  <p className="text-lg md:text-xl text-gray-800">
                    <span className="font-bold">{value} {fromUnit}</span>
                    <span className="mx-2 text-green-500">=</span>
                    <span className="font-semibold text-green-600">
                      {result.toFixed(6)} {toUnit}
                    </span>
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AreaConverter;
