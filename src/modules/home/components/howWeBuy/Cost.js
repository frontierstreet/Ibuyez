import React from "react";
import FadeIn from "../landing/FadeIn";

const Cost = () => {
	return (
		<FadeIn>
		<div className="md:px-20 px-4 bg-white">
			<div className="flex flex-col justify-between gap-10 max-w-[1330px] mx-auto">
				<div className="flex flex-col items-start max-w-[643px] gap-3">
					<h3 className="md:text-[60px] md:leading-[40px] uppercase 950:text-[55px] 950:leading-[70px] text-[30.04px] leading-[49.24px] text-black font-normal">
						Inside an iBuyEZ offer: costs and fees
					</h3>
					<p className="text-normal text-[16px] max-w-[90%] leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]">
						This is our first pass. We calculate an estimate based on our pricing data
						and your home details. You’ll get a final cash offer when we know more about
						your home.
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-start gap-5 md:gap-10 w-[100%]">
					{["Service Fee", "Repair Costs", "Closing Costs", "Holding Costs"].map((title, index) => (
						<div key={index} className="flex-1 border bg-white z-20 px-5 py-6 rounded-[20px] w-[100%] flex flex-col">
							<h3 className="md:text-[30px] mt-4 md:px-2 flex-1 md:leading-[35px]  950:text-[30px] 950:leading-[40px] text-[20px] leading-[49.24px] text-black font-normal">
								{title}
							</h3>
							<p className="text-normal text-[16px] md:px-2 mt-2 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[25px] flex-1">
								{index === 0 && "A standard fee applied to cover the services provided during the sale process, including home evaluation and transaction coordination."}
								{index === 1 && "Any necessary repairs identified during the home inspection will be deducted from the final offer to ensure the home meets market standards."}
								{index === 2 && "These include fees associated with the closing process, such as title transfer fees, escrow fees, and any other administrative costs."}
								{index === 3 && "If applicable, costs related to holding the property until the final sale, such as property taxes, insurance, and maintenance, may be included."}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
		</FadeIn>
	);
}

export default Cost;
