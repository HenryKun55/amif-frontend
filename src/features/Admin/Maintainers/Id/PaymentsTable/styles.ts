import tw, { styled } from 'twin.macro'

import { Button } from '@/components/Form/Button'

export const PaymentsTitleContainer = styled.div([
  tw`w-full flex justify-between px-8`,
])

export const PaymentsTitle = styled.div([
  tw`text-3xl text-black font-extrabold`,
])

export const AddPaymentButton = styled(Button)([tw`flex gap-2 items-center`])

export const TableWrapper = styled.div([tw`w-full p-8`])
