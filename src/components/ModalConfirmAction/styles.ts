import tw, { styled } from 'twin.macro'

export const reactModalStyles = {
  overlay: { zIndex: 50 },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '200px',
    boxShadow: '0px 0px 5px 0px rgba(50, 50, 50, 0.5)',
    borderRadius: '0.25rem',
    padding: 0,
  },
}

export const Container = styled.div([tw``])

export const Content = styled.div([
  tw`w-full h-full p-4 flex flex-col justify-between gap-4`,
])

export const Title = styled.div([tw`flex-1`])

export const Actions = styled.div([tw`flex justify-end gap-4`])
