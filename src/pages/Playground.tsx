
import tw, { styled } from 'twin.macro'

const Container = styled.div([tw`w-screen h-full flex flex-col`])

export function Playground() {
  return <Container>hello</Container>
}
