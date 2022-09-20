/**
 *
 * Combine all reducers in this file and export the combined reducers.
 *
 */

import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'

import api from '../api'
import authApi from '../api/auth'
import authSlice, { logout } from './auth/slice'
import cartSlice from './cart/slice'

/**
 * Merges the main reducer with the router state
 */
const appReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authSlice,
  cart: cartSlice,
})

const rootReducer = (state: CombinedState<any>, action: AnyAction) => {
  if (logout.match(action)) {
    state = undefined
  }

  return appReducer(state, action)
}

export { rootReducer }
