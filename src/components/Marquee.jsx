import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className="w-full py-10 pb-32 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl text-white">
      <div className="text flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className='text-[16vw] leading-none font-["Founders Grotesk X-condensed"]  font-bold pr-10'
        >
          WE ARE OCHI
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className='text-[16vw] leading-none font-["Founders Grotesk X-condensed"]  font-bold'
        >
          WE ARE OCHI
        </motion.h1>


      </div>
    </div>
  );
};

export default Marquee;
