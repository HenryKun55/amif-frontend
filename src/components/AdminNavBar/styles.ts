import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`h-16 border-b px-8 flex items-center justify-between`,
])

export const Logo = styled(Link)([tw``])
