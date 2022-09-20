import { User } from '@/@types/models/User'
import { createSlice } from '@reduxjs/toolkit'

import { TOKEN_KEY } from '../../api'
import authApi from '../../api/auth'

export type AuthState = {
  token: string | null
  user: User | null
}

export const initialState: AuthState = {
  token: null,
  user: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null
      state.user = null
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        localStorage.setItem(TOKEN_KEY, action.payload.access_token)

        state.token = action.payload.access_token
        state.user = action.payload.user
      },
    )

    builder.addMatcher(
      authApi.endpoints.getUserProfile.matchFulfilled,
      (state, action) => {
        state.user = action.payload
      },
    )
  },
})

export const { logout } = slice.actions
export default slice.reducer
