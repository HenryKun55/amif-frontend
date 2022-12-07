import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../types'
import { initialState } from './slice'

const selectMaintainerStateDomain = (state: RootState) =>
  state.maintainer || initialState

export const selectMaintainerModal = createSelector(
  selectMaintainerStateDomain,
  state => state.maintainerModal,
)
