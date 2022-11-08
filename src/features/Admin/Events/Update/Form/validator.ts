import { z } from 'zod'

import { CreateEventRequest } from '@/api/events/types'
import { validateTime } from '@/utils/datetime'
import { addressSchema, requiredString, requiredTodayDate } from '@/utils/zod'

const schema: z.ZodType<CreateEventRequest> = z.lazy(() =>
  z.object({
    title: requiredString,
    description: requiredString,
    youtubeUrl: z
      .string()
      .url('Informe uma URL válida')
      .optional()
      .or(z.literal('')),
    startDate: requiredTodayDate,
    startHour: requiredString.refine(
      validateTime,
      'Informe uma hora válida (HH:mm)',
    ),
    canSubscribe: z.boolean({ required_error: 'Campo obrigatório' }),
    address: addressSchema,
  }),
)

export type FormProps = z.infer<typeof schema>

export default schema
