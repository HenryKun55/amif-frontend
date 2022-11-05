import { useForm } from 'react-hook-form'
import { MdSearch } from 'react-icons/md'

import { Breadcrumb } from '@/components/Breadcrumb'

import * as S from './styles'

export const AdminMissions = () => {
  const { register } = useForm()
  return (
    <S.Container>
      <Breadcrumb path={['Missões']} showButton />
      <S.Content>
        <S.Input
          leftIcon={<MdSearch size={18} color="gray" />}
          shape="pill"
          label="Pesquisar por título"
          register={register}
          name="search"
          height="sm"
        />
      </S.Content>
    </S.Container>
  )
}
