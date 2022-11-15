import { z } from 'zod'

import { UpdateMissionRequest } from '@/api/missions/types'
import { addressSchema, requiredString } from '@/utils/zod'

const schema: z.ZodType<Omit<UpdateMissionRequest, 'id'>> = z.lazy(() =>
  z.object({
    title: requiredString,
    description: requiredString,
    youtubeUrl: z
      .string()
      .url('Informe uma URL válida')
      .optional()
      .or(z.literal('')),
    startDate: requiredString,
    startHour: requiredString,
    address: addressSchema,
  }),
)

export type FormProps = z.infer<typeof schema>

export default schema
