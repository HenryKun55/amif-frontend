import { z } from 'zod'

import { removeMaskCurrency } from '@/utils/mask'

type Request = {
  name: string
  value: string
}

const schema: z.ZodType<Request> = z.lazy(() =>
  z.object({
    name: z
      .string({ required_error: 'Campo obrigatório' })
      .min(2, 'Mínimo de duas letras'),
    value: z.string({ required_error: 'Campo obrigatório' }).refine(arg => {
      const value = removeMaskCurrency(arg)
      return value >= 10
    }, 'Valor mínimo é 10'),
  }),
)

export type FormProps = z.infer<typeof schema>

export default schema
