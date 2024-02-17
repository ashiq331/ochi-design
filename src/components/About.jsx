import React from 'react'

const About = () => {
  return (
    <div className='py-20 px-20 bg-[#cdea64] rounded-3xl -mt-10 -mb-5 z-10'>
        <h1 className='text-black font-["Neue_Montreal"] text-[3.5vw] font-medium py-20 leading-[4vw]'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        <div className='w-full flex gap-5 border-t mt-2 pt-10 border-[#0000005b]'>
            <div className='w-1/2'>
                <h1 className='text-[4vw]'>Our approach:</h1>
                <button className='px-10 py-6 bg-zinc-950 text-white rounded-full mt-6 text-xl uppercase flex items-center gap-7'>
                    Read More <div className='w-3 h-3 bg-slate-100 rounded-full'></div>
                </button>
            </div>

            <div className="w-1/2 h-[60vh] bg-black rounded-3xl">

            </div>
        </div>
    </div>
  )
}

export default About