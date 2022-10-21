import { BannerEventMain } from '@/components/BannerEventMain'
import { CardEvent } from '@/components/CardEvent'
import * as S from './styles'

export function Home() {
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

  const links = [
    'https://img.freepik.com/free-photo/close-up-volunteer-oganizing-stuff-donation_23-2149134484.jpg?w=1380&t=st=1666368862~exp=1666369462~hmac=b18b7fbca9812bac6bb8da253441efdd195d9cd042bdb452ff1da0ea4d8a794a',
    'https://img.freepik.com/free-photo/people-holding-rubber-heart_1150-18576.jpg?w=1380&t=st=1666368923~exp=1666369523~hmac=c45d4d4c2ebb40104c23b8be89e03ef0f4fb107d7d078edb19b3371f8678e0db',
    'https://img.freepik.com/free-photo/closeup-diverse-people-joining-their-hands_53876-96081.jpg?w=1380&t=st=1666368953~exp=1666369553~hmac=6e80024b464a7c9c39653324240599de69aa90874484908ccad95742fd532f96',
    'https://img.freepik.com/free-photo/happy-excited-businessteam-celebrating-successful-partnership-enjoying-together-startup-office-diverse-smiling-businesspeople-achievement-business-collaboration-concept-victory_482257-36889.jpg?w=1380&t=st=1666368983~exp=1666369583~hmac=e2430956893ab15425ea3cf87cdb9247ea4adf43304424fe1d4d4e885f15ccc1',
    'https://img.freepik.com/free-vector/hand-drawn-clothing-donation-concept_52683-54767.jpg?w=1380&t=st=1666369005~exp=1666369605~hmac=2e33d0d4f20a0c367804bc98502abf3e55ffc50998f3dc26192c71b5cc6ca9f9',
    'https://img.freepik.com/free-photo/volunteer-selecting-organizing-clothes-donations-charity_23-2149230499.jpg?w=1380&t=st=1666369030~exp=1666369630~hmac=3eae7fe2e2d487942721969e307b0252957229a19c86fbe467113b41edb8ceb9',
    'https://img.freepik.com/free-photo/close-up-volunteer-oganizing-stuff-donation_23-2149134484.jpg?w=1380&t=st=1666368862~exp=1666369462~hmac=b18b7fbca9812bac6bb8da253441efdd195d9cd042bdb452ff1da0ea4d8a794a',
    'https://img.freepik.com/free-photo/people-holding-rubber-heart_1150-18576.jpg?w=1380&t=st=1666368923~exp=1666369523~hmac=c45d4d4c2ebb40104c23b8be89e03ef0f4fb107d7d078edb19b3371f8678e0db',
    'https://img.freepik.com/free-photo/closeup-diverse-people-joining-their-hands_53876-96081.jpg?w=1380&t=st=1666368953~exp=1666369553~hmac=6e80024b464a7c9c39653324240599de69aa90874484908ccad95742fd532f96',
    'https://img.freepik.com/free-photo/happy-excited-businessteam-celebrating-successful-partnership-enjoying-together-startup-office-diverse-smiling-businesspeople-achievement-business-collaboration-concept-victory_482257-36889.jpg?w=1380&t=st=1666368983~exp=1666369583~hmac=e2430956893ab15425ea3cf87cdb9247ea4adf43304424fe1d4d4e885f15ccc1',
    'https://img.freepik.com/free-vector/hand-drawn-clothing-donation-concept_52683-54767.jpg?w=1380&t=st=1666369005~exp=1666369605~hmac=2e33d0d4f20a0c367804bc98502abf3e55ffc50998f3dc26192c71b5cc6ca9f9',
    'https://img.freepik.com/free-photo/volunteer-selecting-organizing-clothes-donations-charity_23-2149230499.jpg?w=1380&t=st=1666369030~exp=1666369630~hmac=3eae7fe2e2d487942721969e307b0252957229a19c86fbe467113b41edb8ceb9',
  ]
  const events: {
    startDate: string
    startHour: string
    canSubscribe: boolean
    title: string
    images: { id: string; url: string }[]
    address: { state: string; city: string }
  }[] = []

  links.forEach((link, key) =>
    events.push({
      startDate: new Date().toString(),
      startHour: '19:30',
      canSubscribe: key % 2 === 0,
      title: 'Distribuição de Dolar',
      images: [
        {
          id: 'any',
          url: link,
        },
      ],
      address: {
        state: 'PE',
        city: 'Caruaru',
      },
    }),
  )

  return (
    <S.Container>
      <BannerEventMain event={event} />
      <S.Events>
        {events.map((item, key) => (
          <CardEvent event={item} key={key} />
        ))}
      </S.Events>
    </S.Container>
  )
}
