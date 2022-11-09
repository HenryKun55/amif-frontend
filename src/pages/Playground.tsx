import { useState } from 'react'
import tw, { styled } from 'twin.macro'

import { Button } from '@/components/Form/Button'
import { ModalConfirmAction } from '@/components/ModalConfirmAction'

const Container = styled.div([tw`w-full max-w-container mx-auto p-4`])

export function Playground() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Container>
      <ModalConfirmAction
        title="Você deseja tornar esse evento como principal? Você só pode ter um evento definido como principal"
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => {
          console.log('Confirmando')
          setIsOpen(false)
        }}
      />
      <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
    </Container>
  )
}
