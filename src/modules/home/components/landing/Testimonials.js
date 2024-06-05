import React, { useState } from "react";
import GirlImg from "../../assets/images/girl-testimonial.png";
// import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/left.svg"; 
import { ReactComponent as RightArrow } from "../../assets/icons/right.svg"; 

const testimonialsList = [
	
	{
	  id: 2,
	  testimonial:
		"Selling our house to IBuyEZ was incredibly easy. The process was straightforward, and we received a fair offer quickly.",
	  name: "John A. Doe",
	  img: GirlImg, 
	},
	{
	  id: 3,
	  testimonial:
		"The team at IBuyEZ was professional and helpful throughout the entire process. I would definitely recommend them to others looking to sell their home quickly.",
	  name: "Emily R. Johnson",
	  img: GirlImg, 
	},
	{
	  id: 4,
	  testimonial:
		"We had a great experience with IBuyEZ. They made selling our home stress-free and even helped with our moving expenses.",
	  name: "Michael B. Lee",
	  img: GirlImg, 
	},
  ];
  

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  return (
    <div className="flex flex-col px-5 mt-10 md:flex-row md:items-center gap-5 950:max-w-[1200px] mx-auto 950:mt-[120px]">
      <div className="flex-1">
        <h5 className="font-light text-[20px] text-[#4361EE]">TESTIMONIALS</h5>
        <p className="font-bold flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[24px] md:leading-[32px] 950:text-[50px] 950:leading-[50px]">
          Look What Our 
          Customers Say!
        </p>
        {/* <p className="text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[38.4px]">
          Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
        </p> */}
		<div className="flex gap-4 mt-4">
		 <LeftArrow
          onClick={handlePrev}
           className="  cursor-pointer"
         />
		 <RightArrow
          onClick={handleNext}
          className=" cursor-pointer"
         />
		</div>
      </div>
      <div className="bg-white shadow-2xl px-8 py-5 950:px-10 950:py-10 items-center max-w-[600px] mx-auto justify-center rounded-[24px] flex-1 relative">
        
        <div className="flex flex-col gap-3">
          {/* <Arrow /> */}
          <p className="font-normal text-[20px] border-b-2 py-4 950:text-[30px]">
            {testimonialsList[current].testimonial}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={testimonialsList[current].img} alt="img" />
              <p className="text-[16px] py-4 950:text-[30px]">{testimonialsList[current].name}</p>
            </div>
            <Star />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
