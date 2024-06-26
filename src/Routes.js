import { Landing, HowWeBuy, About, Contact, SituationTemplate } from "./modules/home/pages"
import CONSTANTS from "./modules/common/utils/Constant"
import { useLocation, useRoutes } from "react-router-dom"
import { formRoute } from "modules/form/helpers"
import { FormSteps } from "types/form"
import FormPage from "modules/form/components/FormPage"
import { formMaker } from "modules/form/constants/constants"
import { AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
import { situations } from "modules/home/components/landing/situations"
import DashboardLogin from "modules/dashboard/pages/login"
import Submissions from "modules/dashboard/pages/submissions"
import DashboardLayout from "modules/dashboard/components/DashboardLayout"
import { useLazyGetProfileQuery } from "store/api/dashboard-service"
import { useDispatch } from "react-redux"
import { authenticate } from "store/slices/auth"
import ContactForms from "modules/dashboard/pages/contact-forms"
import ContactList from "modules/dashboard/pages/contacts"
import AddContact from "modules/dashboard/pages/contacts/AddContact"
const { routes } = CONSTANTS

const formRoutes = Object.keys(FormSteps).map((key) => ({
	path: formRoute(FormSteps[key]),
	element: <FormPage {...formMaker[FormSteps[key]]} />
}))

const situationRoutes = situations.map((situation) => ({
	path: ":situationId",
	element: <SituationTemplate />
}))

const Router = () => {
	const [ready, setReady] = useState(false)
	const [getProfile] = useLazyGetProfileQuery()
	const dispatch = useDispatch()
	const element = useRoutes([
		{ path: routes.home, Component: Landing },
		{ path: routes.howWeBuy, Component: HowWeBuy },
		{ path: routes.about, Component: About },
		{ path: routes.contact, Component: Contact },
		...formRoutes,
		...situationRoutes,
		{ path: "/dashboard/login", Component: DashboardLogin },
		{
			path: "/dashboard/pages",
			Component: DashboardLayout,
			children: [
				{ path: "submissions", Component: Submissions },
				{ path: "contact-forms", Component: ContactForms },
				{ path: "contacts", Component: ContactList },
				{ path: "contacts/add/", Component: AddContact }
			]
		}
	])
	const location = useLocation()

	const checkForToken = async () => {
		try {
			const authTkn = localStorage.getItem("auth")
			if (authTkn) {
				const response = await getProfile(authTkn).unwrap()
				dispatch(authenticate({ user: response, token: authTkn }))
				setReady(true)
			} else {
				setReady(true)
			}
		} catch (e) {
			localStorage.clear()
			setReady(true)
		}
	}

	useEffect(() => {
		window.scroll(0, 0)
	}, [location.pathname])

	useEffect(() => {
		checkForToken()
	}, [])

	if (!element || !ready) return null

	return (
		<AnimatePresence mode="wait">
			{React.cloneElement(element, { key: location.pathname })}
		</AnimatePresence>
	)
}
export default Router
