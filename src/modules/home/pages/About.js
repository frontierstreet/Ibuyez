import React from "react"
import { NavigationWrapper } from "../../common/components"
import { AboutHero, Mission, Started, Ultimate, WhatSetsUsApart, Why } from "../components"
import FadeIn from "../components/landing/FadeIn"

const About = () => {
	return (
		<NavigationWrapper>
			<FadeIn>
			<AboutHero />
			<Mission />
			{/* <Why/> */}
			<Ultimate />
			<WhatSetsUsApart/>
			<Started />
				
			</FadeIn>
		</NavigationWrapper>
	)
}

export default About
