import { z } from 'zod'

import { CreateAssociateRequest } from '@/api/associates/types'
import { addressSchema, optionalString, requiredString } from '@/utils/zod'

const schema: z.ZodType<CreateAssociateRequest> = z.lazy(() =>
  z.object({
    address: addressSchema,
    indication: optionalString,
    name: requiredString,
    email: z.string().email(),
    birthDate: requiredString,
    phone: requiredString,
    rg: requiredString,
    cpf: requiredString,
    category: z.enum(['founded_partners', 'contributing_partner']).optional(),
    ecclesiastical: z
      .object({
        church: optionalString,
        admissionDate: optionalString,
        position: optionalString,
      })
      .optional(),
    education: z
      .object({
        level: optionalString,
        background: optionalString,
        hasTheologyBackground: z.boolean().optional(),
        language: optionalString,
      })
      .optional(),
  }),
)

export type FormProps = z.infer<typeof schema>

export default schema
