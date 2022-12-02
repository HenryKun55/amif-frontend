import SwitchRS from 'react-switch'
import tw, { styled } from 'twin.macro'

import { Input as InputComponent } from '@/components/Form/Input'

export const Container = styled.div([
  tw`w-full h-full flex flex-col gap-4 overflow-auto`,
])

export const Content = styled.div([tw`w-full flex flex-col gap-4 p-5`])

export const HeaderContent = styled.div([
  tw`w-full flex justify-between items-center`,
])

export const Input = styled(InputComponent)([tw`w-1/3 max-w-md`])

export const Switch = styled.div([tw`flex gap-2 items-center justify-center`])

export const SwitchText = styled.span([tw`text-sm text-gray-600 font-bold`])

export const SwitchComponent = styled(SwitchRS)([tw``])

SwitchComponent.defaultProps = {
  width: 36,
  height: 20,
  handleDiameter: 14,
  onColor: '#1061a9',
  checkedIcon: false,
  uncheckedIcon: false,
}
