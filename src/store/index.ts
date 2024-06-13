import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/auth"
import { authApi } from "./api/dashboard-service"

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[authApi.reducerPath]: authApi.reducer
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat([authApi.middleware])
	},

	devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
