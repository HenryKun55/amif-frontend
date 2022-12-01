import { createSlice } from '@reduxjs/toolkit'

export type MaintainerState = {
  maintainerModal: {
    isOpen: boolean
  }
}

export const initialState: MaintainerState = {
  maintainerModal: {
    isOpen: false,
  },
}

const slice = createSlice({
  name: 'maintainer',
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
