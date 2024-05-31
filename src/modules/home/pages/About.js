import React from "react"
import { NavigationWrapper } from "../../common/components"
import { AboutHero, Mission, Started, Ultimate, Why } from "../components"

const About = () => {
	return (
		<NavigationWrapper>
			<AboutHero />
			<Mission />
			{/* <Why/> */}
			<Ultimate />
			<Started />
		</NavigationWrapper>
	)
}

export default About
