import { FieldValues, Path } from 'react-hook-form'
import { UseFormSetError } from 'react-hook-form'

import { ApiError } from '@/api/types'

const handleFormError = <T extends FieldValues>(
  error: { data?: ApiError },
  setError: UseFormSetError<T>,
) => {
  const fields = error.data?.fields
  if (fields) {
    fields.forEach(({ name, message }) => {
      setError(name as Path<T>, {
        type: 'manual',
        message,
      })
    })
  }
}

export default handleFormError
