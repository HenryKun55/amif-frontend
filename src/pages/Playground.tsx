import tw, { styled } from 'twin.macro'

const Container = styled.div([tw`w-full max-w-container mx-auto p-4`])

export function Playground() {
  return <Container></Container>
}
