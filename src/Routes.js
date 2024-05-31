import { Landing, HowWeBuy, About, Contact } from "./modules/home/pages"
import CONSTANTS from "./modules/common/utils/Constant"
import { useLocation, useRoutes } from "react-router-dom"
import { formRoute } from "modules/form/helpers"
import { FormSteps } from "types/form"
import FormPage from "modules/form/components/FormPage"
import { formMaker } from "modules/form/constants/constants"
import { AnimatePresence } from "framer-motion"
import React from "react"

const { routes } = CONSTANTS

const formRoutes = Object.keys(FormSteps).map((key) => ({
	path: formRoute(FormSteps[key]),
	element: <FormPage {...formMaker[FormSteps[key]]} />
}))

const Router = () => {
	const element = useRoutes([
		{ path: routes.home, Component: Landing },
		{ path: routes.howWeBuy, Component: HowWeBuy },
		{ path: routes.about, Component: About },
		{ path: routes.contact, Component: Contact },
		...formRoutes
	])
	const location = useLocation()

	if (!element) return null

	return (
		<AnimatePresence mode="wait">
			{React.cloneElement(element, { key: location.pathname })}
		</AnimatePresence>
	)
}
export default Router
