import React from "react"
import FadeIn from "../landing/FadeIn"

const Offer = () => {
	return (
		<FadeIn>
		<div className="md:px-10 bg-blue text-black  px-4 mt-[50px] py-20 950:my-[100px]  2xl:max-w-[1330px] xl:mx-auto">
			<div className="flex flex-col md:flex-row items-center justify-between gap-10">
				<div className="flex flex-col items-start max-w-[643px] gap-3 ">
					<h3 className="md:text-[60px]  md:leading-[40px]  950:text-[55px] 950:leading-[70px] text-[30.04px] leading-[49.24px] text-black font-normal">
					  Get an Initial Offer Estimate:
					</h3>
					<p className="text-normal text-[16px] max-w-[90%] leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]">
						This is our first pass. We calculate an estimate based on our pricing data
						and your home details. You’ll get a final cash offer when we know more about
						your home.
					</p>
				</div>
				<div className=" flex flex-col  items-start   w-[100%]">
					<div className=" border-b flex-1   px-5 py-6  w-[100%]">
						<h3 className="md:text-[30px] md:px-2 mt-4 flex-1 md:leading-[35px]    950:text-[30px] 950:leading-[40px] text-[20px] leading-[49.24px] text-black font-normal">
						  Enter your address
						</h3>
						<p className="text-normal flex-1 md:px-2 text-[16px] mt-2 leading-[28.03px] md:text-[16px] md:leading-[32px] 950:text-[16px] 950:leading-[25px]">
						Provide Your Address for a Quick Evaluation of Your Home's Value
						</p>
					</div>
					<div className=" border-b flex-1   px-5 py-6  w-[100%]">
						<h3 className="md:text-[30px] mt-4 md:px-2  flex-1 md:leading-[35px]    950:text-[30px] 950:leading-[40px] text-[20px] leading-[49.24px] text-black font-normal">
						Confirm Home Details
						</h3>
						<p className="text-normal flex-1 text-[16px] md:px-2  mt-2 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[25px]">
					     	Inform Us of Any Renovations or Upgrades Made to Your Propert
						</p>
					</div>
					<div className=" border-b  flex-1  px-5 py-6  w-[100%]">
						<h3 className="md:text-[30px] mt-4 md:px-2  flex-1 md:leading-[35px]    950:text-[30px] 950:leading-[40px] text-[20px] leading-[49.24px] text-black font-normal">
						Share Your Moving Plans
						</h3>
						<p className="text-normal flex-1 text-[16px] md:px-2  mt-2 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[25px]">
						Answer a Few Questions About Your Home and Your Timeline for Selling
						</p>
					</div>
				</div>
			</div>
		</div>
		</FadeIn>
	)
}

export default Offer
