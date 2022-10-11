import { SideBar } from '@/components/SideBar'
import tw, { styled } from 'twin.macro'

const Container = styled.div([tw`w-full h-full`])

export function Playground() {
  return (
    <Container>
      <SideBar />
    </Container>
  )
}
