import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../types'
import { initialState } from './slice'

const selectCartStateDomain = (state: RootState) => state.cart || initialState

export const selectCartModalVisible = createSelector(
  selectCartStateDomain,
  state => state.modalVisible,
)

export const selectCartAwardValue = createSelector(
  selectCartStateDomain,
  state => state.awardValue,
)

export const selectCartBets = createSelector(
  selectCartStateDomain,
  state => state.bets,
)

export const selectCartBetAmount = createSelector(
  selectCartStateDomain,
  state => state.betAmount,
)

export const selectCartQuote = createSelector(selectCartStateDomain, state =>
  state.bets.reduce((acc, bet) => acc * Number(bet.id), 1).toFixed(2),
)
