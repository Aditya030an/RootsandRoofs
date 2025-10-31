import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919993452100"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 
                 bg-green-500 text-white p-2 lg:p-4 rounded-full 
                 shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-wavy" />
    </a>
  );
};

export default WhatsAppButton;
