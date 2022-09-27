import api from '..'
import {
  CreateMissionRequest,
  CreateMissionResponse,
  FindMissionRequest,
  FindMissionResponse,
  ListMissionsRequest,
  ListMissionsResponse,
  UpdateMissionRequest,
} from './types'

const endpoints = {
  createMission: () => '/missions',
  listMissions: () => '/missions',
  findMission: (id: string) => `/missions${id}`,
  updateMission: (id: string) => `/missions${id}`,
}

const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    createEvent: builder.mutation<CreateMissionResponse, CreateMissionRequest>({
      query: params => ({
        url: endpoints.createMission(),
        params,
      }),
    }),
    listMissions: builder.query<ListMissionsResponse, ListMissionsRequest>({
      query: params => ({
        url: endpoints.listMissions(),
        params,
      }),
      providesTags: result =>
        result?.data
          ? [
              ...result.data.map(
                ({ id }) => ({ type: 'Missions', id } as const),
              ),
              { type: 'Missions', id: 'LIST' },
            ]
          : [{ type: 'Missions', id: 'LIST' }],
    }),
    findMission: builder.query<FindMissionResponse, FindMissionRequest>({
      query: ({ id }) => endpoints.findMission(id),
    }),
    updateMission: builder.mutation<void, UpdateMissionRequest>({
      query: params => ({
        url: endpoints.updateMission(params.id),
        params,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateEventMutation,
  useListMissionsQuery,
  useFindMissionQuery,
  useUpdateMissionMutation,
} = eventsApi

export default eventsApi
