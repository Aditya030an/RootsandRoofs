// components/PageTransition.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const transitionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-screen bg-white"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}