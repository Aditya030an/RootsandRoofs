import { useState } from "react";
import { motion } from "framer-motion";

const properties = [
  { id: 1, image: "/allPropertyLogo/logo1.jpg", link: "/property/1" },
  { id: 2, image: "/allPropertyLogo/logo2.jpg", link: "/property/2" },
  { id: 3, image: "/allPropertyLogo/logo3.png", link: "/property/3" },
  { id: 4, image: "/allPropertyLogo/logo4.png", link: "/property/4" },
  { id: 5, image: "/allPropertyLogo/logo5.png", link: "/property/5" },
  { id: 6, image: "/allPropertyLogo/logo6.png", link: "/property/6" },
  { id: 7, image: "/allPropertyLogo/logo7.png", link: "/property/7" },
  { id: 8, image: "/allPropertyLogo/logo8.png", link: "/property/8" },
];

// Split into 3 columns
const col1 = [...properties, ...properties];
const col2 = [...properties, ...properties];
const col3 = [...properties, ...properties];

const Column = ({ items, direction = "up", isPaused, setIsPaused }) => {
  return (
    <motion.div
      className="flex flex-col gap-4"
      animate={
        isPaused
          ? { y: 0 }
          : direction === "up"
          ? { y: ["0%", "-50%"] }
          : { y: ["-50%", "0%"] }
      }
      transition={{
        repeat: Infinity,
        duration: 18,
        ease: "linear",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          className="w-full h-[120px] rounded-xl overflow-hidden group"
        >
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </a>
      ))}
    </motion.div>
  );
};

const InfiniteScroll = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10" />
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10" />

      <div className="grid grid-cols-3 gap-4 h-full px-4">
        
        {/* Column 1 (Up) */}
        <Column
          items={col1}
          direction="up"
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />

        {/* Column 2 (Down) */}
        <Column
          items={col2}
          direction="down"
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />

        {/* Column 3 (Up) */}
        <Column
          items={col3}
          direction="up"
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />

      </div>
    </div>
  );
};

export default InfiniteScroll;