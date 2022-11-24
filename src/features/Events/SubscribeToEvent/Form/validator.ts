import { z } from 'zod'

import { SubscribeToEventRequest } from '@/api/events/types'
import { optionalString, requiredString } from '@/utils/zod'

const schema: z.ZodType<SubscribeToEventRequest> = z.lazy(() =>
  z.object({
    eventId: requiredString,
    pastorName: optionalString,
    howKnow: optionalString,
    church: optionalString,
    alreadyHeard: optionalString,
    phone: requiredString,
    name: requiredString,
    email: requiredString.email('E-mail Obrigatório'),
  }),
)

export type FormProps = z.infer<typeof schema>

export default schema
