import { Landing, HowWeBuy, About, Contact } from "./modules/home/pages"
import CONSTANTS from "./modules/common/utils/Constant"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { formRoute } from "modules/form/helpers"
import { FormSteps } from "types/form"
import FormPage from "modules/form/components/FormPage"
import { formMaker } from "modules/form/constants/constants"

const { routes } = CONSTANTS

const formRoutes = Object.keys(FormSteps).map((key) => ({
	path: formRoute(FormSteps[key]),
	element: <FormPage {...formMaker[FormSteps[key]]} />
}))

const router = createBrowserRouter([
	{ path: routes.home, Component: Landing },
	{ path: routes.howWeBuy, Component: HowWeBuy },
	{ path: routes.about, Component: About },
	{ path: routes.contact, Component: Contact },
	...formRoutes
])

const Router = () => {
	return <RouterProvider router={router} />
}
export default Router
