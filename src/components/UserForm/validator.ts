import { z } from 'zod'

import { CreateUserRequest } from '@/api/users/types'
import { requiredString } from '@/utils/zod'

const schema: z.ZodType<CreateUserRequest> = z.lazy(() =>
  z.object({
    username: requiredString,
    password: requiredString,
  }),
)

export type FormPropsInput = z.input<typeof schema>
export type FormPropsOutput = z.output<typeof schema>

export default schema
