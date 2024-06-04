import React from "react"
import ExploreImg from "../../assets/images/explore-img.png"
import { Button } from "../../../common/components"
import { Link } from 'react-router-dom';
import { situations } from "./situations";

const Card = ({ icon, header, content, link }) => (
	<div className="bg-white z-30 shadow-lg rounded-[20px] p-6 w-80 text-center">
	  {/* <img src={icon} alt="icon" className="mx-auto w-12 h-12 mb-4" /> */}
	  <h3 className="text-xl font-bold mb-2">{header}</h3>
	  <p className="text-gray-600 mb-4">{content}</p>
	  <Link to={link} className="inline-block px-4 py-2 border hover:border-blue hover:text-black hover:bg-white font-semibold rounded-md bg-blue text-white transition duration-300 ease-in-out transform hover:scale-105">
      Learn More
    </Link>
	</div>
  );

  const CardList = ({ situations }) => (
	<div className="flex flex-wrap justify-center gap-8 p-4">
	  {situations.map(situation => (
		<Card
		  key={situation.id}
		  icon={situation.icon}
		  header={situation.header}
		  content={situation.content}
		  link={situation.link}
		/>
	  ))}
	</div>
  );



const Explore = () => {
	return (
		<div className=" bg-[#f9f9fb] mt-[50px] py-10 950:mt-[150px]  950:py-[100px]">
			<div className="">
				<h3 className="md:text-[40px] md:leading-[75px] text-center    950:text-[70px] 950:leading-[96px] text-[41.04px] leading-[49.24px] text-black font-normal">
				   Which situation(s) sounds like yours?
				</h3>
				<p className="text-normal mb-5 text-[14px] text-center mt-4 leading-[28.03px] md:text-[16px] max-w-[90%] mx-auto md:leading-[32px] 950:text-[20px] 950:leading-[38.4px]">
				   Choose from the options below to find the best solution tailored to your needs.
				</p>
			</div>

	      <CardList situations={situations }/>
		</div>
	)
}

export default Explore
