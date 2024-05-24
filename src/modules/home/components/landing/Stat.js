import React from 'react'

const List = [
    {
      id:1,
      Numb:"20K",
      text:"SATISFIED CLIENTS"
    },
    {
        id:2,
        Numb:"20K",
        text:"SATISFIED CLIENTS"
      },
    {
        id:3,
        Numb:"20K",
        text:"SATISFIED CLIENTS"
      },
    {
        id:4,
        Numb:"20K",
        text:"SATISFIED CLIENTS"
    },

]
const Stat = () => {
  return (
    <div className='grid py-4 grid-cols-2 border-t border-b mt-10 max-w-[90%] 868:max-w-[700px] lg:max-w-[1200px] mx-auto md:grid-cols-4 justify-between items-center '>
        {List.map((item =>
            <div key={item.id} >
                 <h3 className='md:text-[40px]  md:leading-[75px]  950:text-[70px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-black'>
                  {item.Numb}
                 </h3>
                 <p className='text-normal text-[16px]  950:w-[760px]  text-black mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]'>
                  {item.text}
                </p>
            </div>
        ))}
    </div>
  )
}

export default Stat