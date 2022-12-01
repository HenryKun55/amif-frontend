import tw, { styled } from 'twin.macro'

import { Button } from '../Form/Button'

export const reactModalStyles: ReactModal.Styles = {
  overlay: {
    zIndex: 50,
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    maxWidth: '800px',
    height: '600px',
    boxShadow: '0px 0px 20px 0px rgba(50, 50, 50, 0.75)',
    borderRadius: '0.25rem',
    padding: 0,
    overflowY: 'auto',
  },
}

export const Form = styled.form([tw`w-full flex flex-col py-6`])

export const Title = styled.h1([tw`text-3xl font-bold pb-6 text-center`])

export const SubmitButton = styled(Button)([tw`mr-8 self-end`])

SubmitButton.defaultProps = {
  type: 'submit',
}
