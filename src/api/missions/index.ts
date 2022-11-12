import api from '..'
import axios from '../axios'
import {
  CreateMissionRequest,
  CreateMissionResponse,
  DeleteMissionImageRequest,
  FetchMissionRequest,
  FetchMissionResponse,
  ListMissionsRequest,
  ListMissionsResponse,
  UpdateMissionRequest,
  UploadMissionImageRequest,
} from './types'

const endpoints = {
  fetchMission: (id: string) => `missions/${id}`,
  listMissions: () => 'missions',
  createMission: () => 'missions',
  updateMission: (id: string) => `missions/${id}`,
  uploadImage: (id: string) => `missions/${id}/upload`,
  deleteImage: (missionId: string, imageId: string) =>
    `missions/${missionId}/images/${imageId}`,
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchMission: builder.query<FetchMissionResponse, FetchMissionRequest>({
      query: ({ id }) => endpoints.fetchMission(id),
      providesTags: [{ type: 'Missions', id: 'Id' }],
    }),
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
    updateMission: builder.mutation<void, UpdateMissionRequest>({
      query: ({ id, ...body }) => ({
        url: endpoints.updateMission(id),
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Missions'],
    }),
    deleteMissionImage: builder.mutation<void, DeleteMissionImageRequest>({
      query: ({ missionId, imageId }) => ({
        url: endpoints.deleteImage(missionId, imageId),
        method: 'DELETE',
      }),
      invalidatesTags: ['Missions', { type: 'Missions', id: 'Id' }],
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

export const {
  useFetchMissionQuery,
  useListMissionsQuery,
  useCreateMissionMutation,
  useUpdateMissionMutation,
  useDeleteMissionImageMutation,
} = eventsApi

export default eventsApi
