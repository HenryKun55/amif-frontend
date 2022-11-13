import tw, { styled } from 'twin.macro'

import { Button as ButtonComponent } from '@/components/Form/Button'

export const Wrapper = styled.div(
  tw`w-full flex flex-col items-center justify-center gap-4 py-9`,
)

export const KeyPix = styled.h3(tw`text-xl text-center`)

export const QrCode = styled.img(tw`w-6/12 shadow-2xl`)

export const Button = styled(ButtonComponent)(tw`w-max`)

export const Message = styled.span(tw`text-gray-600 font-extrabold`)
