import { CardMission } from '@/components/CardMission'
import tw, { styled } from 'twin.macro'

const Container = styled.div([tw`w-screen h-full flex flex-col`])

export function Playground() {
  const missions = [
    {
      description:
        'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.',
      title: 'Distribuição de Dolar',
      images: [
        {
          id: 'any',
          url: 'https://img.freepik.com/free-photo/diverse-business-people-with-masks-new-normal_53876-102662.jpg?w=900&t=st=1666138980~exp=1666139580~hmac=aee17053ef4ffced5715c2e8496554220d1dc9abbbcf8811723f1ce1d3ef04b1',
        },
      ],
      address: {
        state: 'PE',
        city: 'Recife',
      },
    },
    {
      description:
        'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.',
      title: 'Distribuição de Alimentos',
      images: [
        {
          id: 'any',
          url: 'https://img.freepik.com/free-photo/volunteer-handing-donation-box_23-2149230538.jpg?w=740&t=st=1666222572~exp=1666223172~hmac=55e37cbadcd5b297003704b77369ba2b168c718fcc062d569608fefa9b150303',
        },
      ],
      address: {
        state: 'PE',
        city: 'Guanabára de baixo',
      },
    },
    {
      description:
        'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.',
      title: 'Distribuição de Roupas',
      images: [
        {
          id: 'any',
          url: 'https://img.freepik.com/free-photo/close-up-volunteer-oganizing-stuff-donation_23-2149134484.jpg?w=740&t=st=1666222596~exp=1666223196~hmac=ce19fc123bb24c3da39a47bb7f6da9df08d860de75e0e8d2716994dded48f2ad',
        },
      ],
      address: {
        state: 'PE',
        city: 'Caruaru',
      },
    },
    {
      description:
        'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.',
      title: 'Arrecadação de Alimentos',
      images: [
        {
          id: 'any',
          url: 'https://img.freepik.com/free-photo/child-holding-red-rubber-heart_1150-18566.jpg?w=740&t=st=1666222642~exp=1666223242~hmac=b9b6464e60811e6fd916489529f467964701d9625a82ce9337bd710dda7faf73',
        },
      ],
      address: {
        state: 'PE',
        city: 'Agrestina',
      },
    },
  ]
  return (
    <div
      style={{
        display: 'flex',
        padding: '20px',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      {missions.map((mission, key) => {
        return <CardMission mission={mission} key={key} />
      })}
    </div>
  )
}
