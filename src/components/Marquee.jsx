import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-10 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl text-white">
      <div className="text flex whitespace-nowrap overflow-hidden gap-16">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear",  repeat: Infinity, duration: 5 }}
          className='text-[16vw] leading-none font-["Founders Grotesk X-condensed"]  font-bold'
        >
          WE ARE OCHI
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear",  repeat: Infinity, duration: 5 }}
          className='text-[16vw] leading-none font-["Founders Grotesk X-condensed"]  font-bold'
        >
          WE ARE OCHI
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear",  repeat: Infinity, duration: 5 }}
          className='text-[16vw] leading-none font-["Founders Grotesk X-condensed"]  font-bold'
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
