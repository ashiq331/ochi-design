import { motion } from "framer-motion";
import React from "react";

const fadeInAnimationVariants = {
  initial: {
    width: 0,
  },
  animate: (index) => ({
    width: "50%",
    transition: {
      ease: [0.83, 0, 0.17, 1],
      duration: 1.2,
      delay: 0.2,
    },
  }),
};

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.03"
      className=" py-20 px-20 bg-[#eaeaea] rounded-3xl -mt-10 -mb-5 z-50"
    >
      <h1 className=' group transition-all duration-600 ease-in-out text-black font-["Neue_Montreal"] text-[3.5vw] font-medium py-20 leading-[4vw]'>
        <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </span>
      </h1>

      <div className="w-full flex gap-5 border-t mt-2 pt-10 border-[#0000005b]">
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our approach:</h1>
          <button className="px-10 py-6 bg-zinc-950 text-white rounded-full mt-6 text-xl uppercase flex items-center gap-7">
            Read More <div className="w-3 h-3 bg-slate-100 rounded-full"></div>
          </button>
        </div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="w-1/2 h-[400px] lg:h-[600px] md:h-[400px] sm:h-[400px] xs:h-[400px] bg-black rounded-3xl overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/5717550/pexels-photo-5717550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Admin"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
