import { createSlice } from '@reduxjs/toolkit'

export type EventState = {
  maintainerModal: {
    isOpen: boolean
  }
}

export const initialState: EventState = {
  maintainerModal: {
    isOpen: false,
  },
}

const slice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    openMaintainerModal: state => {
      state.maintainerModal.isOpen = true
    },
    closeMaintainerModal: state => {
      state.maintainerModal.isOpen = false
    },
  },
})

export const { openMaintainerModal, closeMaintainerModal } = slice.actions
export default slice.reducer
