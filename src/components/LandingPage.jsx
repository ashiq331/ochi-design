import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="heading mt-52 px-20">
            {["We Create", "EYE Opening", "Presentations"].map((item, index) =>{
                return <div className="masker">
                <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-bold font-["Founders Grotesk"]'>{item}</h1>
            </div>
            })}
        </div>

        <div className='border border-zinc-800 mt-40'>
        {["We Create", "EYE Opening", "Presentations"].map((item, index) =>{
                return <div className="">
                
            </div>
            })}
        </div>
    </div>
  )
}

export default LandingPage