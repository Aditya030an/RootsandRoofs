import { useState } from "react";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    name: "Property 1",
    image: "/allPropertyLogo/logo1.jpg",
    link: "/property/1",
  },
  {
    id: 2,
    name: "Property 2",
    image: "/allPropertyLogo/logo2.jpg",
    link: "/property/2",
  },
  {
    id: 3,
    name: "Property 3",
    image: "/allPropertyLogo/logo3.png",
    link: "/property/3",
  },
  {
    id: 4,
    name: "Property 4",
    image: "/allPropertyLogo/logo4.png",
    link: "/property/4",
  },
  {
    id: 5,
    name: "Property 5",
    image: "/allPropertyLogo/logo5.png",
    link: "/property/5",
  },
  {
    id: 6,
    name: "Property 6",
    image: "/allPropertyLogo/logo6.png",
    link: "/property/6",
  },
  {
    id: 7,
    name: "Property 7",
    image: "/allPropertyLogo/logo7.png",
    link: "/property/7",
  },
  {
    id: 8,
    name: "Property 8",
    image: "/allPropertyLogo/logo8.png",
    link: "/property/8",
  },
];

const InfiniteScroll = () => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="overflow-hidden bg-white w-full">
      <motion.div
        className="flex w-max gap-6"
        animate={isPaused ? { x: 0 } : { x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...properties, ...properties].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="min-w-[100px] h-[100px] relative group overflow-hidden rounded-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
