import { z } from 'zod'

import { UpdateAssociateRequest } from '@/api/associates/types'
import { addressSchema, optionalString, requiredString } from '@/utils/zod'

const schema = z.lazy(() =>
  z
    .object({
      address: addressSchema,
      indication: optionalString,
      name: requiredString,
      email: z.string().email(),
      birthDate: requiredString,
      phone: requiredString,
      rg: requiredString,
      cpf: requiredString,
      category: z.enum(['founded_partners', 'contributing_partner']),
      status: z.object({
        label: z.string(),
        value: z.string(),
        color: z.string(),
      }),
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
          hasTheologyBackground: z.boolean().optional().nullable(),
          language: optionalString,
        })
        .optional(),
    })
    .transform(data => ({
      ...data,
      status: data.status.value as UpdateAssociateRequest['status'],
      education: data.education
        ? {
            ...data.education,
            hasTheologyBackground:
              data.education.hasTheologyBackground || false,
          }
        : undefined,
    })),
)

export type FormPropsInput = z.input<typeof schema>
export type FormPropsOutput = z.output<typeof schema>

export default schema
