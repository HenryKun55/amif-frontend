import * as S from './style'
import Logo from '../../assets/logo.svg'
import { Button } from '../Form/Button'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Eventos', href: '/' },
    { name: 'Missões', href: '/' },
    { name: 'Torne-se um Mantenedor', href: '/' },
  ]
  return (
    <S.Container>
      <S.Logo>
        <S.Image src={Logo} alt="logo amif" />
      </S.Logo>
      <S.Content>
        <ul>
          {menuItems.map((item, key) => {
            return (
              <li key={key}>
                <Link to={item.href}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
      </S.Content>
      <S.Donate>
        <Button>Doe</Button>
      </S.Donate>
    </S.Container>
  )
}
