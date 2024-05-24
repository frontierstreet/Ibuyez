import React from 'react'
import landingImg from '../../assets/images/webuy.jpg'
import { Button } from '../../../common/components'
const Head = () => {
  return (
    <div className=' flex bg-blue px-4 py-10  md:px-10   868:max-w-[100%] 868:pl-5 mx-auto  950:h-[90vh]'>  
     <div className='flex flex-col md:flex-row items-center gap-4  pt-[100px] md:pt-[100px]  ' >
      <div className='flex-1 flex flex-col  md:px-8 items-start'>
        <h3 className='md:text-[50px] md:leading-[75px]  max-w-[894px] uppercase  950:text-[60px] 950:leading-[96px] text-[40px] leading-[49.24px] text-white font-bold'>
              Start your sale with peace of mind 
        </h3>
          <p className='text-normal text-[#8D8D8D] text-[16px] mt-4 max-w-[838px] leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]'>
             With pricing technology, industry expertise, and more than a 
             decade of buying homes online, we make it less stressful to sell yours.

          </p>
          <div className='flex space-x-1 mt-5'>
                           
             <Button text={"Get cash offer"} 
              classNames="!bg-[#fddf14]" 
              textClassNames="!text-black" 
                // onClick={() => navigate("/admin/add-listing")} 
             />
                          
          </div>
       </div>
      <div className='flex-1'>
         <img src={landingImg} className='rounded-[20px] ' alt="Moving background" />
     </div>
     </div>
    
    </div>
  )
}

export default Head