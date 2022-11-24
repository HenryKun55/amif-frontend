import { z } from 'zod'

import { CreateMaintainerRequest } from '@/api/maintainers/types'
import { removeMaskCurrency } from '@/utils/mask'
import { addressSchema, requiredString } from '@/utils/zod'

type Request = Omit<CreateMaintainerRequest, 'donateAmount' | 'donateDay'> & {
  donateAmount: string
  donateDay: string
}

const schema: z.ZodType<Request> = z.lazy(() =>
  z.object({
    name: requiredString,
    cpf: requiredString,
    phone: requiredString,
    donateAmount: z
      .string({ required_error: 'Campo obrigatório' })
      .refine(arg => {
        const value = removeMaskCurrency(arg)
        return value >= 10
      }, 'Valor mínimo é 10'),
    donateDay: z
      .string({ required_error: 'Campo obrigatório' })
      .refine(
        arg => arg && Number(arg) >= 1 && Number(arg) <= 31,
        'Valor inválido',
      ),
    address: addressSchema,
  }),
)

export type FormProps = z.infer<typeof schema>

export default schema
