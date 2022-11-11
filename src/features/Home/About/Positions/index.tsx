import Eudes from '@/assets/eudes.png'
import Joao from '@/assets/joao.png'
import Roberto from '@/assets/roberto.png'
import Ronaldo from '@/assets/ronaldo.png'
import Silvio from '@/assets/silvio.png'
import Tecio from '@/assets/tecio.png'

import { Position } from '../Position'
import * as S from './styles'

export const Positions = () => {
  const usersPosition = [
    {
      role: 'Presidente',
      name: 'Missionário Ronaldo Cabral Dias',
      image: Ronaldo,
    },
    { role: 'Vice-Presidente', name: 'Pr. João Barboza', image: Joao },
    { role: '1º Secretário', name: 'Silvio Nunes dos Santos', image: Silvio },
    { role: '2º Secretário', name: 'Eudes da Silva Barboza', image: Eudes },
    {
      role: '1º Tesoureiro',
      name: 'Temístocles Tércio da Silva Medeiros',
      image: Tecio,
    },
    {
      role: '2º Tesoureiro',
      name: 'Pb. José Roberto da Silva Teixeira',
      image: Roberto,
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
