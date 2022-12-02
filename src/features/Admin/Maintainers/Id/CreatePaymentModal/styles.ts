import tw, { styled } from 'twin.macro'

import { Button } from '@/components/Form/Button'

export const reactModalStyles = {
  overlay: {
    zIndex: 50,
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: 'fit-content',
    maxHeight: '600px',
    boxShadow: '0px 0px 5px 0px rgba(50, 50, 50, 0.5)',
    borderRadius: '0.25rem',
    padding: 0,
    overflow: 'hidden',
  },
}

export const Container = styled.div([tw``])

export const Header = styled.div([
  tw`w-full flex justify-between p-4 border-b border-gray-200`,
])

export const Title = styled.div([tw`text-lg font-semibold`])

export const CloseButton = styled.div([tw`cursor-pointer`])

export const Content = styled.div([
  tw`w-full h-full max-h-[539px] overflow-y-auto`,
])

export const Form = styled.form([tw`flex flex-col gap-4 p-4`])

export const Footer = styled.div([
  tw`w-full flex justify-end gap-4 border-t border-gray-200 p-4`,
])

export const CancelButton = styled(Button)([
  tw`text-red-500 border-red-500 hover:(text-red-400 border-red-500)`,
])

export const SubmitButton = styled(Button)([tw``])

SubmitButton.defaultProps = {
  type: 'submit',
}
