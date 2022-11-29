import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import tw, { styled } from 'twin.macro'

import { MaintainerForm } from '@/components/MaintainerForm'
import schema, { FormPropsOutput } from '@/components/MaintainerForm/validator'

const Container = styled.div([tw`w-full h-full flex`])

export function Playground() {
  const formMethods = useForm<FormPropsOutput>({
    resolver: zodResolver(schema),
  })

  return (
    <Container>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(data => console.log(data))}>
          <MaintainerForm isLoading={false} />
        </form>
      </FormProvider>
    </Container>
  )
}
