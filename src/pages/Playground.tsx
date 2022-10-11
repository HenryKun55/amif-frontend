import { Button } from '@/components/Form/Button'
import { Input } from '@/components/Form/Input'
import { useForm } from 'react-hook-form'

export function Playground() {
  const { register } = useForm()
  return (
    <div>
      <Button disabled variant="outlined">
        Primary
      </Button>
      <Input
        name="labelsada"
        register={register}
        label="labelsada"
        placeholder="labelsada input"
        errors={{
          labelsada: { message: 'meu pau na tua calçada' },
        }}
      />
    </div>
  )
}
