import { z } from 'zod'

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
      category: z.enum(['founded_partners', 'contributing_partner']).optional(),
      status: z.enum(['approved', 'pending', 'inactive']),
      ecclesiastical: z
        .object({
          church: optionalString,
          admissionDate: optionalString,
          position: optionalString,
        })
        .optional(),
      education: z
        .object({
          level: optionalString.nullable(),
          background: optionalString,
          hasTheologyBackground: z.boolean().optional().nullable(),
          language: optionalString,
        })
        .optional(),
    })
    .transform(data => ({
      ...data,
      education: data.education
        ? {
            ...data.education,
            level: data.education.level || '',
            hasTheologyBackground:
              data.education.hasTheologyBackground || false,
          }
        : undefined,
      ecclesiastical: data.ecclesiastical
        ? {
            ...data.ecclesiastical,
            position: data.ecclesiastical.position || undefined,
          }
        : undefined,
    })),
)

export type FormPropsInput = z.input<typeof schema>
export type FormPropsOutput = z.output<typeof schema>

export default schema
