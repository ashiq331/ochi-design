import React from "react";

const Featured = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.05"  className="w-full py-10 bg-[#f4f4f4] z-50 rounded-3xl mb-60">
      <div className="w-full px-20">
        <h1 className="text-[4vw] font-extralight tracking-tight  border-b-[1px] border-zinc-300 pb-10">
          Featured Projects
        </h1>
        <div className="cards w-full flex items-center justify-center gap-5 mt-16">
          <div className="card rounded-lg w-1/2 h-[80vh] overflow-hidden flex flex-col gap-9">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <div className="h-2 w-10 rounded-full bg-black"> </div>
              FYDE
            </h2>

            <div className="maincard w-full h-full  overflow-hidden">
                <img className="w-full h-full object-cover rounded-lg hover:scale-95 transition" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="Fyde" />
            </div>

            <div className="details flex items-center gap-3">
            <a href="" className="border border-zinc-300 bg-[#f0f0f0] rounded-full px-5 py-2">Demo</a>
                <a href="" className="border border-zinc-300 bg-[#f0f0f0] rounded-full px-5 py-2">Github</a>
                <a href="" className="border border-zinc-300 bg-[#f0f0f0] rounded-full px-5 py-2">Demo</a>
                <a href="" className="border border-zinc-300 bg-[#f0f0f0] rounded-full px-5 py-2">Github</a>
            </div>
          </div>

          <div className="card rounded-lg w-1/2 h-[80vh] overflow-hidden flex flex-col gap-9">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <div className="h-2 w-10 rounded-full bg-black"> </div>
              FYDE
            </h2>

            <div className="maincard w-full h-full  overflow-hidden">
                <img className="w-full h-full object-cover rounded-lg hover:scale-95 transition" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="Fyde" />
            </div>

            <div className="details flex items-center gap-3">
                <a href="" className="border border-zinc-300 bg-[#f0f0f0] rounded-full px-5 py-2">Demo</a>
                <a href="" className="border border-zinc-300 bg-[#f0f0f0] rounded-full px-5 py-2">Github</a>
                <a href="" className="border border-zinc-300 bg-[#f0f0f0] rounded-full px-5 py-2">Demo</a>
                <a href="" className="border border-zinc-300 bg-[#f0f0f0] rounded-full px-5 py-2">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
