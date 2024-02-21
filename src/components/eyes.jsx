import { motion } from "framer-motion";
import React from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    width: "50%",
    height: "0%",
    borderRadius: "50%",
  },
  animate: {
    opacity: 1,
    width: "100%",
    height: "100%",
    borderRadius: "0%",
    transition: {
      ease: [0.83, 0, 0.17, 1],
      duration: 0.8,
      delay: 0.9,
    },
  },
};

const fadeInAnimationVariantsOne = {
  initial: {
    opacity: 0,
    width: "80%",
    height: "0%",
    borderRadius: "50%",
  },
  animate: {
    opacity: 1,
    width: "100%",
    height: "100%",
    borderRadius: "0%",
    transition: {
      ease: [0.83, 0, 0.17, 1],
      duration: 1.3,
      delay: 1.1,
    },
  },
};

const fadeInAnimationVariantsTwo = {
  initial: {
    opacity: 0,
    width: "80%",
    height: "0%",
    borderRadius: "50%",
  },
  animate: {
    opacity: 1,
    width: "100%",
    height: "100%",
    borderRadius: "0%",
    transition: {
      ease: [0.83, 0, 0.17, 1],
      duration: 2.3,
      delay: 2,
    },
  },
};

const Eyes = () => {
  return (
    <div className='eyes -mt-10 bg-[url("https://images.pexels.com/photos/8317101/pexels-photo-8317101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-no-repeat bg-cover  w-full h-screen  flex items-center justify-center  z-10 overflow-hidden'>
      <div className="mt-16 px-20 w-full flex gap-6">
        <div className="w-1/3 -mt-40 rounded-2xl h-[400px] backdrop-blur-3xl  overflow-hidden">
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="flex items-center justify-center  w-full bg-[#ffffff3e]"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-[3vw] font-semibold text-white overflow-hidden"
            >
              Web Design
            </motion.h1>
          </motion.div>
        </div>
        <div className="w-1/3 h-[400px]  rounded-2xl backdrop-blur-3xl  overflow-hidden">
          <motion.div
            variants={fadeInAnimationVariantsOne}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="flex items-center justify-center  w-full bg-[#ffffff1f]"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-[3vw] font-semibold text-white overflow-hidden"
            >
              Web Development
            </motion.h1>
          </motion.div>
        </div>
        <div className="w-1/3 mt-40  h-[400px] rounded-2xl backdrop-blur-3xl  overflow-hidden">
          <motion.div
            variants={fadeInAnimationVariantsTwo}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="flex items-center justify-center  w-full bg-[#ffffff25]"
          >
            <motion.h1
              initial={{ opacity: 0,
              }}
              animate={{ opacity: 1,
              }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-[3vw] font-semibold text-white overflow-hidden"
            >
              SEO Optimization
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
