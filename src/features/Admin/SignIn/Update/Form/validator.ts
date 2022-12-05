import { z } from 'zod'

import { UpdateUserRequest } from '@/api/users/types'
import { requiredString } from '@/utils/zod'

const schema: z.ZodType<Omit<UpdateUserRequest, 'id'>> = z.lazy(() =>
  z.object({
    username: requiredString,
    password: requiredString,
  }),
)

export type FormProps = z.infer<typeof schema>

export default schema
