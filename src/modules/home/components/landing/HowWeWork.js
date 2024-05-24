import React from 'react'
import Step1Img from '../../assets/images/step1-img.png'

const HowWeWork = () => {
  return (
    <div className=' px-4 md:px-10  mt-10 950:mt-[100px] xl:max-w-[1330px] xl:mx-auto'>
        <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10 mb-5'>
                <h3 className='md:text-[55px] flex-1 md:leading-[75px]    950:text-[55px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-medium'>
                How we work.
                </h3>
                <p className='text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[32px] 950:leading-[38.4px]'>
                    We cut out the unnecessary steps to make selling your home easy, fast, and stress-free.
                </p>
        </div>
        <div className='flex flex-col md:flex-row px-4 py-10 md:py-10 md:px-10 md:gap-20 bg-[#f9f9fb] rounded-[20px] 950:mt-20'>
            <div className='flex-1' >
              <h3 className='md:text-[60px] flex-1 md:leading-[75px]    950:text-[55px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-black'>
                     Step 1
                </h3>
                <p className='text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[32px] 950:leading-[38.4px]'>
                  We’d love to walk you through the platform
                </p>
                <p className='text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[38.4px]'>
                   Fill in the form and we’ll schedule a free demo!
                </p>
            </div>
            <div>
              <img src={Step1Img} className='flex-1 mt-5 md:mt-0  pointer-events-none' alt="Moving background" />

            </div>
        </div>
        <div className='flex px-4 py-10 flex-col md:flex-row mt-10 md:py-10 md:px-10 md:gap-20 bg-[#f9f9fb] rounded-[20px] md:mt-20'>
            <div>
              <img src={Step1Img} className='flex-1 mb-5 md:mb-0  pointer-events-none' alt="Moving background" />

            </div>
            <div className='flex-1' >
              <h3 className='md:text-[60px] flex-1 md:leading-[75px]    950:text-[55px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-black'>
                     Step 2
                </h3>
                <p className='text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[32px] 950:leading-[38.4px]'>
                  We’d love to walk you through the platform
                </p>
                <p className='text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[38.4px]'>
                   Fill in the form and we’ll schedule a free demo!
                </p>
            </div>
           
        </div>
        <div className='flex flex-col md:flex-row mt-10 px-4 py-10 md:py-10 md:px-10 md:gap-20 bg-[#f9f9fb] rounded-[20px] 950:mt-20'>
            <div className='flex-1' >
              <h3 className='md:text-[60px] flex-1 md:leading-[75px]    950:text-[55px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-black'>
                     Step 3
                </h3>
                <p className='text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[32px] 950:leading-[38.4px]'>
                  We’d love to walk you through the platform
                </p>
                <p className='text-normal mb-5 md:mb-0 flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[38.4px]'>
                   Fill in the form and we’ll schedule a free demo!
                </p>
            </div>
            <div>
              <img src={Step1Img} className='flex-1  pointer-events-none' alt="Moving background" />

            </div>
        </div>
        
    </div>
  )
}

export default HowWeWork