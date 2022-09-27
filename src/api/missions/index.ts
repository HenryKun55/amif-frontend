import api from '..'
import {
  CreateMissionRequest,
  CreateMissionResponse,
  ListMissionsRequest,
  ListMissionsResponse,
} from './types'

const endpoints = {
  createMission: () => '/missions',
  listMissions: () => '/missions',
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
  }),
  overrideExisting: false,
})

export const { useListMissionsQuery, useCreateEventMutation } = eventsApi

export default eventsApi
