import { User } from '@/@types/models'
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
      authApi.endpoints.signIn.matchFulfilled,
      (state, action) => {
        localStorage.setItem(TOKEN_KEY, action.payload.token)

        state.token = action.payload.token
        state.user = action.payload.user
      },
    )
  },
})

export const { logout } = slice.actions
export default slice.reducer
