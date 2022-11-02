import * as S from './styles'
import { BsBoxArrowUpRight, BsCalendarEvent, BsClock } from 'react-icons/bs'
import { TbMap2 } from 'react-icons/tb'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import SetDefaultOptions from 'date-fns/setDefaultOptions'
import { InfoCards } from '../InfoCards'
import tw from 'twin.macro'
import { Routes } from '@/routes/routes'
import { useFetchEventMainQuery } from '@/api/events'

export const MainEvent = () => {
  SetDefaultOptions({ locale: ptBR })

  const { data: event, isLoading } = useFetchEventMainQuery()

  if (isLoading) {
    return <div>Carregando...</div>
  }
  if (!event) {
    return <div>Evento não existe!</div>
  }

  const { canSubscribe, id, startDate, address, title, startHour, images } =
    event

  const date = format(new Date(startDate), 'dd LLLL')

  return (
    <S.Container>
      <S.BannerContainer>
        <S.BannerContent>
          <S.Title>{title}</S.Title>
          {canSubscribe && (
            <S.Button size="sm" variant={'outlined'} fullWidth>
              Inscreva-se
            </S.Button>
          )}
        </S.BannerContent>
        <S.Image src={images[0].url} />
      </S.BannerContainer>
      <S.Content>
        <InfoCards
          icon={<BsCalendarEvent size={20} />}
          primaryTextColor={tw`text-blue-500`}
          bgColorIcon={tw`bg-blue-150`}
          titleColor={tw`text-gray-500`}
          title={'Data'}
          description={[date]}
        />
        <InfoCards
          icon={<TbMap2 size={30} />}
          primaryTextColor={tw`text-blue-500`}
          bgColorIcon={tw`bg-blue-150`}
          titleColor={tw`text-gray-500`}
          title={'Endereço'}
          description={[
            `${address?.street}, ${address?.number}`,
            `${address?.city} - ${address?.state}`,
          ]}
        />
        <InfoCards
          icon={<BsClock size={20} />}
          primaryTextColor={tw`text-blue-500`}
          bgColorIcon={tw`bg-blue-150`}
          titleColor={tw`text-gray-500`}
          title={'Horário'}
          description={[startHour]}
        />
        <S.SeeMore to={Routes.Eventos_Id.replace(':id', id)}>
          <InfoCards
            icon={<BsBoxArrowUpRight size={20} />}
            primaryTextColor={tw`text-blue-500`}
            bgColorIcon={tw`bg-blue-150`}
            titleColor={tw`text-gray-500`}
            description={['Saiba Mais!']}
          />
        </S.SeeMore>
      </S.Content>
    </S.Container>
  )
}
