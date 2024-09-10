import axios from "axios"
import toast from "react-hot-toast"

const baseAxios = axios.create({
	baseURL: "https://www.frontierstreet.us/api/v1/ibuyez"
})

baseAxios.interceptors.response.use(
	function (response) {
		if (response?.data) {
			if (response?.data?.message) {
				toast.success(response.data.message, { duration: 8000 })
			}
			if (response?.data?.data && !response?.data?.metadata) {
				return response.data.data
			}
			return response.data
		}
		return response
	},
	function (error) {
		// if (error?.response?.status === 401) {
		// 	toast.error("Session expired....")
		// 	window.location.reload()
		// 	return Promise.reject(error)
		// }
		if (error?.response?.data?.error) {
			toast.error(error.response.data.error, { duration: 8000 })
		} else {
			toast.error("There was an error. Please check your network connection")
		}
		return Promise.reject(error)
	}
)

export default baseAxios
