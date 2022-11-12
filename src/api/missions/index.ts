import api from '..'
import axios from '../axios'
import {
  CreateMissionRequest,
  CreateMissionResponse,
  ListMissionsRequest,
  ListMissionsResponse,
  UploadMissionImageRequest,
} from './types'

const endpoints = {
  listMissions: () => 'missions',
  createMission: () => 'missions',
  uploadImage: (id: string) => `missions/${id}/upload`,
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    listMissions: builder.query<ListMissionsResponse, ListMissionsRequest>({
      query: params => ({
        url: endpoints.listMissions(),
        params,
      }),
      providesTags: ['Missions'],
    }),
    createMission: builder.mutation<
      CreateMissionResponse,
      CreateMissionRequest
    >({
      query: body => ({
        url: endpoints.createMission(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Missions'],
    }),
  }),
  overrideExisting: false,
})

export function uploadMissionImage({ id, image }: UploadMissionImageRequest) {
  const formData = new FormData()
  formData.append('image', image)
  return axios.post(endpoints.uploadImage(id), formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const { useListMissionsQuery, useCreateMissionMutation } = eventsApi

export default eventsApi
