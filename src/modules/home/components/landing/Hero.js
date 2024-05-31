import React, { useState, useEffect } from "react"
import landingImg from "../../assets/images/landing.jpg"
import HeroForm from "./HeroForm"
import { BlockingLoader } from "../../../common/components"
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
		<div className=" 950:pl-10 px-4 md:px-0 md:pl-4   868:max-w-[100%] 868:pl-5 mx-auto">
			<BlockingLoader solid loading={loading} />
			<div className="flex flex-col justify-between  mt-[120px] 950:mt-0 868:flex-row gap-4  bg-white ">
				<div className="flex-1">
					<h3 className="md:text-[60px] md:leading-[75px]  950:pt-[200px]  950:text-[80px] 950:leading-[96px] text-[40px] leading-[49.24px] text-black font-black">
						Sell Your Home
						<br />
						Keep Your <span className="text-blue">Money</span>
					</h3>
					<p className="text-normal text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[32px] 950:leading-[38.4px]">
						Search for a comfortable place to live with your new family and your child.
						Increase the harmony of your family and wife to be at home
					</p>
					<HeroForm />
				</div>
				<div className="flex-1">
					<img
						src={landingImg}
						className=" pointer-events-none h-auto w-[95vw] 868:h-[120%] 868:w-[100%]"
						alt="Moving background"
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero
