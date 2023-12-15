import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const episodesApi = createApi({
  reducerPath: 'episodesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getEpisodesRequest: builder.query({
      query: (params) => ({ url: '/character', params }),
    }),
  }),
})





export const { useGetEpisodesRequestQuery } = episodesApi
