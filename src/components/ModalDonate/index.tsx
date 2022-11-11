import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useMemo, useState } from 'react'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { BsBank2 } from 'react-icons/bs'
import ReactModal from 'react-modal'

import pix from '@/assets/icone-pix.svg'
import { useModal } from '@/context/Modal'

import { Deposit } from './Deposit'
import { MercadoPago } from './MercadoPago'
import { Pix } from './Pix'
import * as S from './styles'

type Options = 'mp' | 'pix' | 'deposito'

export const ModalDonate = () => {
  const { open, onClose } = useModal()
  const [contentAnimated] = useAutoAnimate<HTMLDivElement>()
  const [active, setActive] = useState<Options>('mp')

  const handleActiveMenu = (item: Options) => {
    setActive(item)
  }

  const content = useMemo(() => {
    switch (active) {
      case 'mp':
        return <MercadoPago />
      case 'pix':
        return <Pix />
      case 'deposito':
        return <Deposit />
    }
  }, [active])

  return (
    <ReactModal
      style={S.reactModalStyles}
      isOpen={open}
      onRequestClose={onClose}
    >
      <S.MenuTab>
        <S.Tabs>
          <S.Item
            onClick={() => handleActiveMenu('mp')}
            active={active === 'mp'}
          >
            <AiOutlineCreditCard size={30} />
            Mercado Pago
          </S.Item>

          <S.Item
            onClick={() => handleActiveMenu('pix')}
            active={active === 'pix'}
          >
            <S.Logo src={pix} /> PIX
          </S.Item>

          <S.Item
            onClick={() => handleActiveMenu('deposito')}
            active={active === 'deposito'}
          >
            <BsBank2 size={30} />
            Depósito em conta
          </S.Item>
        </S.Tabs>
      </S.MenuTab>
      <S.Content ref={contentAnimated}>{content}</S.Content>
    </ReactModal>
  )
}
