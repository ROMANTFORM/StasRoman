import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { createSlice } from '@reduxjs/toolkit';
const {REACT_APP_API_BASE_URL} = process.env;

const episodesSlice = createSlice({
    name: 'episodes',
    initialState:[],
    reducers: {
        setEpisodes: (state, action) => {
            return action.payload;
        },
    },
});

export const { setEpisodes } = episodesSlice.actions;
export default episodesSlice.reducer;



export const episodesApi = createApi({
    reducerPath: 'episodesApi',
    tagTypes: ['GET_ALL_EPISODES'],
    baseQuery: fetchBaseQuery({baseUrl: REACT_APP_API_BASE_URL}),
    endpoints: (builder) => ({
        getEpisodesRequest: builder.query({
            query: (params) => ({url: '/character', params}),
            providesTags: ['GET_ALL_EPISODES'],
            async onQueryStarted(params, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setEpisodes(data));
                } catch {}
            },
        }),

        clearFilter: builder.mutation({
            // queryFn: () => ({data: null}),
            query: (params) => ({url: '/character', params}),
            invalidatesTags: ['GET_ALL_EPISODES'],
        }),

        getEpisodesCharacter: builder.mutation({
            query: (params) => (
                {
                    url: `/character/?name=${params.name}&status=${params.status}&species=${params.species}&type=${params.type}&gender=${params.gender}`
                }
            ),
            async onQueryStarted(params, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setEpisodes(data));
                } catch {}
            },

        }),

        getPaginationEpisodesCharacter: builder.mutation({
            query: (params) => (
                {
                    url: `/character/?page=${params.page}name=${params.name}&status=${params.status}&species=${params.species}&type=${params.type}&gender=${params.gender}`
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
    useClearFilterMutation,
    useGetEpisodesRequestQuery,
    useGetPaginationEpisodesCharacterMutation,
    useGetEpisodesCharacterMutation,
    useGetEpisodesLocationsMutation,
    useGetEpisodesEpisodesMutation,
} = episodesApi
