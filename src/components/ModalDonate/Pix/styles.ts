import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div(
  tw`w-full flex flex-col items-center justify-center gap-8 py-9`,
)

export const KeyPix = styled.h3(tw`text-xl font-bold`)

export const QrCode = styled.img(tw`w-6/12 shadow-2xl`)
