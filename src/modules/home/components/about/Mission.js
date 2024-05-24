import React from 'react'
import VideoPlace from '../../assets/images/video-place.png'

const Mission = () => {
  return (
    <div className='md:px-10 px-4 py-10 mt-[50px] 950:mt-[250px] xl:max-w-[1330px] mx-auto flex flex-col md:flex-row gap-5 '>  
            <div >
              <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10 mb-5'>
                <p className='text-normal mb-2 flex-1 text-[40px] mt-4 leading-[28.03px] md:text-[60px] md:leading-[32px] 950:text-[70px] 950:leading-[60px]'>
                Powering life’s progress, <br/> one move at a time
                </p>
                
               </div>
               <div className='flex flex-col md:flex-row items-center  justify-between gap-5 md:gap-10 mb-5 relative'>
                <p className='text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]'>
                In 2014, we set out to reinvent life’s most important transaction with a new, 
                simple way to buy and sell a home. We’ve rebuilt the entire consumer real estate 
                experience and made buying and selling possible on a mobile device.
                </p>
              
               </div>
           </div>
           <div className=''>
            <img src={VideoPlace} className=' w-[100%] h-[100%] pointer-events-none' alt="videobackground" />
            </div>
    </div>
  )
}

export default Mission