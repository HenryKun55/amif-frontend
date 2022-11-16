import tw, { css, styled } from 'twin.macro'

import { useResize } from '@/hooks/useResize'

const Container = styled.div([tw`w-full h-full flex`])

const Content = styled.div([
  tw`flex-1 h-full bg-blue-200 p-4 text-xl font-bold`,
])

const SideBar = styled.div<{ width: number }>(({ width }) => [
  tw`h-full relative bg-red-200 border-r border-black`,
  css`
    width: ${width}px;
  `,
])

const ResizeStick = styled.div([
  tw`absolute top-0 right-0 w-2 h-full bg-transparent`,
  css`
    cursor: col-resize;
  `,
])

export function Playground() {
  const { width, handleMouseDown } = useResize({
    initialWidth: 250,
    minWidth: 150,
    maxWidth: 800,
  })

  return (
    <Container>
      <SideBar width={width}>
        <ResizeStick onMouseDown={handleMouseDown} />
      </SideBar>
      <Content>
        <h1>Hello, world!</h1>
      </Content>
    </Container>
  )
}
