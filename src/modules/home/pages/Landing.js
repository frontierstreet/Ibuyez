import React from "react"
import Logo from "../../common/assets/icons/logo1.svg"

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
		<NavigationWrapper
		  handleSEO
			title={"iBuyEZ"}
		    description ={"SELL YOUR HOME THE EZ WAY "}
		    image={Logo}
		>
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
