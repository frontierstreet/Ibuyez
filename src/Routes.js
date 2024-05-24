import {Landing, HowWeBuy, About, Contact} from "./modules/home/pages"
import CONSTANTS from "./modules/common/utils/Constant"
import {
    RouterProvider,
    createBrowserRouter,
  } from "react-router-dom";

const {routes} = CONSTANTS;


const router = createBrowserRouter([
    { path: routes.home, Component: Landing },
    { path: routes.howWeBuy, Component: HowWeBuy },
    { path: routes.about, Component: About },
    { path: routes.contact, Component: Contact },

])

const Router = () =>{
    return <RouterProvider router={router} />
}
export default Router;