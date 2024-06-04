import React from "react"
import VideoPlace from "../../assets/images/Hero Image.png"

const WhatSetsUsApart = () => {
	return (
		<div className="md:px-10 px-4 py-10 md:mt-[50px] xl:max-w-[1330px] mx-auto flex flex-col md:flex-row gap-5">
			<div>
				<div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 mb-5">
					<p className="text-normal mb-2 flex-1 text-[40px] mt-4 leading-[40px] md:text-[60px] md:leading-[32px] 950:text-[70px] 950:leading-[60px]">
						What Sets Us Apart
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 mb-5 relative">
					<p className="text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]">
						At ibuyez.com, we differentiate ourselves through our extensive network, market expertise, and innovative technology. Our team of seasoned professionals works tirelessly to connect buyers and sellers efficiently. With our deep understanding of the real estate market and commitment to customer satisfaction, we ensure every transaction is smooth and successful. Our advanced platform streamlines the process, offering you the best deals and opportunities in the wholesale real estate market.
					</p>
				</div>
			</div>
			<div className="">
				<img
					src={VideoPlace}
					className="w-[100%] h-[100%] pointer-events-none"
					alt="videobackground"
				/>
			</div>
		</div>
	)
}

export default WhatSetsUsApart
