import { z } from 'zod'

import { removeMaskCurrency } from '@/utils/mask'
import { requiredString } from '@/utils/zod'

const schema = z.lazy(() =>
  z
    .object({
      paymentDate: requiredString,
      amount: requiredString,
    })
    .transform(data => ({
      ...data,
      amount: removeMaskCurrency(data.amount),
    })),
)

export type FormPropsInput = z.input<typeof schema>
export type FormPropsOutput = z.output<typeof schema>

export default schema
