import { Button as ButtonComponent } from '@/components/Form/Button'
import tw, { styled } from 'twin.macro'

export const Container = styled.form(tw`w-full flex flex-col p-4 gap-6`)

export const Title = styled.span(tw``)

export const OptionsContainer = styled.div(tw`flex justify-between gap-2`)

export const OtherValueContainer = styled.div(tw` flex flex-col`)

export const Button = styled(ButtonComponent)(tw` flex-1`)
