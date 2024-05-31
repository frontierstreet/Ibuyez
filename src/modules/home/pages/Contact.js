import React from "react"
import { NavigationWrapper } from "../../common/components"
import { ContactForm, ContactHero } from "../components"

const Contact = () => {
	return (
		<NavigationWrapper>
			<ContactHero />
			<ContactForm />
		</NavigationWrapper>
	)
}

export default Contact
