import { Landing, HowWeBuy, About, Contact, SituationTemplate } from "./modules/home/pages"
import CONSTANTS from "./modules/common/utils/Constant"
import { useLocation, useRoutes } from "react-router-dom"
import { formRoute } from "modules/form/helpers"
import { FormSteps } from "types/form"
import FormPage from "modules/form/components/FormPage"
import { formMaker } from "modules/form/constants/constants"
import { AnimatePresence } from "framer-motion"
import React, { useEffect } from "react"
import { situations } from "modules/home/components/landing/situations"
const { routes } = CONSTANTS

const formRoutes = Object.keys(FormSteps).map((key) => ({
	path: formRoute(FormSteps[key]),
	element: <FormPage {...formMaker[FormSteps[key]]} />
}))

const situationRoutes = situations.map(situation => ({
	path:":situationId" ,
	element: <SituationTemplate />
  }));


const Router = () => {
	const element = useRoutes([
		{ path: routes.home, Component: Landing },
		{ path: routes.howWeBuy, Component: HowWeBuy },
		{ path: routes.about, Component: About },
		{ path: routes.contact, Component: Contact },
		...formRoutes,
		...situationRoutes,
	])
	const location = useLocation()

	useEffect(() => {
		window.scroll(0, 0)
	}, [location.pathname])

	if (!element) return null

	return (
		<AnimatePresence mode="wait">
			{React.cloneElement(element, { key: location.pathname })}
		</AnimatePresence>
	)
}
export default Router
