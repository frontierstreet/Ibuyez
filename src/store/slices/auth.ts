import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
	user: {
		email: string
		firstName: string
		lastName: string
		token: string
		roles: string[]
	} | null
	token: string | null
}

const initialState: AuthState = {
	user: null,
	token: null
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authenticate: (state, action: PayloadAction<{ user: any; token: string }>) => {
			state.user = action.payload.user
			state.token = action.payload.token
			localStorage.setItem("auth", action.payload.token)
		},
		logout: (state) => {
			localStorage.clear()
			state.user = null
			state.token = null
		}
	}
})

export const { logout, authenticate } = authSlice.actions
export default authSlice.reducer
