import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type EventState = {
  subscribeModal: {
    isOpen: boolean
    eventId: string
    eventTitle: string
  }
}

export const initialState: EventState = {
  subscribeModal: {
    isOpen: false,
    eventId: '',
    eventTitle: '',
  },
}

const slice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    openSubscribeEventModal: (
      state,
      action: PayloadAction<{ eventId: string; eventTitle: string }>,
    ) => {
      state.subscribeModal.isOpen = true
      state.subscribeModal.eventId = action.payload.eventId
      state.subscribeModal.eventTitle = action.payload.eventTitle
    },
    closeSubscribeEventModal: state => {
      state.subscribeModal.isOpen = false
      state.subscribeModal.eventId = ''
      state.subscribeModal.eventTitle = ''
    },
  },
})

export const { openSubscribeEventModal, closeSubscribeEventModal } =
  slice.actions
export default slice.reducer
