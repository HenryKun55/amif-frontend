import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../types'
import { initialState } from './slice'

const selectEventStateDomain = (state: RootState) => state.event || initialState

export const selectEventSubscribeModal = createSelector(
  selectEventStateDomain,
  state => state.subscribeModal,
)
