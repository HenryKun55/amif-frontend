import { z } from 'zod'

import { removeMaskCurrency } from '@/utils/mask'
import { addressSchema, requiredString } from '@/utils/zod'

const schema = z.lazy(() =>
  z
    .object({
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
    })
    .transform(data => ({
      ...data,
      donateDay: parseInt(data.donateDay),
      donateAmount: removeMaskCurrency(data.donateAmount),
    })),
)

export type FormPropsOutput = z.infer<typeof schema>

export default schema
