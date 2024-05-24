import React from 'react'

const Offer = () => {
  return (
    <div className='md:px-10    px-4 mt-[50px] 950:my-[100px]  xl:max-w-[1330px] xl:mx-auto'>  
            <div className='flex flex-col md:flex-row justify-between gap-10'>
              <div className='flex flex-col items-start max-w-[643px] gap-3 '>
                <h3 className='md:text-[60px]  md:leading-[40px] uppercase  950:text-[55px] 950:leading-[70px] text-[30.04px] leading-[49.24px] text-black font-normal'>
                   What goes into our estimated offer

                </h3>
                <p className='text-normal text-[16px] max-w-[90%] leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]'>
                This is our first pass. We calculate an estimate based on our pricing 
                data and your home details. You’ll get a final cash offer when we know more 
                about your home.

                </p>
               </div>
               <div className=' flex flex-col  items-start   w-[100%]'>
                <div className=' border-b flex-1   px-5 py-6  w-[100%]'>
                  <h3 className='md:text-[30px] md:px-2 mt-4 flex-1 md:leading-[35px] uppercase    950:text-[30px] 950:leading-[40px] text-[20px] leading-[49.24px] text-black font-normal'>
                     Sell to IbuyEZ
                  </h3>
                  <p className='text-normal flex-1 md:px-2 text-[16px] mt-2 leading-[28.03px] md:text-[16px] md:leading-[32px] 950:text-[16px] 950:leading-[25px]'>
                  Sell right away. We can buy your home in days. No showings required.  
                </p>
                </div>
                <div className=' border-b flex-1   px-5 py-6  w-[100%]'>
                  <h3 className='md:text-[30px] mt-4 md:px-2  flex-1 md:leading-[35px] uppercase    950:text-[30px] 950:leading-[40px] text-[20px] leading-[49.24px] text-black font-normal'>
                  Sell on the market
                  </h3>
                  <p className='text-normal flex-1 text-[16px] md:px-2  mt-2 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[25px]'>
                  Go after the best price. If you list with our help, our offer is good for 30 days.
                 </p>
                </div>
                <div className=' border-b  flex-1  px-5 py-6  w-[100%]'>
                  <h3 className='md:text-[30px] mt-4 md:px-2  flex-1 md:leading-[35px] uppercase    950:text-[30px] 950:leading-[40px] text-[20px] leading-[49.24px] text-black font-normal'>
                  Sell on the market
                  </h3>
                  <p className='text-normal flex-1 text-[16px] md:px-2  mt-2 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[25px]'>
                  Go after the best price. If you list with our help, our offer is good for 30 days.
                 </p>
                </div>

             </div>
           </div>
    </div>
  )
}

export default Offer