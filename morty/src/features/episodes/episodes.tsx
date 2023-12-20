import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const {REACT_APP_API_BASE_URL} = process.env;
export const episodesApi = createApi({
    reducerPath: 'episodesApi',
    baseQuery: fetchBaseQuery({baseUrl: REACT_APP_API_BASE_URL}),
    endpoints: (builder) => ({
        getEpisodesRequest: builder.query({
            query: (params) => ({url: '/character', params}),
        }),

        getEpisodesCharacter: builder.mutation({
            query: (params) => (
                {
                    url: `/character/?name=${params.name}&status=${params.status}&species=${params.species}&type=${params.type}&gender=${params.gender}`
                }
            ),
        }),

        getEpisodesLocations: builder.mutation({
            query: (params) => (
                {
                    url: `/location/?name=${params.name}&dimension=${params.dimension}&type=${params.type}`
                }
            ),
        }),

        getEpisodesEpisodes: builder.mutation({
            query: (params) => (
                {
                    url: `/episode/?name=${params.name}&episode=${params.episode}`
                }
            ),
        }),

    }),
})


export const {
    useGetEpisodesRequestQuery,
    useGetEpisodesCharacterMutation,
    useGetEpisodesLocationsMutation,
    useGetEpisodesEpisodesMutation,
} = episodesApi
