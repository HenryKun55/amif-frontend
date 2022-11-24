import api from '..'
import { FetchCepRequest, FetchCepResponse } from './types'

const endpoints = {
  cep: (cep: string) => `https://viacep.com.br/ws/${cep}/json/`,
}

const viacepApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchCep: builder.query<FetchCepResponse, FetchCepRequest>({
      query: ({ cep }) => endpoints.cep(cep),
    }),
  }),
  overrideExisting: false,
})

export const { useFetchCepQuery } = viacepApi

export default viacepApi
