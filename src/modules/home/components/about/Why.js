import React from "react"
import VideoPlace from "../../assets/images/video-place.png"

const Why = () => {
	return (
		<div className="flex flex-col xl:max-w-[1330px] mx-auto md:px-10 px-4  ">
			<img
				src={VideoPlace}
				className=" md:max-w-[80%] pointer-events-none"
				alt="videobackground"
			/>
		</div>
	)
}

export default Why
