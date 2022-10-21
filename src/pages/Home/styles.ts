import tw, { styled } from 'twin.macro'

export const Container = styled.div([tw`w-full h-full flex flex-col `])

export const List = styled.ul([tw`flex flex-col gap-4 p-5 list-none`])

export const ListItem = styled.li([
  tw`flex p-2 border border-purple-300 justify-center rounded-r`,
])
