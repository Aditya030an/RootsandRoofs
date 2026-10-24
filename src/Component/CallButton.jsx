

import { IoMdCall } from "react-icons/io";

const CallButton = () => {
  return (
    <a
      href="tel:9203626426"
      className="fixed bottom-20 right-4
                 bg-blue-500 text-white p-2 lg:p-3 rounded-full 
                 shadow-lg hover:bg-blue-600 transition duration-300 z-50"
    >
      <IoMdCall className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-wavy" />
    </a>
  );
};

export default CallButton;
