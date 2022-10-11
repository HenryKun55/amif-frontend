import { AdminNavBar } from '@/components/AdminNavBar'
import { SideBar } from '@/components/SideBar'
import tw, { styled } from 'twin.macro'

const Container = styled.div([tw`w-screen h-full flex flex-col`])

export function Playground() {
  return (
    <Container>
      <AdminNavBar />
      <SideBar />
    </Container>
  )
}
