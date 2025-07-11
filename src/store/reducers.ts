/**
 *
 * Combine all reducers in this file and export the combined reducers.
 *
 */

import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'

import api from '../api'
import authSlice, { logout } from './auth/slice'
import eventSlice from './event/slice'
import maintainerSlice from './maintainer/slice'

/**
 * Merges the main reducer with the router state
 */
const appReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
  event: eventSlice,
  maintainer: maintainerSlice,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: CombinedState<any>, action: AnyAction) => {
  if (logout.match(action)) {
    state = undefined
  }

  return appReducer(state, action)
}

export { rootReducer }
