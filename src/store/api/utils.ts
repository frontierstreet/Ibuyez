import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import toast from "react-hot-toast"
import type { RootState } from "store"
import { APISearchParams } from "types/shared"

export const baseUrl = process.env.REACT_APP_API_BASE_URL + "/api/v1/ibuyez"
// export const baseUrl = "https://www.frontierstreet.us/api/v1/ibuyez"

export const formDataHeaders = {
	headers: {
		Accept: "application/json",
		"Content-Type": "multipart/form-data"
	}
}

export const defaultBaseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: (headers, { getState }) => {
		const state = getState() as RootState
		const token = state?.auth?.token
		if (token) {
			headers.set("x-auth-token", token)
		}
		return headers
	}
})

const extractServerError = (e: any) => {
	const tempError = e?.data?.error
	if (tempError) {
		return tempError
	}
	if (e?.status === 500) {
		return "There was an error. Please try again later"
	}
	return "An error was encountered"
}

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions
) => {
	let result = await defaultBaseQuery(args, api, extraOptions)
	if (result.error) {
		const error = result.error
		const errMsg = extractServerError(error)
		if (error?.status === 401) {
			toast.error("Unauthorized request...")
			window.location.reload()
		} else {
			toast.error(errMsg)
		}
	} else {
		const data: any = result.data
		if (data?.message) {
			toast.success(data.message)
		}
		if (data?.data && !data?.metadata) {
			result = data
		}
	}
	return result
}

export const POST = "POST"
export const PATCH = "PATCH"
export const DELETE = "DELETE"
export const PUT = "PUT"

export const getParamsFromSearchParams = ({ query, page, sorting }: APISearchParams) => {
	const params: any = { page }
	if (query) {
		params.query = query
	}
	if (sorting) {
		params.sorting = sorting
	}
	return params
}
