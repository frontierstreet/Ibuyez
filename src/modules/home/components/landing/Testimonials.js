import React from "react"
import GirlImg from "../../assets/images/girl-testimonial.png"
import { ReactComponent as Arrow } from "../../assets/icons/“.svg"
import { ReactComponent as Star } from "../../assets/icons/star.svg"

const List = [
	{
		id: 1,
		testimonial:
			"I highly recommend IbuyEZ. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
		name: "Barbara D. Smith",
		img: GirlImg
	}
]

const Testimonials = () => {
	return (
		<div className=" flex  flex-col px-5  mt-10 md:flex-row items-center gap-5 950:max-w-[1200px] mx-auto 950:mt-[120px]">
			<div className="flex-1">
				<h5 className="font-light text-[20px] text-[#4361EE]">TESTIMONIALS</h5>
				<p className="font-bold flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[24px] md:leading-[32px] 950:text-[50px] 950:leading-[50px]">
					Look What Our <br />
					Customers Say!
				</p>
				<p className="text-normal  flex-1 text-[16px] mt-4 leading-[28.03px] md:text-[18px] md:leading-[32px] 950:text-[16px] 950:leading-[38.4px]">
					Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
				</p>
			</div>
			<div className="bg-white shadow-2xl px-4 py-5 950:px-10 950:py-10 items-center max-w-[600px]  mx-auto justify-center rounded-[24px] flex-1  ">
				{List.map((item, index) => (
					<div key={index} className="flex flex-col gap-3">
						<Arrow />
						<p className=" font-normal text-[20px] border-b-2  py-4 950:text-[30px]">
							{item.testimonial}
						</p>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<img src={item.img} alt="img" />
								<p className=" text-[16px]  py-4 950:text-[30px]">{item.name}</p>
							</div>
							<Star />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Testimonials
