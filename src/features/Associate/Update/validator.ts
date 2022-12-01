import { z } from 'zod'

import { UpdateAssociateRequest } from '@/api/associates/types'
import { addressSchema, optionalString, requiredString } from '@/utils/zod'

const schema = z.lazy(() =>
  z
    .object({
      address: addressSchema,
      indication: optionalString.nullable(),
      name: requiredString,
      email: z.string().email(),
      birthDate: requiredString,
      phone: requiredString,
      rg: requiredString,
      cpf: requiredString,
      category: z.enum(['founded_partners', 'contributing_partner'], {
        required_error: 'Campo obrigatório',
        invalid_type_error: 'Campo obrigatório',
      }),
      status: z.object({
        label: z.string(),
        value: z.string(),
        color: z.string(),
      }),
      ecclesiastical: z
        .object({
          church: optionalString,
          admissionDate: optionalString,
          position: optionalString.nullable(),
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
      indication: data.indication || undefined,
      education: data.education
        ? {
            ...data.education,
            hasTheologyBackground:
              data.education.hasTheologyBackground || false,
            level: data.education.level || undefined,
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
