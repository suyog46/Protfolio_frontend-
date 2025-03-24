'use client';
import React from 'react';
import { motion } from "framer-motion";

function Expertlanguages() {
  const proficientLanguages = [
    { name: 'MongoDB', img: 'img/log_mongo.png' },
    { name: 'Express.js', img: 'img/express.png' },
    { name: 'React', img: 'img/logo_4.png' },
    { name: 'Node.js', img: 'img/logo_node.png' },
    { name: 'SQL', img: 'img/logo_sql.png' },
    { name: 'PHP', img: 'img/logo_php.png' },
    { name: 'Next.js', img: 'img/logo_2.png' },
    { name: 'JavaScript', img: 'img/logo_1.png' },
  ];

  const familiarLanguages = [
    { name: 'Java', img: 'img/logo_java.jpg' },
    { name: 'C++', img: 'img/logo_cp.png' },
    { name: 'C', img: 'img/logo_6.png' },
  ];
  const tools = [
    { name: 'Github', img: 'img/Github.png' },
    { name: 'Figma', img: 'img/logo_10.png' },
    { name: 'Jira', img: 'img/jira.png' },

  ];

  return (
    <div className="about  ">
      {/* Languages Section */}
      <div className="p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-white text-center mb-8 font-semibold">Languages I Can Work With</h2>

        {/* Proficient Languages */}
        <div className="mb-8">
          <h3 className="text-3xl text-white mb-4 font-semibold border-b-2 border-gray-600 pb-2">Proficient</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {proficientLanguages.map((language, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-3 rounded-lg shadow-md text-white text-center transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}

                
              >
                <div className="fimg w-20 h-20 border bg-white flex items-center justify-center rounded-lg overflow-hidden">
                  <img src={language.img} alt={language.name} className='object-contain w-full h-full p-2' />
                </div>
                <span className="mt-2 text-lg font-semibold tracking-wide">{language.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Familiar Languages */}
        <div className="mb-8">
          <h3 className="text-3xl text-white mb-4 font-semibold border-b-2  pb-2">Familiar</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {familiarLanguages.map((language, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center  rounded-lg shadow-md text-white text-center transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="fimg w-20 h-20 border bg-white flex items-center justify-center rounded-lg overflow-hidden">
                  <img src={language.img} alt={language.name} className='object-contain w-full h-full p-2' />
                </div>
                <span className="mt-2 text-lg font-semibold tracking-wide">{language.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
             {/* Familiar Languages */}
             <div className="mb-8">
          <h3 className="text-3xl text-white mb-4 font-semibold border-b-2  pb-2">Tools Used:</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {tools.map((language, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center  rounded-lg shadow-md text-white text-center transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="fimg w-20 h-20 border bg-white flex items-center justify-center rounded-lg overflow-hidden">
                  <img src={language.img} alt={language.name} className='object-contain w-full h-full p-2' />
                </div>
                <span className="mt-2 text-lg font-semibold tracking-wide">{language.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertlanguages;
