import React from "react"
import VideoPlace from "../../assets/images/video-place.png"

const Discover = () => {
	return (
		<div className="flex flex-col items-center px-5 mt-10 md:mt-20">
			<h3 className="md:text-[40px] mb-10 md:leading-[75px] text-center  950:pt-[100px]  950:text-[70px] 950:leading-[96px] text-[30px] leading-[49.24px] text-black font-normal">
				Discover Homeownership on yourself
			</h3>
			<img src={VideoPlace} className=" pointer-events-none" alt="videobackground" />
		</div>
	)
}

export default Discover
