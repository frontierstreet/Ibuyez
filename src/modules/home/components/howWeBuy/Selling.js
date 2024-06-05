import React from "react"
import houseImg from "../../assets/images/selling.jpg"
import Market from "../../assets/images/marketplace.webp"

import { ReactComponent as Arrow } from "../../assets/icons/arrow-angle.svg"
import FadeIn from "../landing/FadeIn"



const Selling = () => {
	return (
		<FadeIn>
		<div className="md:px-10 px-4 mt-[50px] 950:my-[100px] xl:max-w-[1330px] xl:mx-auto">
			<div className=" bg-white">
				<div className="flex flex-col md:flex-row  gap-5 md:gap-10 mb-10">
					<h3 className="md:text-[60px] flex-1 md:leading-[75px]    950:text-[55px] 950:leading-[70px] text-[41.04px] leading-[49.24px] text-black font-normal">
						A Way to Sell For Any <span className="text-blue">Situation</span>
					</h3>
					<p className="text-normal flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]">
						When you work with us, you can explore the market knowing you already have
						an offer on your home.
					</p>
				</div>
				<div className=" flex flex-col md:flex-row items-center gap-5 md:gap-10 w-[100%]">
					<div className="md:w-1/2  flex-1  shadow border  px-5 py-12 rounded-[20px]">
						<img
							src={houseImg}
							className=" pointer-events-none rounded-[20px]"
							alt="property image"
						/>
						<h3 className="md:text-[30px] md:px-2 mt-4 flex-1 md:leading-[35px]   950:text-[30px] 950:leading-[40px] text-[16px] leading-[49.24px] text-black font-normal">
							Sell to IBuyEZ
						</h3>
						<p className="text-normal flex-1 md:px-2 text-[16px] mt-2 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[25px]">
							Sell right away. We can buy your home in days. No showings required.
						</p>
					</div>
					<div className="md:w-1/2  flex-1 shadow   border  px-5 py-12 rounded-[20px]">
						<img
							src={Market}
							className=" pointer-events-none rounded-[20px]"
							alt="property image"
						/>
						<h3 className="md:text-[30px] mt-4 md:px-2  flex-1 md:leading-[35px]   950:text-[30px] 950:leading-[40px] text-[20px] leading-[49.24px] text-black font-normal">
							Sell on the market
						</h3>
						<p className="text-normal flex-1 text-[16px] md:px-2  mt-2 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[25px]">
							Go after the best price. If you list with our help, our offer is good
							for 30 days.
						</p>
					</div>
				</div>
			</div>
		 </div>
		</FadeIn>

	)
}

export default Selling
