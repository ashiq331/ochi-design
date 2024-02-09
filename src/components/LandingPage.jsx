import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="heading mt-60 px-20">
        {["We Create", "EYE Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center gap-3">
                {index === 1 && (<div className="w-[10vw] h-[5.2vw] bg-red-500 rounded-md relative top-[0.5vw]"></div>)}
                <h1 className='uppercase text-[8vw] leading-[6.4vw] tracking-tighter font-bold font-["Founders Grotesk X-Cond"]'>

                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-zinc-800 mt-44 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-xl font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <a href="" className="start flex justify-center items-center gap-2">
          <div className="px-5 py-2 rounded-full border-[2px] border-zinc-800 font-light text-md uppercase">
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
