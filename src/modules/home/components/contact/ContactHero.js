import React from "react"
import landingImg from "../../assets/images/Hero Image.png"
import { Button } from "../../../common/components"

const ContactHero = () => {
	return (
		<div className="px-4 868:max-w-[100%] pt-[150px] md:pt-[0px]  mx-auto">
			<div className="flex flex-col items-start  md:px-20 gap-4 md:mt-20 z-10">
				<div className="flex-1 flex flex-col ">
					<h3 className="md:text-[60px] z-10 md:leading-[75px] max-w-[894px]  950:pt-[150px] 950:text-[80px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-white font-black">
						Get in touch
					</h3>
					<div className="z-10 flex flex-wrap gap-4 mt-4">
						<Button text="support@iBuyEZ.com" />
						<Button text="317-812-3417" />
						<a href="#contact-form" title="Fill out contact form">
							<Button text="Fill out contact form" />
						</a>
					</div>
				</div>
			</div>
			<div className="flex-1">
				<img
					src={landingImg}
					className="pointer-events-none h-[400px] w-[100vw] absolute top-0 left-0 868:h-[500px] 868:w-[100%] z-0"
					alt="Moving background"
				/>
			</div>
		</div>
	)
}

export default ContactHero
