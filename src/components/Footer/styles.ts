import tw, { styled } from 'twin.macro'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Wrapper = styled.footer([
  tw`flex flex-col items-center min-h-[300px] p-10 bg-blue-50`,
])

export const Container = styled.div([
  tw`flex flex-wrap gap-3 justify-center lg:(flex w-full max-w-container justify-between)`,
])

export const Content = styled.div([tw`flex flex-wrap flex-col`])

export const Logo = styled.img([tw`w-[134px] h-[64px] object-contain`])

export const Title = styled.span([tw`text-sm text-gray-700`])

export const Social = styled.div([tw`flex gap-4 pt-5 justify-center`])

export const SocialLink = styled.a()

export const FacebookIcon = styled(BsFacebook)([
  tw`w-10 h-10 rounded-full text-blue-400`,
])
export const InstagramIcon = styled(BsInstagram)([tw`w-10 h-10 text-blue-400`])

export const Navigation = styled.ul([
  tw`flex gap-4 py-5 flex-wrap items-center justify-center md:gap-14 lg:py-0`,
])

export const NavigationLink = styled(Link)([tw`w-full md:max-w-max`])

export const NavigationText = styled.li([
  tw`text-lg font-semibold text-gray-800 text-center md:text-left hover:text-blue-500`,
])

export const Description = styled.p([
  tw`mt-auto text-gray-600 text-center pt-5`,
])
