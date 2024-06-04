import React from "react"
import AboutImg from "../../assets/images/about-img.png"
import Stat from "./Stat"
import FadeIn from "./FadeIn"

const About = () => {
	return (
		<FadeIn>
			<div className="flex flex-col items-center mt-[50px]  md:mt-[150px] relative">
				<img src={AboutImg} className=" pointer-events-none" alt="videobackground" />
				<div className="bg-blue px-4 py-10 436:px-10 950:w-[860px] 950:px-10 950:py-10 md:absolute 950:top-40 950:right-20">
					<h3 className="md:text-[40px]  md:leading-[75px]  950:text-[70px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-normal">
						ABOUT US
					</h3>
					<p className="text-normal text-[16px]  950:w-[760px]  text-black mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]">
						Our mission is simple - to make selling your home as fast and easy as
						possible! We are a local company that specializes in helping home owners
						sell their houses without agents, fees, or commissions! It doesn't matter
						what reason you have for selling, or the condition of your property - we can
						help. We make all CASH offers, and close quickly.
					</p>
				</div>
			</div>
			{/* <Stat /> */}
		</FadeIn>
	)
}

export default About
