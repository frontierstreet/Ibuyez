import React from "react"
import Logo from "../../common/assets/image/og.png"

import {
	ScheduleHome
} from "../components"
import { NavigationWrapper } from "../../common/components"

const Schedule = () => {
	return (
		<NavigationWrapper
		  handleSEO
			title={"iBuyEZ"}
		    description ={"SELL YOUR HOME THE EZ WAY "}
		    image={Logo}
		>
			<ScheduleHome />
			
		</NavigationWrapper>
	)
}

export default Schedule
