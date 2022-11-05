import api from '..'
import { CreateDonationLinkRequest, CreateDonationLinkResponse } from './types'

const endpoints = {
  createDonationLink: () => 'donation/generate-link',
}

const donationApi = api.injectEndpoints({
  endpoints: builder => ({
    createDonationLink: builder.mutation<
      CreateDonationLinkResponse,
      CreateDonationLinkRequest
    >({
      query: body => ({
        url: endpoints.createDonationLink(),
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useCreateDonationLinkMutation } = donationApi

export default donationApi
