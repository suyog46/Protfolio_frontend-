import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StickyNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed bottom-4 right-4 bg-gray-900 text-white p-6 rounded-lg shadow-lg w-90 z-50 "
    >
        <div className="relative">
      <div className="absolute -top-8 -end-5 ">
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition duration-150 text-2xl"
          aria-label="Close notification"
        >
          &times;
        </button>
      </div>
      <p className="text-sm mt-1">
     <br />Consider my CV
      </p>
      
      {/* Action Buttons */}
      <div className="mt-4 flex space-x-3">
        <a
          href="file/Resume.pdf"  // replace with the actual resume file path
          download
          className=" border border-white  border-3 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
        <a
          href="#contact" // replace with the actual contact section or URL
          className="bg-black text-white  py-2 px-4 border  border-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          Lets connect
        </a>
      </div>

        </div>
    </motion.div>
  );
};

export default StickyNotification;
