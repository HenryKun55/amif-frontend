import { BannerEventMain } from '@/components/BannerEventMain'
import tw, { styled } from 'twin.macro'

const Container = styled.div([tw`w-screen h-full flex flex-col`])

export function Playground() {
  const event = {
    startDate: new Date().toString(),
    startHour: '19:30',
    canSubscribe: true,
    description:
      'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.',
    title: 'O que é o Lorem Ipsum?',
    image: {
      id: 'imag',
      url: 'https://img.freepik.com/free-photo/volunteers-working-sorting-point-looking-busy_259150-57350.jpg?w=740&t=st=1666224981~exp=1666225581~hmac=ae1a8abf5d1cd44392f06af1ccbabd5d836647a64cb0556dcfaf14083e8a9cd4',
    },
    address: {
      street: 'Rua Silvanio Martins de Goes Cavalcante',
      state: 'PE',
      city: 'Caruaru',
    },
  }
  return (
    <Container>
      <BannerEventMain event={event} />
    </Container>
  )
}
