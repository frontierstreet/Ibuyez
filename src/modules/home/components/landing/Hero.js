import React, { useState, useEffect } from "react"
import landingImg from "../../assets/images/landing.jpg"
import HeroForm from "./HeroForm"
import { BlockingLoader } from "../../../common/components"
import Noise from "../../../common/assets/image/noise.png"
// import { useWindowSize, } from 'modules/common/hooks';

const Hero = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	return (
		 <div className=" 950:px-10 px-4 md:px-0 md:pl-4 xl:min-h-[100vh] bg-blue background-noise   868:max-w-[100%] 868:pl-5 mx-auto">
			 {/* <img src={Noise} className="absolute top-0 left-0  w-full h-full" alt="Noise texture"/> */}
			<BlockingLoader solid loading={loading} />
			<div className="flex flex-col justify-between items-center  mt-[50px] pt-[120px] py-10  950:pt-[200px]  950:mt-0 868:flex-row gap-8  ">
				<div className="flex-1">
					<h3 className="md:text-[60px] md:leading-[75px]    950:text-[60px] 950:leading-[70px] text-[40px] leading-[49.24px] text-white font-black">
					    SELL YOUR <br/> HOME THE <span className="text-yellow">EZ </span> WAY
					</h3>
					<p className="text-[#f2f2f2] text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[25px] 950:leading-[38.4px]">
						Search for a comfortable place to live with your new family and your child.
						Increase the harmony of your family and wife to be at home
					</p>
					<HeroForm />
				</div>
				<div className="flex-1">
					<img
						src={landingImg}
						className=" pointer-events-none h-auto w-[95vw] rounded-[20px] 868:h-[523px] 868:w-[673px]"
						alt="Moving background"
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero
