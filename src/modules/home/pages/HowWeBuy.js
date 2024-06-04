import React from "react"
import { Cost, Head, Offer, Process, Selling, Started } from "../components"
import { NavigationWrapper } from "../../common/components"

const HowWeBuy = () => {
	return (
		<NavigationWrapper>
			<Head />
			<Selling />
			{/* <Process /> */}
			<Offer />
			<Cost />
			<Started />
		</NavigationWrapper>
	)
}

export default HowWeBuy
