import React from 'react'

const about = () => {
  return (
    <div className='bg-black w-full '>

      <div className='relative h-auto bg-black mb-20'>

         <div className='w-[100vw] sticky top-0   mb-10'>
            <img src="/slide-2.png" className=' w-full opacity-[0.5]'/>       
         </div>

         <div className='text-white w-full px-3 font-bold z-10  text-2xl'>Our Mission</div>

         <div className='  text-2xl sm:text-6xl md:text-9xl lg:text-[200px] 
         font-bold md:font-extrabold  lg:font-black  text-white
           px-5 w-full uppercase '>

          <span className='block sm:-tracking-[3px] md:-tracking-[8px] lg:-tracking-[15px]'>Bring</span>
          <span className='block sm:-tracking-[3px] md:-tracking-[8px]lg:-tracking-[15px]'>inspiration</span>
          <span className='block  sm:-tracking-[3px] md:-tracking-[8px]lg:-tracking-[15px]'>and</span>
          <span className='block sm:-tracking-[3px] md:-tracking-[8px] lg:-tracking-[15px]'>inovation</span>
          <span className='block sm:-tracking-[3px] md:-tracking-[8px] lg:-tracking-[15px]'>to</span>
          <span className='block sm:-tracking-[3px] md:-tracking-[8px] lg:-tracking-[15px]'>every</span>
          <span className='block  sm:-tracking-[3px] md:-tracking-[8px] lg:-tracking-[15px]'>athlete*</span>
          <span className='block sm:-tracking-[3px] md:-tracking-[8px]  lg:-tracking-[15px] ' >in the</span>
          <span className='block sm:-tracking-[3px] md:-tracking-[8px] lg:-tracking-[15px]'>world</span>
          </div>
          <div className='text-white text-2xl font-thin px-5 font-oswald'>*If you have a body, you are an athlete</div>
         </div>


         <div className=' flex justify-end '>
          <div className='text-white text-lg sm:text-2xl md:text-3xl  lg:text-5xl w-ful w-full sm:w-[80vw] mg:w-[75vw] lg:w-[70vw] p-5 mb-10 font-semibold '>
          We champion continual progress for athletes and sport by taking action to help athletes reach their potential. Every job at NIKE, Inc. is grounded in a team-first mindset, cultivating a culture of innovation and a shared purpose to leave an enduring impact.

          </div>
        
         </div>
         
    </div>

    
  )
}

export default about
