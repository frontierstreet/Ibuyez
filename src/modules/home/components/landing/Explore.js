import React from 'react'
import ExploreImg from '../../assets/images/explore-img.png'
import { Button } from '../../../common/components'

const Explore = () => {
  return (
    <div className='hidden 950:block bg-[#f9f9fb] mt-[50px] py-10 950:mt-[150px]  950:py-[100px]'>
      <div className=''>
        <h3 className='md:text-[40px] md:leading-[75px] text-center    950:text-[70px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-normal'>
              Discover Homeownership on yourself
        </h3>
         <p className='text-normal mb-5 text-[14px] text-center mt-4 leading-[28.03px] md:text-[16px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]'>
            And stay up to 3 days after so you don't have to rush to move. Pretty sweet, huh?
        </p>
      </div>
     <div className='flex flex-col items-center  950:mt-[50px] relative'>
      <img src={ExploreImg} className='xl:max-w-[1200px] xl:mx-auto pointer-events-none w-[90%]  md:h-[500px]' alt="videobackground" />
      <div className=' 950:w-860px] 950:px-10 950:py-10 absolute 950:top-10 950:left-20 1400:left-[150px] 1800:left-[400px]'>
        <h3 className='md:text-[40px]  md:leading-[75px]  950:text-[70px] 950:leading-[96px] text-[25px] leading-[49.24px] text-white font-normal'>
            Explore Your Options
        </h3>
        <p className='text-normal mb-5 text-[14px]  950:w-[760px]  text-white mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]'>
            Deciding to become a homeowner is a big deal! Luckily, with Homes.com, 
            you get the most accurate homes for sale property data, an agent directory, a
            nd collaboration tools to browse with your agent and co-shopper to help you make the right decision.

        </p>
        <Button text={"Get Cash Offer"} classNames="bg-transparent text-white border rounded-10" />
      </div>
    </div>

    </div>
  )
}

export default Explore