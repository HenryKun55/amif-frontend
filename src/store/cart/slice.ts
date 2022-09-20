import { User } from '@/@types/models/User'
import { createSlice } from '@reduxjs/toolkit'

export type CartState = {
  modalVisible: boolean
  awardValue: number
  betAmount: number
  bets: User[]
}

export const initialState: CartState = {
  modalVisible: false,
  awardValue: 0,
  betAmount: 0,
  bets: JSON.parse(
    '[{"odd":"1.80","odd_id":"111590469_dd4b1c6539da_0_1.800","guess":"Ferroviaria SP U20","event_id":"111590469","market_id":"dd4b1c6539da","event_name":"Ferroviaria U20 X Guarani SP U20","market_name":"Vencedor da Partida","teams":{"home":{"id":"10509093","name":"Ferroviaria U20","shield":"https:\\/\\/ssl.gstatic.com\\/onebox\\/media\\/sports\\/logos\\/orE554NToSkH6nuwofe7Yg_96x96.png"},"away":{"id":"10449006","name":"Guarani SP U20","shield":"https:\\/\\/ssl.gstatic.com\\/onebox\\/media\\/sports\\/logos\\/PjgS7G0RTbdCkLWnD7G82A_96x96.png"}},"status":"win","event_date":"2021-12-05 17:00"}]',
  ),
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openModal(state) {
      if (state.betAmount === 0) {
        state.modalVisible = true
      }
    },
    hideModal(state) {
      state.modalVisible = false
    },
    clear(state) {
      state.modalVisible = initialState.modalVisible
      state.awardValue = initialState.awardValue
      state.betAmount = initialState.betAmount
      state.bets = initialState.bets
    },
    updateBetAmount(state, action: { payload: number }) {
      state.modalVisible = false
      state.betAmount = action.payload
    },
  },
})

export const { hideModal, openModal, clear, updateBetAmount } = slice.actions

export default slice.reducer
