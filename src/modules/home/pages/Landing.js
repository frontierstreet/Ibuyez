import React from "react"
import {
	About,
	Discover,
	Explore,
	Hero,
	HowWeWork,
	Sell,
	Started,
	Testimonials
} from "../components"
import { NavigationWrapper } from "../../common/components"

const Landing = () => {
	return (
		<NavigationWrapper>
			<Hero />
			{/* <Discover /> */}
			<Sell />
			<Explore />
			<About />
			<HowWeWork />
			<Testimonials />
			<Started />
		</NavigationWrapper>
	)
}

export default Landing
