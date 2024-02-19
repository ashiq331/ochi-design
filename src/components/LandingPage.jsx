import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className=" w-full h-auto pb-32 bg-white pt-1">
      <div className="heading mt-52 px-20">
        {["We Create", "EYE Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center gap-3">
                {index === 1 && 
                (<motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1 }}  className="w-[10vw] h-[5.2vw] rounded-md relative top-[0.5vw] overflow-hidden">
                  <img src="https://images.pexels.com/photos/2471415/pexels-photo-2471415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" height="100%" />
                </motion.div>)}
                <h1 className='uppercase text-[8vw] leading-[6.4vw] tracking-tighter font-bold font-["Founders Grotesk X-Cond"]'>

                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-zinc-800  mt-44 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-xl  font-medium tracking-tight leading-none">
            {item}
          </p>
        ))}

        <a href="" className="start flex justify-center items-center gap-2">
          <div className="px-5 py-2 rounded-full border-[2px] border-zinc-800 font-medium text-md uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-[2px] border-zinc-800">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
