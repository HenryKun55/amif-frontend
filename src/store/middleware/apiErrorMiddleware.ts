import { Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { AppState } from '../types'

type ApiError = {
  app?: {
    type: 'danger' | 'warning'
    message: string
  }[]
  field?: {
    name: string
    message: string
  }[]
}

const apiErrorMiddleware: Middleware<any, AppState> = () => {
  return next => action => {
    if (/api.*rejected/i.test(action.type)) {
      const apiError: ApiError = action.payload?.data
      if (apiError?.app) {
        apiError.app.forEach(data => {
          if (data.type === 'danger') toast.error(data.message)
          if (data.type === 'warning') toast.warn(data.message)
        })
        return next(action)
      }
    }
    return next(action)
  }
}

export default apiErrorMiddleware
