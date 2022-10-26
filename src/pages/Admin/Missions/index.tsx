import * as S from './styles'
import { MdSearch } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { Breadcrumb } from '@/components/Breadcrumb'

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
