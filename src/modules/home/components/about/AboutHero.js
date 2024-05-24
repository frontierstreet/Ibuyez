import React from 'react'
import landingImg from '../../assets/images/Hero Image.png'

const AboutHero = () => {
  return (
    <div className='px-4 md:px-10 mt-[100px] md:mt-0 mx-auto'>  
    <div className='flex flex-col items-start  md:px-20 gap-4 md:mt-20 z-10'>
      <div className='flex-1 flex flex-col '>
        <h3 className='md:text-[60px] z-10 md:leading-[75px] max-w-[894px]  950:pt-[150px] 950:text-[80px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-black'>
              About Us 
        </h3>
          <p className='text-normal z-10 text-black text-[16px] mt-4 max-w-[838px]  leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]'>
             With pricing technology, industry expertise, and more than a 
             decade of buying homes online, we make it less stressful to sell yours.
          </p>
       </div>
     </div>
     <div className='flex-1'>
         <img src={landingImg} className=' h-[300px] w-[100vw] absolute top-0 left-0 868:h-[600px] 868:w-[100%] z-0' alt="Moving background" />
     </div>
</div>
  )
}

export default AboutHero