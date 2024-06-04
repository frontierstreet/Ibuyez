import React from "react"
import HeroForm from "./HeroForm"



const Started = () => {
	
	return (
		<div className="bg-blue px-4  max-w-[90%] py-10 950:py-20 flex flex-col items-center 950:max-w-[1200px] mx-auto my-[100px] rounded-[40px]">
			<div className="flex flex-col items-center">
				<h3 className="md:text-[60px] flex-1 md:leading-[75px] text-center   950:text-[55px] 950:leading-[96px] text-[30px] leading-[49.24px] text-black font-black">
					Get Started with IbuyEZ
					<br className="hidden md:block" /> Today
				</h3>
				<p className="text-normal text-black mb-5 text-[14px] text-center mt-4 leading-[28.03px] md:text-[16px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]">
					And stay up to 3 days after so you don't have to rush to move. Pretty sweet,
					huh?
				</p>
				<HeroForm/>
			</div>
		</div>
	)
}

export default Started
