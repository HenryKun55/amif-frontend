import Silvio from '@/assets/silvio.jpeg'

import { Position } from '../Position'
import * as S from './styles'

export const Positions = () => {
  const usersPosition = [
    {
      role: 'Presidente',
      name: 'Missionário Ronaldo Cabral Dias',
      image:
        'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=996&t=st=1667868971~exp=1667869571~hmac=bd91fc56e4fe237c2749cecb3625e3ac788a52be030762c3339b94e476fceda1',
    },
    { role: 'Vice-Presidente', name: 'Pr. João Barboza', image: '' },
    { role: '1º Secretário', name: 'Silvio Nunes dos Santos', image: Silvio },
    { role: '2º Secretário', name: 'Eudes da Silva Barboza', image: '' },
    {
      role: '1º Tesoureiro',
      name: 'Temístocles Tércio da Silva Medeiros',
      image: '',
    },
    {
      role: '2º Tesoureiro',
      name: 'Pb. José Roberto da Silva Teixeira',
      image: '',
    },
  ]
  return (
    <S.ContainerPosition>
      {usersPosition.map(user => (
        <Position
          key={user.name}
          name={user.name}
          role={user.role}
          image={user.image}
        />
      ))}
    </S.ContainerPosition>
  )
}
