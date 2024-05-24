import React from 'react'
import houseImg from '../../assets/images/sell-img.png'
import {ReactComponent as Arrow } from "../../assets/icons/arrow-angle.svg"

const List = [
    "Pre-floclosure","Divorce","Bankruptcy","Relocation", "Fire Damaged", "Inherited Property. etc "
]

const Sell = () => {
  return (
    <div className='md:px-10 px-4 mt-[50px] 950:mt-[100px] xl:max-w-[1330px] xl:mx-auto'>  
            <div className=' bg-white' >
              <div className='flex flex-col md:flex-row items-center gap-4 md:gap-10 mb-5'>
                <h3 className='md:text-[60px] flex-1 md:leading-[75px]    950:text-[55px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-bold'>
                     Sell to IbuyEX.<br /> <span className='text-blue'>Skip the hard parts.</span>
                </h3>
                <p className='text-normal flex-1 text-[16px] mt-2 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[32px] 950:leading-[38.4px]'>
                    We cut out the unnecessary steps to make selling your home easy, fast, and stress-free.
                  </p>

               </div>
              <div className=' flex flex-col md:flex-row items-center gap-5 md:gap-10 w-[100%]'>
                 <img src={houseImg} className='flex-1 w-[100%] md:w-1/2 pointer-events-none' alt="Moving background" />
                 
                  <div 
                   className='bg-blue px-5 py-10 950:px-20 950:py-10 items-center  mx-auto justify-center rounded-[24px] gap-y-5 flex-1 w-[100%] md:h-[302px] grid grid-cols-2 '>
                    {List.map((item, index) => (
                        <div className='flex items-center gap-10'>
                        <p key={index} className='text-white font-normal text-[16px] md:text-[20px]'>{item}</p>
                         {/* <Arrow/> */}

                        </div>
                    ))}
                 </div>
             </div>
           </div>
    </div>
  )
}

export default Sell