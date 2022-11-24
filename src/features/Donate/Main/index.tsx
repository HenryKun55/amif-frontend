import help1 from '@/assets/help-1.jpg'

import * as S from './styles'

export const MainDonate = () => {
  return (
    <S.WrapperMain>
      <S.Wrapper>
        <S.Image src={help1} />
        <S.Container>
          <S.TitleContainer>
            <S.Title>Ajude</S.Title>
            <S.TitleSub>
              nessa <S.TitleSubEmphasis>obra</S.TitleSubEmphasis>
            </S.TitleSub>
          </S.TitleContainer>
          <S.Description>
            Sendo um dos fortes impulsos para o nascimento da AMIF, as viagens
            do Missionário Ronaldo Cabral a Moçambique, África, ocorreram em
            dois anos consecutivos. A primeira foi em Junho de 2018, com duração
            de 30(trinta) dias. Nesta viagem, além do missionário Ronaldo
            Cabral, o Pr Edson Guedes e outros servos de Deus compuseram a
            equipe missionária da 1ª Igreja Congregacional Vale da Benção em
            Caruaru. Nesse empreendimento, após evangelização em algumas aldeias
            da província de Niassa, foram alcançadas 45 vidas para o Senhor
            Jesus.
          </S.Description>
        </S.Container>
      </S.Wrapper>
      <S.Description>
        A necessidade constatada em Moçambique em 2018 inflamou o coração do
        Missionário Ronaldo, que passou a planejar uma segunda viagem àquele
        país já no ano seguinte. E assim, em 2019, foi criado o projeto da
        “Tríplice Cruzada–África para Jesus”, objetivando alcançar comunidades
        de Moçambique, Malawi e Tanzânia, países fronteiriços. Como resultado
        desta empreitada missionária, cerca de 415 pessoas foram alcançadas pelo
        evangelho do Senhor Jesus, em diferentes locais de Moçambique. Uma
        igreja foi plantada na aldeia de Chulucuto, em Lichinga, capital da
        província do Niassa. Um obreiro nativo, hoje integrado como missionário
        da AMIF, ficou assistindo a igreja plantada. <br /> <br />
        Participaram desse projeto missionário “Tríplice Cruzada – África para
        Jesus”, além do Miss. Ronaldo Cabral, o Pr. Edson Guedes, de João Pessoa
        – PB, e Ev. Moises Phiri, obreiro nativo. A ação missionária realizou a
        construção de um templo na aldeia de Chulucuto. Para tanto, contou com o
        apoio do Pr. Eduardo Cardoso, presidente da convenção das Assembléias de
        Deus do Niassa.
      </S.Description>
    </S.WrapperMain>
  )
}
