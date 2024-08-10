/* eslint-disable react/prop-types */
import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className='relative flex-shrink-0 w-44 sm:w-52 md:w-60 lg:w-72 h-52 sm:h-60 md:h-72 lg:h-80 rounded-[20px] bg-zinc-500/10 text-white px-2 py-2 sm:px-4 sm:py-4 overflow-hidden'
    >
      <FaFileAlt className="text-base sm:text-lg md:text-xl lg:text-2xl" />
      <p className='text-sm sm:text-base md:text-lg lg:text-xl mt-5 font-semibold leading-tight'>
        {data.desc}
      </p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between mb-2 px-2 sm:px-4'>
          <h5 className='text-xs sm:text-sm md:text-base lg:text-lg'>{data.filesize}</h5>
          <span className='w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-zinc-700 rounded-full flex items-center justify-center'>
            {data.close ? (
              <IoClose className="text-xs sm:text-sm md:text-base lg:text-lg" />
            ) : (
              <IoIosDownload size=".8em" color='#fff' className="text-xs sm:text-sm md:text-base lg:text-lg" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className='tag bg-blue-500 w-full py-2 sm:py-3 md:py-4 flex items-center justify-center'>
            <h3 className='text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold'>
              {data.tag.tagtitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
