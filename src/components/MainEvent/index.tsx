import * as S from './styles'
import { BsBoxArrowUpRight, BsCalendarEvent, BsClock } from 'react-icons/bs'
import { TbMap2 } from 'react-icons/tb'
import { format } from 'date-fns'
import { InfoCards } from '../InfoCards'
import tw from 'twin.macro'
import { Routes } from '@/routes/routes'
import { useFetchEventMainQuery } from '@/api/events'

export const MainEvent = () => {
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
        <S.Image src={images[0]?.url} />
      </S.BannerContainer>
      <S.Content>
        <InfoCards
          icon={<BsCalendarEvent color="red" size={20} />}
          primaryTextColor={tw`text-red-500`}
          bgColorIcon={tw`bg-red-100`}
          titleColor={tw`text-red-400`}
          title={'Data'}
          description={[date]}
        />
        <InfoCards
          icon={<TbMap2 color="green" size={30} />}
          primaryTextColor={tw`text-green-600`}
          bgColorIcon={tw`bg-green-100`}
          titleColor={tw`text-green-400`}
          title={'Endereço'}
          description={[
            `${address?.street}, ${address?.number}`,
            `${address?.city} - ${address?.state}`,
          ]}
        />
        <InfoCards
          icon={<BsClock color="brown" size={20} />}
          primaryTextColor={tw`text-brown-500`}
          bgColorIcon={tw`bg-brown-100`}
          titleColor={tw`text-brown-400`}
          title={'Horário'}
          description={[startHour]}
        />
        <S.SeeMore to={Routes.Eventos_Id.replace(':id', id)}>
          <InfoCards
            icon={<BsBoxArrowUpRight color="blue" size={20} />}
            primaryTextColor={tw`text-blue-500`}
            bgColorIcon={tw`bg-blue-100`}
            titleColor={tw`text-blue-400`}
            description={['Saiba Mais!']}
          />
        </S.SeeMore>
      </S.Content>
    </S.Container>
  )
}
