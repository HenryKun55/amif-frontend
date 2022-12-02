import { z } from 'zod'

import { requiredString } from '@/utils/zod'

const schema = z.lazy(() =>
  z.object({
    username: requiredString,
    password: requiredString,
  }),
)

export type FormPropsInput = z.input<typeof schema>
export type FormPropsOutput = z.output<typeof schema>

export default schema
