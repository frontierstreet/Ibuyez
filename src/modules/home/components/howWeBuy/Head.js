import React from "react"
import landingImg from "../../assets/images/webuy.jpg"
import { Button } from "../../../common/components"
import HeroForm from "../landing/HeroForm"
const Head = () => {
	return (
		<div className=" flex bg-blue px-4 py-10  md:px-10   868:max-w-[100%] 868:pl-5 mx-auto  950:h-[90vh]">
			<div className="flex flex-col md:flex-row items-center gap-4  pt-[100px] md:pt-[100px]  ">
				<div className="flex-1 flex flex-col  md:px-8 items-start">
					<h3 className="md:text-[60px] md:leading-[75px]    950:text-[60px] 950:leading-[70px] text-[40px] leading-[49.24px] text-black font-black">
					    Embark on Your Home Selling Journey <br/>Stress-Free!
					</h3>
					<p className="text-normal text-black text-[16px] mt-4 max-w-[838px] leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]">
					Relax and Let Us Guide You Through Every Step: Customized Solutions to Simplify Your Home Selling Experience
					</p>
					<div className="flex space-x-1 ">
						<HeroForm/>
					</div>
				</div>
				<div className="flex-1">
					<img src={landingImg} className="rounded-[20px] " alt="Moving background" />
				</div>
			</div>
		</div>
	)
}

export default Head
