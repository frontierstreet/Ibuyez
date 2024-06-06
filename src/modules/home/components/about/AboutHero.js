import React from "react"
import landingImg from "../../assets/images/Hero Image.png"
import { Button } from "modules/common/components"

const AboutHero = () => {
	return (
		<div className="px-4 md:px-10 pb-20 pt-[200px] md:pt-0 bg-blue md:mt-0 mx-auto">
			<div className="flex flex-col items-start  md:px-20 gap-4 md:mt-20 z-10">
				<div className="flex-1 flex flex-col ">
					<h3 className="md:text-[60px] z-10 md:leading-[75px] max-w-[894px]  950:pt-[150px] 950:text-[80px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-white">
						About Us
					</h3>
					<p className="text-normal z-10 text-black text-[16px] mt-4 max-w-[838px]  leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]">
					Welcome to iBuyEZ.com, your trusted partner in wholesale real estate solutions. 
					We specialize in revolutionizing the way you buy and sell properties.
					</p>
				</div>
			</div>
			{/* <div className="flex-1">
				<img
					src={landingImg}
					className=" h-[300px] w-[100vw] absolute top-0 left-0 868:h-[600px] 868:w-[100%] z-0"
					alt="Moving background"
				/>
			</div> */}
		</div>
	)
}

export default AboutHero
