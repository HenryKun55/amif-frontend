import { z } from 'zod'

import { UpdateAssociateRequest } from '@/api/associates/types'
import { addressSchema, optionalString, requiredString } from '@/utils/zod'

const schema = z.lazy(() =>
  z
    .object({
      mode: z.string(),
      address: addressSchema,
      indication: optionalString.nullable(),
      name: requiredString,
      email: z.string().email(),
      birthDate: requiredString,
      phone: requiredString,
      rg: requiredString,
      cpf: requiredString,
      category: z
        .enum(['founded_partners', 'contributing_partner'], {
          required_error: 'Campo obrigatório',
          invalid_type_error: 'Campo obrigatório',
        })
        .optional(),
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
          level: optionalString.nullable(),
          background: optionalString,
          hasTheologyBackground: z.boolean().optional().nullable(),
          language: optionalString,
        })
        .optional(),
    })
    .transform(data => ({
      ...data,
      indication: data.indication || undefined,
      status: data.status.value as UpdateAssociateRequest['status'],
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
