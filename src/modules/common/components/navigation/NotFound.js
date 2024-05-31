import React from "react"
import NavigationWrapper from "./NavigationWrapper"
import Button from "../general/Button"
import { useNavigate } from "react-router-dom"
import CONSTANTS from "modules/common/utils/constants"

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<NavigationWrapper containerClassName="bg-_25253C lg:bg-white">
			<div className="bg-_25253C h-[83.07px] lg:hidden" />
			<div className="px-5 bg-white pt-[175.27px] lg:pt-[188px] relative flex items-center justify-center flex-col space-y-5">
				<p className="text-_25253C text-[30px] text-center">Page not found.</p>
				<Button text={"Go Home"} onClick={() => navigate(CONSTANTS.routes.home)} />
			</div>
		</NavigationWrapper>
	)
}

export default NotFound
