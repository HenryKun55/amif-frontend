import { useModal } from '@/context/Modal'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { BsBank2 } from 'react-icons/bs'
import ReactModal from 'react-modal'
import * as S from './styles'
import pix from '../../assets/icone-pix.svg'
import { useMemo, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

type Options = 'mp' | 'pix' | 'deposito'

export const ModalDonate = () => {
  const { open, onClose } = useModal()
  const [contentAnimated] = useAutoAnimate<HTMLDivElement>()
  const customStyles = {
    overlay: { zIndex: 50 },

    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: '500px',
      boxShadow: '0px 0px 20px 0px rgba(50, 50, 50, 0.75)',
      borderRadius: '0.25rem',
      padding: 0,
    },
  }
  const [active, setActive] = useState<Options>('mp')

  const handleActiveMenu = (item: Options) => {
    setActive(item)
  }

  const content = useMemo(() => {
    switch (active) {
      case 'mp':
        return <div>mercado pago</div>
      case 'pix':
        return <div>pix</div>
      case 'deposito':
        return <div>Deposito</div>
    }
  }, [active])

  return (
    <ReactModal style={customStyles} isOpen={open} onRequestClose={onClose}>
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
