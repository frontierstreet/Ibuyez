import { createApi } from "@reduxjs/toolkit/query/react"
import { POST, baseQuery, getParamsFromSearchParams } from "./utils"
import { APISearchParams, PaginatedData } from "types/shared"
import {
	ContactFormType,
	ContactType,
	IbuyezSubmissionType,
	ScheduleSubmissionType,
	CashBuyerSubmissionType
} from "types/admin"

interface LoginResponse {
	email: string
	firstName: string
	lastName: string
	roles: string[]
	token: string
}

interface LoginPayload {
	email: string
	password: string
}

export const authApi = createApi({
	reducerPath: "authAPI",
	tagTypes: ["contacts"],
	baseQuery,
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginPayload>({
			query: (payload) => ({
				url: "/admin/login",
				method: "POST",
				body: payload
			})
		}),
		getProfile: builder.query<Omit<LoginResponse, "token">, string>({
			query: (token) => ({
				url: "/admin/profile",
				headers: {
					"x-auth-token": token
				}
			})
		}),
		getSubmissions: builder.query<PaginatedData<IbuyezSubmissionType>, APISearchParams>({
			query: (params) => ({
				url: "/admin/submissions",
				params: getParamsFromSearchParams(params)
			})
		}),
		getScheduleSubmissions: builder.query<
			PaginatedData<ScheduleSubmissionType>,
			APISearchParams
		>({
			query: (params) => ({
				url: "/admin/schedule-submissions",
				params: getParamsFromSearchParams(params)
			})
		}),
		getCashBuyerSubmissions: builder.query<
			PaginatedData<CashBuyerSubmissionType>,
			APISearchParams
		>({
			query: (params) => ({
				url: "/admin/cash-buyer-submissions",
				params: getParamsFromSearchParams(params)
			})
		}),
		getContactForms: builder.query<PaginatedData<ContactFormType>, APISearchParams>({
			query: (params) => ({
				url: "/admin/contact-forms",
				params: getParamsFromSearchParams(params)
			})
		}),
		addContact: builder.mutation<any, any>({
			invalidatesTags: ["contacts"],
			query: (payload) => ({
				url: "/admin/contacts",
				body: payload,
				method: POST
			})
		}),
		getContacts: builder.query<PaginatedData<ContactType>, APISearchParams>({
			providesTags: ["contacts"],
			query: (params) => ({
				url: "/admin/contacts",
				params: getParamsFromSearchParams(params)
			})
		})
	})
})

export const {
	useLoginMutation,
	useLazyGetProfileQuery,
	useGetSubmissionsQuery,
	useGetScheduleSubmissionsQuery,
	useGetCashBuyerSubmissionsQuery,
	useGetContactFormsQuery,
	useAddContactMutation,
	useGetContactsQuery
} = authApi
