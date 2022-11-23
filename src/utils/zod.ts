import { z } from 'zod'

export const requiredString = z
  .string({ required_error: 'Campo obrigatório.' })
  .min(1, 'Campo obrigatório')

export const optionalString = z.string().optional()

export const requiredTodayDate = requiredString.refine(value => {
  const [theDate] = value.split('T')
  return new Date(`${theDate}T23:59:59`) >= new Date()
}, 'A data não pode estar no passado')

export const addressSchema = z.object({
  state: requiredString,
  district: requiredString,
  city: requiredString,
  street: requiredString,
  number: requiredString,
  zipCode: requiredString,
})
